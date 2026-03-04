import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import {
  Mic,
  Cpu,
  MessageSquare,
  History,
  Settings,
  FileText,
  Download,
  Key,
  ArrowRight,
  ChevronRight,
  Terminal as TerminalIcon,
  Activity,
  Database,
  Lock,
  Code,
  Zap,
  Radio,
  Shield,
  Globe,
  Mail,
  Folder,
  Brain
} from 'lucide-react';



// This generates those floating hex codes on the left
const DataStream = () => {
  const [streams, setStreams] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const hex = Math.random().toString(16).substring(2, 8).toUpperCase();
      setStreams(prev => [hex, ...prev].slice(0, 15));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-2 opacity-20 pointer-events-none">
      <div className="data-text mb-2">System_Log</div>
      {streams.map((s, i) => (
        <motion.div
          key={i + s}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-mono text-[8px] text-electric-blue"
        >
          {`> 0x${s}_INIT_OK`}
        </motion.div>
      ))}
    </div>
  );
};

// Subtle grid background effect
const CoordinateSystem = () => (
  <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full grid-bg" />
    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-electric-blue" />
    <div className="absolute top-0 left-1/2 w-[1px] h-full bg-electric-blue" />
    {[...Array(10)].map((_, i) => (
      <React.Fragment key={i}>
        <div className="absolute top-[10%] left-0 w-full h-[1px] bg-electric-blue/20" style={{ top: `${i * 10}%` }} />
        <div className="absolute top-0 left-[10%] w-[1px] h-full bg-electric-blue/20" style={{ left: `${i * 10}%` }} />
      </React.Fragment>
    ))}
  </div>
);

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-electric-blue/10 bg-deep-space/80 backdrop-blur-md px-4 md:px-6 py-3">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="relative group">
            <div className="w-8 h-8 md:w-10 md:h-10 tech-border flex items-center justify-center bg-electric-blue/5 group-hover:bg-electric-blue/10 transition-colors">
              <TerminalIcon className="w-4 h-4 md:w-5 md:h-5 text-electric-blue" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 md:w-2 md:h-2 bg-electric-blue animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-display font-bold text-base md:text-xl tracking-tighter leading-none group-hover:animate-glitch">THEAASHAY.AI</span>
            <div className="flex items-center gap-1 md:gap-2">
              <div className="w-0.5 h-0.5 md:w-1 md:h-1 bg-electric-blue rounded-full animate-pulse" />
              <span className="data-text text-[6px] md:text-[8px]">Seneca_Systems_v2.5</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {['Features', 'Architecture', 'Security', 'Advancements'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 hover:text-electric-blue transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-electric-blue group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <button className="tech-border bg-electric-blue/10 hover:bg-electric-blue/20 px-4 md:px-6 py-1.5 md:py-2 text-[8px] md:text-[10px] font-mono uppercase tracking-widest text-electric-blue transition-all active:scale-95">
          [ Join ]
        </button>
      </div>
    </nav>
  );
};

// The big glowing central animation
const HologramCore = () => {
  return (
    <div className="relative w-72 h-72 md:w-[500px] md:h-[500px] flex items-center justify-center">
      <div className="scanline rounded-full" />


      <div className="absolute inset-0 border-[1px] border-electric-blue/10 rounded-full animate-pulse-slow" />
      <div className="absolute inset-10 border-[1px] border-electric-blue/5 rounded-full" />


      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
          className="absolute border border-electric-blue/20 rounded-full border-dashed"
          style={{ width: `${100 - i * 15}%`, height: `${100 - i * 15}%` }}
        />
      ))}


      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            "0 0 20px rgba(0,212,255,0.2)",
            "0 0 40px rgba(0,212,255,0.4)",
            "0 0 20px rgba(0,212,255,0.2)"
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="relative w-40 h-40 md:w-64 md:h-64 tech-border bg-electric-blue/5 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full grid-bg" />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <Cpu className="w-16 h-16 md:w-24 md:h-24 text-electric-blue mb-4 animate-pulse" />
          <div className="data-text text-[8px] animate-pulse">Processing_R1</div>
        </div>


        <AnimatePresence>
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: [0, 1, 0], y: -100 }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 1 }}
              className="absolute font-mono text-[8px] text-electric-blue/40 whitespace-nowrap"
              style={{ left: `${20 + i * 20}%` }}
            >
              {`0x${Math.random().toString(16).slice(2, 6)}`}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>


      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-full"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-electric-blue shadow-[0_0_10px_rgba(0,212,255,1)] rounded-full" />
        </motion.div>
      ))}
    </div>
  );
};

