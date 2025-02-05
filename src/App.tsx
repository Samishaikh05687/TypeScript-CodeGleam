import { useState, useRef,useEffect } from 'react';
import { Terminal } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import  html2canvas from "html2canvas";
import { CodeEditor } from './components/CodeEditor';
import { Controls } from './components/Controls';
import { Settings } from './components/Settings';
import { CodeSettings, CodeTheme } from './types';
import Theme from './components/Theme';

const defaultTheme: CodeTheme = {
  name: 'Midnight Pro',
  background: 'bg-[#1E1E1E]',
  frameColor: 'border-[#313131]',
  gradientFrom: 'from-blue-500/10',
  gradientTo: 'to-purple-500/10',
  isDark: true
};

const defaultSettings: CodeSettings = {
  theme: defaultTheme,
  fontSize: 16,
  padding: 32,
  language: 'javascript',
  showBackground: true,
  isDarkMode: true,
};

function App() {
  const [code, setCode] = useState('Paste your code here...');
  const [settings, setSettings] = useState<CodeSettings>(defaultSettings);
  const [showSettings, setShowSettings] = useState(false);
  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sharedCode = urlParams.get("code");
    const sharedSettings = urlParams.get("settings");
  
    if (sharedCode) setCode(decodeURIComponent(sharedCode));
    if (sharedSettings) {
      try {
        setSettings(JSON.parse(atob(sharedSettings))); // Decode Base64 before parsing
      } catch (error) {
        console.error("Invalid settings data:", error);
      }
    }
  }, []);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    toast.success('Code copied to clipboard!');
  };

  

  const handleDownload = async () => {
    if (codeRef.current) {
      try {
        const canvas = await html2canvas(codeRef.current, {
          backgroundColor: null, // Transparent background
          scale: 2, // Higher quality image
          useCORS: true, // Ensures external styles/fonts load
      
        });
  
        const dataUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = "code-snapshot.png";
        link.href = dataUrl;
        link.click();
  
        toast.success("Image downloaded successfully!");
      } catch (error) {
        console.error("Error generating image:", error);
        toast.error("Failed to download image!");
      }
    }
  };
  

  const handleShare = () => {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('code', encodeURIComponent(code));
      url.searchParams.set('settings', btoa(JSON.stringify(settings))); // Use Base64 encoding
  
      navigator.clipboard.writeText(url.toString());
      toast.success('Share link copied to clipboard!');
    } catch (error) {
      console.error('Error generating share link:', error);
      toast.error('Failed to generate share link.');
    }
  };
  

  return (
    <div className={`min-h-screen ${settings.isDarkMode ? 'bg-black' : 'bg-white'} transition-colors duration-300`}>
        <header className={`${settings.isDarkMode ? 'p-2 px-4 py-4' : 'bg-gray-300 p-2 px-4 py-4'} mb-8  `}>
          <div className="flex items-center gap-3 justify-between">
   
            <div className=" items-center flex gap-2">
              <Terminal size={32} className={settings.isDarkMode ? 'text-white' : 'text-black'} />   
            <h1 className={settings.isDarkMode ? 'text-3xl text-white font-serif' : 'text-black text-3xl font-serif'}>
            CodeGleam
            </h1>
            </div>
            <Theme settings={settings} onSettingsChange={setSettings} />
          </div>
        </header>
      <div className="container  px-4 ">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Input Section */}

            
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className={`w-full h-[200px] ${
                  settings.isDarkMode ? 'bg-[#3d3d3d8a] text-gray-100' : 'bg-gray-50 text-gray-900'
                } p-4 rounded-lg border ${
                  settings.isDarkMode ? 'border-white' : 'border-purple-700'
                }  focus:border-purple-500 focus:ring-1 focus:ring-purple-900  font-mono resize-none transition-all `}
                placeholder="Paste or type your code here..."
                spellCheck="false"
               
              />
           

            {/* Preview Section */}
            <div className={`${settings.isDarkMode ? 'bg-[#3d3d3d8a]' : 'bg-slate-200 border border-purple-700'} backdrop-blur-sm p-6 rounded-lg border ${settings.isDarkMode ? 'border-gray-700/50' : 'border-gray-200'} transition-colors duration-300`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  
                  <h2 className={`text-2xl font-semibold ${settings.isDarkMode ? 'text-purple-500' : 'text-black '}`}>Preview</h2>
                </div>
                <Controls
                  onCopy={handleCopy}
                  onDownload={handleDownload}
                  onShare={handleShare}
                  onSettingsToggle={() => setShowSettings(!showSettings)}
                  settings={settings}
                />
              </div>
              <div
                ref={codeRef}
                className={`rounded-lg border-2 ${settings.theme.background} ${
                  settings.theme.frameColor
                } ${
                  settings.showBackground
                    ? `bg-gradient-to-br ${settings.theme.gradientFrom} ${settings.theme.gradientTo}`
                    : ''
                }`}
                style={{ padding: `${settings.padding}px` }}
              >
                <CodeEditor
                  code={code}
                  settings={settings}
                />
              </div>
            </div>
            

          </div>

          {/* Settings Panel */}
          <div className={`lg:col-span-1 transition-all duration-300 ${showSettings ? 'opacity-100' : 'opacity-0 lg:opacity-100'}`}>
            <div className="sticky top-8">
              <Settings
                settings={settings}
                onSettingsChange={setSettings}
              />
            </div>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App