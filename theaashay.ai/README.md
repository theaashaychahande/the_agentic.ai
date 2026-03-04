<div align="center">
  <img src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" alt="Aashay AI Banner" width="100%">
  <br />
  <h1>🤖 THEAASHAY.AI</h1>
  <p><strong>A decentralized, locally-hosted AI orchestrator for total autonomy.</strong></p>
  
  [![License: Proprietary](https://img.shields.io/badge/License-Proprietary-blue.svg)](LICENSE)
  [![Tech Stack: 100% Free](https://img.shields.io/badge/Tech_Stack-100%25_Free-brightgreen.svg)](#-tech-stack)
  [![Status: Operational](https://img.shields.io/badge/Status-Operational-00D4FF.svg)](#)
</div>

---

## 📖 Overview

**Aashay** is a sophisticated, locally-hosted AI assistant designed for security-conscious users who demand total data sovereignty without sacrificing advanced capabilities. Powered by **Deepseek R1** via **Ollama**, it integrates professional-grade voice orchestration, persistent vector-like memory, and a dynamic writing environment—all within a zero-latency, zero-tracking ecosystem.

## 🏗️ Technical Architecture

Aashay operates on a hybrid-local architecture, maximizing local compute while utilizing minimal cloud resources for lightweight state persistence.

```mermaid
graph TD
    A[Voice/Text Input] --> B[Orchestration Layer]
    B --> C{Decision Engine}
    C -->|Local| D[Ollama / Deepseek R1]
    C -->|Cloud Fallback| E[External LLM APIs]
    D --> F[Persistence Layer]
    E --> F
    F --> G[Firebase Firestore / Local Cache]
    B --> H[Writing Pad / Export Engine]
    H --> I[.docx / .pdf Output]
    B --> J[TTS Engine]
    J --> K[Audio Output]
```

## 🚀 Key Features

### 🧠 Neural Core & Orchestration
- **Deepseek R1 Integration:** High-performance local inference via Ollama REST API (`localhost:11434`).
- **Hybrid Inference:** Seamlessly bridge to external providers (OpenAI, Anthropic) for specialized tasks via configurable API tunneling.
- **System Prompt Injection:** Advanced behavioral modeling and tone control injected at the inference layer for consistent personality.

### 🎙️ Modality & Interface
- **Real-time STT Pipeline:** Low-latency speech-to-intent processing.
- **Streamed TTS:** Asynchronous, sentence-by-sentence audio synthesis for natural interaction flow.
- **Hybrid UI/UX:** A glassmorphic, tech-centric interface built with React & Vite, optimized for both visual and auditory data streams.

### 📝 Productivity Suite
- **Volatile Writing Pad:** An encrypted, session-only workspace for drafting sensitive documents, emails, and code.
- **Multi-Format Export:** Standardized document generation for `.docx` and `.pdf` using open-source compiler libraries.
- **Persistent Context:** Historical conversation state synchronization with Firebase Firestore, ensuring continuity across sessions while maintaining user privacy.

## 🛠️ Tech Stack

- **LLM Engine:** [Ollama](https://ollama.ai/) + [Deepseek R1](https://deepseek.com/)
- **Frontend:** React 19, Vite, Tailwind CSS 4, Motion (framer-motion)
- **Database:** Firebase Firestore (Metadata & Logs)
- **Icons:** Lucide React
- **Runtime:** Node.js

## ⚙️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [Ollama](https://ollama.ai/) installed and running.
- `deepseek-r1` model pulled: `ollama pull deepseek-r1`

### Installation

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/yourusername/aashay.ai.git
    cd aashay.ai
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Configuration:**
    Create a `.env.local` file in the root directory:
    ```env
    VITE_EXTERNAL_API_KEY=your_optional_key
    # Add Firebase & other config as needed
    ```

4.  **Run Development Server:**
    ```bash
    npm run dev
    ```

## 🗺️ Roadmap v2.0

- [ ] **Autonomous Agents:** Browser automation via Playwright for web-based task execution.
- [ ] **Ecosystem Integration:** Deep linking with Google Calendar and Email APIs.
- [ ] **Local FS Control:** Direct, secure management of local file systems via natural language.
- [ ] **Proactive Intel:** Context-aware suggestions based on local system activity.

## ⚖️ License

Proprietary License. All rights reserved. Code is provided for personal use and evaluation only.

---

<div align="center">
  <p>Built with ⚡ by <a href="https://github.com/theaashay">@theaashay</a></p>
</div>