// Reusable card component for features
const TechCard = ({ icon: Icon, title, description, tag }: { icon: any, title: string, description: string, tag: string, key?: React.Key }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="tech-border bg-white/[0.02] p-8 group hover:bg-electric-blue/[0.03] transition-all duration-500"
    >
      <div className="flex justify-between items-start mb-8">
        <div className="w-12 h-12 tech-border bg-electric-blue/5 flex items-center justify-center group-hover:bg-electric-blue/20 transition-colors">
          <Icon className="w-6 h-6 text-electric-blue" />
        </div>
        <span className="data-text text-[8px] opacity-40">{tag}</span>
      </div>

      <h3 className="text-lg font-display font-bold mb-4 tracking-tight group-hover:text-electric-blue transition-colors uppercase">
        {title}
      </h3>
      <p className="text-white/40 text-xs leading-relaxed font-sans">
        {description}
      </p>

      <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-electric-blue/20 rounded-full" />
          ))}
        </div>
        <ChevronRight className="w-4 h-4 text-electric-blue/40 group-hover:text-electric-blue transition-colors" />
      </div>
    </motion.div>
  );
};

// Nodes for the architecture visualization
const ArchitectureNode = ({ title, desc, icon: Icon, active }: { title: string, desc: string, icon: any, active?: boolean }) => (
  <div className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 p-4 sm:p-6 tech-border transition-all cursor-pointer group/node ${active ? 'bg-electric-blue/10 border-electric-blue/40 opacity-100' : 'bg-white/5 opacity-50 hover:opacity-100 hover:bg-electric-blue/10 hover:border-electric-blue/40'}`}>
    <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-colors ${active ? 'text-electric-blue' : 'text-white/20 group-hover/node:text-electric-blue'}`}>
      <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
    </div>
    <div className="text-center sm:text-left">
      <h4 className={`text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors ${active ? 'text-electric-blue' : 'text-white/40 group-hover/node:text-electric-blue'}`}>{title}</h4>
      <p className="text-[9px] sm:text-[10px] text-white/30 font-mono mt-1">{desc}</p>
    </div>
  </div>
);

