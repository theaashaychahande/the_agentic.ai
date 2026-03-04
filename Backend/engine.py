import ollama
import pyttsx3
import speech_recognition as sr
import threading
import queue
import time

class TheaashayEngine:
    def __init__(self, model="deepseek-r1"):
        self.model = model
        self.engine = pyttsx3.init()
        # Set professional voice properties
        voices = self.engine.getProperty('voices')
        if len(voices) > 0:
            self.engine.setProperty('voice', voices[0].id)  # Usually first is male/neutral
        self.engine.setProperty('rate', 175)
        
        self.recognizer = sr.Recognizer()
        self.microphone = sr.Microphone()
        
    def chat(self, messages):
        """Send message to Ollama and get response stream."""
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
        """TTS implementation."""
        def _speak():
            self.engine.say(text)
            self.engine.runAndWait()
        
        # Run in thread to not block UI
        threading.Thread(target=_speak).start()

    def listen(self):
        """STT implementation with a queue for callback."""
        with self.microphone as source:
            self.recognizer.adjust_for_ambient_noise(source)
            try:
                audio = self.recognizer.listen(source, timeout=5, phrase_time_limit=10)
                text = self.recognizer.recognize_google(audio)
                return text
            except sr.WaitTimeoutError:
                return None
            except sr.UnknownValueError:
                return "Sorry, I didn't catch that."
            except Exception as e:
                return f"STT Error: {str(e)}"

# Singleton instance
engine = TheaashayEngine()
