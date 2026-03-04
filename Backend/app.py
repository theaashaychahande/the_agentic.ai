import streamlit as st
import time
from engine import engine

# --- Page Configuration ---
st.set_page_config(
    page_title="THEAASHAY.AI | Voice Intelligence",
    page_icon="🤖",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# --- Professional Styling ---
st.markdown("""
    <style>
    /* Main Theme */
    .stApp {
        background-color: #050505;
        color: #ffffff;
    }
    
    /* Neon Blue Accents */
    .stButton>button {
        background-color: #00D4FF22;
        color: #00D4FF;
        border: 1px solid #00D4FF44;
        border-radius: 4px;
        font-family: 'JetBrains Mono', monospace;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-size: 12px;
        transition: all 0.3s;
    }
    .stButton>button:hover {
        background-color: #00D4FF44;
        border: 1px solid #00D4FF;
        box-shadow: 0 0 15px #00D4FF33;
    }
    
    /* Professional Chat Styling */
    .chat-bubble {
        padding: 1.5rem;
        border-radius: 10px;
        margin-bottom: 1rem;
        border: 1px solid #ffffff11;
        background-color: #ffffff05;
        font-family: 'Inter', sans-serif;
    }
    .user-bubble {
        border-right: 3px solid #00D4FF;
        background-color: #00D4FF08;
    }
    .ai-bubble {
        border-left: 3px solid #00D4FF;
    }
    
    /* Glassmorphism Sidebar */
    [data-testid="stSidebar"] {
        background-color: #0a0a0a;
        border-right: 1px solid #ffffff11;
    }
    
    /* Header */
    .main-header {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 3rem;
        font-weight: 800;
        letter-spacing: -0.05em;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }
    .neon-text {
        color: #00D4FF;
        text-shadow: 0 0 10px #00D4FF66;
    }
    .sub-header {
        font-family: 'JetBrains Mono', monospace;
        font-size: 10px;
        letter-spacing: 0.2em;
        color: #ffffff44;
        margin-bottom: 2rem;
    }
    
    /* Custom Input */
    .stTextInput>div>div>input {
        background-color: #0a0a0a;
        border: 1px solid #ffffff11;
        color: #ffffff;
    }
    </style>
""", unsafe_allow_all_html=True)

# --- State Management ---
if "messages" not in st.session_state:
    st.session_state.messages = []
if "voice_active" not in st.session_state:
    st.session_state.voice_active = False

# --- UI Header ---
st.markdown('<h1 class="main-header">THEAASHAY.<span class="neon-text">AI</span></h1>', unsafe_allow_all_html=True)
st.markdown('<p class="sub-header">SYSTEM_STATUS: OPERATIONAL | LOCAL_CORE: DEEPSEEK_R1</p>', unsafe_allow_all_html=True)

# --- Chat Display ---
chat_container = st.container()

def display_chat():
    with chat_container:
        for message in st.session_state.messages:
            role_class = "user-bubble" if message["role"] == "user" else "ai-bubble"
            st.markdown(f"""
                <div class="chat-bubble {role_class}">
                    <div style="font-size: 10px; color: #ffffff44; margin-bottom: 0.5rem; font-family: 'JetBrains Mono';">
                        [{message["role"].upper()}_COMMAND]
                    </div>
                    {message["content"]}
                </div>
            """, unsafe_allow_all_html=True)

display_chat()

# --- Voice Interaction Logic ---
def trigger_voice():
    with st.spinner("Listening..."):
        text = engine.listen()
        if text and text != "Sorry, I didn't catch that.":
            process_input(text)
        elif text:
            st.warning(text)

def process_input(user_input):
    st.session_state.messages.append({"role": "user", "content": user_input})
    
    # Placeholder for AI response during stream
    with st.chat_message("assistant"):
        message_placeholder = st.empty()
        full_response = ""
        
        # Generate stream
        response_stream = engine.chat(st.session_state.messages)
        for chunk in response_stream:
            content = chunk['message']['content']
            full_response += content
            message_placeholder.markdown(full_response + "▌")
        
        message_placeholder.markdown(full_response)
        st.session_state.messages.append({"role": "assistant", "content": full_response})
        
        # Speak response
        engine.speak(full_response)
    
    st.rerun()

# --- Interaction Bar ---
cols = st.columns([0.1, 0.8, 0.1])

with cols[0]:
    if st.button("🎤", help="Voice Command"):
        trigger_voice()

with cols[1]:
    user_input = st.text_input("Enter Command...", label_visibility="collapsed", placeholder="SYSTEM_PROMPT> Enter query here")

with cols[2]:
    if st.button("🚀", use_container_width=True):
        if user_input:
            process_input(user_input)

# --- Footer Info ---
st.sidebar.markdown("""
### 🛠️ CONFIG
- **MODEL**: DEEPSEEK R1
- **PROVIDER**: OLLAMA
- **LATENCY**: LOCAL_DAEMON
""")

if st.sidebar.button("Clear Memory"):
    st.session_state.messages = []
    st.rerun()
