import ollama
import threading
import queue
import time

# Voice libs are optional since they're pain to install on some systems
try:
    import pyttsx3
    HAS_TTS = True
except ImportError:
    HAS_TTS = False

try:
    import speech_recognition as sr
    HAS_STT = True
except ImportError:
    HAS_STT = False

class TheaashayEngine:
    def __init__(self, model="deepseek-r1"):
        global HAS_STT, HAS_TTS
        self.model = model
        self.tts_engine = None
        if HAS_TTS:
            try:
                self.tts_engine = pyttsx3.init()
                # Use whatever the system default voice is
                voices = self.tts_engine.getProperty('voices')
                if len(voices) > 0:
                    self.tts_engine.setProperty('voice', voices[0].id)
                self.tts_engine.setProperty('rate', 175)
            except Exception:
                HAS_TTS = False
        
        self.recognizer = None
        self.microphone = None
        if HAS_STT:
            try:
                self.recognizer = sr.Recognizer()
                self.microphone = sr.Microphone()
            except Exception:
                # This usually fails if PyAudio is missing
                HAS_STT = False
        
    def chat(self, messages):
        """Talk to the local Ollama instance"""
        try:
            response = ollama.chat(
                model=self.model,
                messages=messages,
                stream=True,
            )
            return response
        except Exception as e:
            return f"Error connecting to Ollama: {str(e)}"

    def speak(self, text):
        """Standard TTS wrapper"""
        if not (HAS_TTS and self.tts_engine):
            return
            
        def _speak():
            try:
                self.tts_engine.say(text)
                self.tts_engine.runAndWait()
            except Exception:
                pass
        
        # Keep it in a thread so we don't hang the UI
        threading.Thread(target=_speak).start()

    def listen(self):
        """Listen for a few seconds and convert to text"""
        if not (HAS_STT and self.microphone):
            return "Voice input is not available on this system configuration."
            
        with self.microphone as source:
            self.recognizer.adjust_for_ambient_noise(source)
            try:
                audio = self.recognizer.listen(source, timeout=5, phrase_time_limit=10)
                text = self.recognizer.recognize_google(audio)
                return text
            except Exception as e:
                # Handle timeouts and silence gracefully
                if "WaitTimeoutError" in str(type(e)):
                    return None
                if "UnknownValueError" in str(type(e)):
                    return "Sorry, I didn't catch that."
                return f"STT Error: {str(e)}"

# Global instance for the app to import
engine = TheaashayEngine()