export default function App() {
  const [email, setEmail] = useState('');
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  const features = [
    { icon: Mic, title: "Neural Voice Engine", description: "Advanced speech-to-intent processing with sub-50ms latency response.", tag: "MODALITY_01" },
    { icon: Cpu, title: "Deepseek R1 Local", description: "Full model execution on local hardware via Ollama orchestration.", tag: "COMPUTE_02" },
    { icon: MessageSquare, title: "Hybrid Interface", description: "Unified command center for text, voice, and visual data streams.", tag: "UI_UX_03" },
    { icon: History, title: "Vector Memory", description: "Long-term context retention using local vector database indexing.", tag: "STORAGE_04" },
    { icon: Settings, title: "System Overrides", description: "Granular control over model personality and operational constraints.", tag: "CONFIG_05" },
    { icon: FileText, title: "Volatile Scratchpad", description: "Encrypted, session-only writing environment for secure drafting.", tag: "SECURITY_06" },
    { icon: Download, title: "Format Compiler", description: "Direct export to standardized document formats (PDF/DOCX).", tag: "IO_07" },
    { icon: Key, title: "API Bridge", description: "Secure tunneling for cloud-based LLM integration and fallback.", tag: "NETWORK_08" },
  ];

  const advancements = [
    { icon: Globe, title: "Browser Automation", description: "Autonomous web navigation and task execution via Playwright integration.", tag: "NEXT_GEN_01" },
    { icon: Mail, title: "API Ecosystem", description: "Deep integration with Calendar and Email providers for schedule management.", tag: "NEXT_GEN_02" },
    { icon: Folder, title: "Filesystem Control", description: "Direct, secure management of local files and directories via natural language.", tag: "NEXT_GEN_03" },
    { icon: Brain, title: "Predictive Intel", description: "Proactive, context-aware suggestions based on local activity and history.", tag: "NEXT_GEN_04" },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-deep-space selection:bg-electric-blue selection:text-black font-sans">
      <CoordinateSystem />
      <DataStream />
      <Navbar />


      <section className="relative pt-48 pb-32 px-6 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
        >
          <HologramCore />
        </motion.div>

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col items-center justify-center"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[1px] w-8 bg-electric-blue/40" />
              <span className="data-text animate-pulse group-hover:animate-glitch">System_Status: Operational</span>
              <div className="h-[1px] w-8 bg-electric-blue/40" />
            </div>

            <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter mb-8 leading-none uppercase text-center w-full group">
              <span className="group-hover:animate-glitch inline-block">Personal</span> <br />
              <span className="text-electric-blue neon-text italic group-hover:animate-glitch inline-block">Intelligence</span>
            </h1>

            <p className="text-white/40 text-[10px] md:text-base max-w-xl mx-auto mb-12 font-mono leading-relaxed tracking-tight text-center px-4">
              [ THEAASHAY.AI ] — A DECENTRALIZED, LOCALLY-HOSTED AI ORCHESTRATOR.
              ZERO LATENCY. ZERO TRACKING. TOTAL AUTONOMY.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto mb-12 px-6">
              <button className="w-full sm:w-auto tech-border bg-electric-blue text-black px-8 py-4 font-display font-bold uppercase tracking-widest hover:bg-white transition-all active:scale-95 shadow-[0_0_30px_rgba(0,212,255,0.3)] text-xs md:text-sm">
                Initialize_Access
              </button>
              <button className="w-full sm:w-auto tech-border bg-white/5 hover:bg-white/10 px-8 py-4 font-display font-bold uppercase tracking-widest transition-all text-white/80 text-xs md:text-sm">
                View_Specs
              </button>
            </div>

            <div className="flex gap-8 md:gap-20 opacity-30 mt-8">
              <div className="flex flex-col items-center">
                <span className="data-text text-[10px]">Latency</span>
                <span className="font-mono text-lg md:text-xl">12ms</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="data-text text-[10px]">Privacy</span>
                <span className="font-mono text-lg md:text-xl">100%</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="data-text text-[10px]">Uptime</span>
                <span className="font-mono text-lg md:text-xl">99.9</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      <section id="architecture" className="py-20 md:py-32 px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <div className="data-text mb-4">Core_Architecture</div>
            <h2 className="text-3xl md:text-6xl font-display font-bold mb-8 uppercase tracking-tighter">
              The Local <br /><span className="text-electric-blue">Advantage</span>
            </h2>
            <p className="text-white/40 text-xs md:text-sm leading-relaxed mb-12 max-w-lg font-sans">
              Traditional AI relies on centralized servers, creating latency and privacy risks.
              Theaashay.ai flips the script by running Deepseek R1 directly on your silicon.
              Our orchestration layer manages memory, voice, and document generation in a
              sandboxed environment that you control.
            </p>

            <div className="flex flex-col gap-4">
              <ArchitectureNode title="Input_Capture" desc="Voice/Text stream ingestion" icon={Radio} />
              <ArchitectureNode title="Neural_Processing" desc="Deepseek R1 local inference" icon={Zap} active />
              <ArchitectureNode title="Secure_Output" desc="Encrypted data delivery" icon={Lock} />
            </div>
          </div>

          <div className="relative aspect-square tech-border bg-electric-blue/5 p-6 md:p-12 overflow-hidden">
            <div className="scanline" />
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="data-text">Security_Protocol: AES-256</div>
                <Activity className="text-electric-blue animate-pulse" />
              </div>

              <div className="flex flex-col gap-2">
                <div className="h-1 w-full bg-electric-blue/20 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="h-full w-1/3 bg-electric-blue"
                  />
                </div>
                <div className="flex justify-between data-text text-[8px]">
                  <span>Memory_Usage</span>
                  <span>4.2GB / 16GB</span>
                </div>
              </div>

              <div className="font-mono text-[10px] text-electric-blue/60 leading-tight">
                {`> BOOT_SEQUENCE_COMPLETE\n> LOADING_NEURAL_WEIGHTS...\n> LOCAL_HOST_READY\n> ENCRYPTION_ACTIVE`}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="security" className="py-20 md:py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center">
            <div className="flex-1 order-2 lg:order-1 w-full">
              <div className="relative aspect-video tech-border bg-electric-blue/5 p-6 md:p-8 flex flex-col justify-center items-center overflow-hidden">
                <div className="scanline" />
                <Shield className="w-20 h-20 md:w-32 md:h-32 text-electric-blue mb-6 animate-pulse" />
                <div className="data-text text-lg md:text-xl mb-2">ENCRYPTION_ACTIVE</div>
                <div className="font-mono text-[8px] md:text-[10px] text-white/40">AES-256-GCM_STRICT_MODE</div>


                <div className="absolute top-4 left-4 data-text text-[8px] md:text-[10px]">SEC_LEVEL: ALPHA</div>
                <div className="absolute bottom-4 right-4 data-text text-[8px] md:text-[10px]">NODE_ID: {Math.random().toString(16).slice(2, 10).toUpperCase()}</div>
              </div>
            </div>

            <div className="flex-1 order-1 lg:order-2">
              <div className="data-text mb-4">Security_Protocol</div>
              <h2 className="text-3xl md:text-6xl font-display font-bold mb-8 uppercase tracking-tighter">
                Fortress <br /><span className="text-electric-blue">Privacy</span>
              </h2>
              <div className="space-y-6 md:space-y-8">
                {[
                  { title: "Local-First Architecture", desc: "No data ever leaves your hardware. All processing happens on your CPU/GPU, ensuring 100% data sovereignty." },
                  { title: "Zero Cloud Dependency", desc: "Operates entirely offline. Immune to cloud outages, data breaches, or corporate surveillance programs." },
                  { title: "AES-256 Encryption", desc: "Your local conversation history and writing pad are encrypted at rest using industry-standard AES-256 protocols." },
                  { title: "Sandboxed Execution", desc: "The Ollama engine runs in a restricted environment, ensuring the AI cannot access unauthorized system resources." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-1 h-auto bg-electric-blue/20 rounded-full" />
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="features" className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:20 gap-8">
            <div className="max-w-xl">
              <div className="data-text mb-4">Modules_v1.0</div>
              <h2 className="text-3xl md:text-6xl font-display font-bold uppercase tracking-tighter">
                Technical <span className="text-electric-blue italic">Specifications</span>
              </h2>
            </div>
            <div className="data-text opacity-40 hidden md:block">
              Total_Modules: 08 <br />
              Status: Verified
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {features.map((feature, index) => (
              <TechCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>


      <section id="advancements" className="py-20 md:py-32 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <div className="data-text mb-4">Roadmap_v2.0</div>
            <h2 className="text-3xl md:text-6xl font-display font-bold uppercase tracking-tighter">
              Future <span className="text-electric-blue italic">Advancements</span>
            </h2>
            <p className="text-white/40 text-xs md:text-sm max-w-2xl mx-auto mt-6 font-sans px-4">
              We are constantly pushing the boundaries of what a local AI can achieve.
              Here is what's coming next to the Seneca ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advancements.map((adv, index) => (
              <TechCard key={index} icon={adv.icon} title={adv.title} description={adv.description} tag={adv.tag} />
            ))}
          </div>
        </div>
      </section>


      <section className="py-24 md:py-48 px-6 relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-electric-blue/5 rounded-full blur-[60px] md:blur-[120px] -z-10" />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="data-text mb-6">Access_Request</div>
            <h2 className="text-4xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-8 md:mb-12">
              Secure Your <br /><span className="text-electric-blue">Node</span>
            </h2>

            <form className="flex flex-col sm:flex-row gap-0 max-w-2xl mx-auto tech-border p-1 bg-white/5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="USER@NETWORK.COM"
                className="flex-1 bg-transparent px-6 md:px-8 py-4 md:py-5 focus:outline-none font-mono text-xs md:text-sm uppercase tracking-widest"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-electric-blue text-black px-8 md:px-12 py-4 md:py-5 font-display font-bold uppercase tracking-widest hover:bg-white transition-all text-xs md:text-sm">
                Request_Invite
              </button>
            </form>

            <div className="mt-12 flex items-center justify-center gap-8 opacity-30">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span className="data-text">Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4" />
                <span className="data-text">Decentralized</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      <footer className="py-12 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 tech-border flex items-center justify-center">
                <span className="text-electric-blue font-bold text-xs">S</span>
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter uppercase">Theaashay.ai</span>
            </div>
            <p className="data-text">© 2026 Seneca_Systems_Corp</p>
          </div>

          <div className="flex gap-12">
            <div className="flex flex-col gap-2">
              <span className="data-text text-white/60">Network</span>
              <a href="#" className="data-text hover:text-electric-blue">Discord</a>
              <a href="#" className="data-text hover:text-electric-blue">Twitter</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="data-text text-white/60">Legal</span>
              <a href="#" className="data-text hover:text-electric-blue">Privacy</a>
              <a href="#" className="data-text hover:text-electric-blue">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
