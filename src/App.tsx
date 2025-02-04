import { useState, useRef } from 'react';
import { Terminal,Code2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import * as htmlToImage from 'html-to-image';
import { CodeEditor } from './components/CodeEditor';
import { Controls } from './components/Controls';
import { Settings } from './components/Settings';
import { CodeSettings, CodeTheme } from './types';

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
  fontSize: 20,
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

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    toast.success('Code copied to clipboard!');
  };

  const handleDownload = async () => {
    if (codeRef.current) {
      const dataUrl = await htmlToImage.toPng(codeRef.current);
      const link = document.createElement('a');
      link.download = 'code-snapshot.png';
      link.href = dataUrl;
      link.click();
      toast.success('Image downloaded!');
    }
  };

  const handleShare = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('code', encodeURIComponent(code));
    url.searchParams.set('settings', encodeURIComponent(JSON.stringify(settings)));
    navigator.clipboard.writeText(url.toString());
    toast.success('Share link copied to clipboard!');
  };

  return (
    <div className={`min-h-screen ${settings.isDarkMode ? 'bg-black' : 'bg-white'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-8">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Terminal size={32} className={settings.isDarkMode ? 'text-white' : 'text-black'} />   
            </div>
            <h1 className={settings.isDarkMode ? 'text-3xl text-white font-serif' : 'text-black text-3xl font-serif'}>
            CodeGleam
            </h1>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Input Section */}

            <div className={`${settings.isDarkMode ? 'bg-[#333333]' : 'bg-slate-300'} backdrop-blur-sm p-6 rounded-lg border ${settings.isDarkMode ? 'border-gray-700/50' : 'border-gray-200'} transition-colors duration-300`}>
              <div className="flex items-center gap-2 mb-4">
                <Code2 size={20} className={settings.isDarkMode ? 'text-indigo-400' : 'text-indigo-600'} />
                <h2 className={`text-xl font-semibold ${settings.isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>Input Code</h2>
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className={`w-full h-[200px] ${
                  settings.isDarkMode ? 'bg-gray-900/50 text-gray-100' : 'bg-gray-50 text-gray-900'
                } p-4 rounded-lg border ${
                  settings.isDarkMode ? 'border-gray-700/50' : 'border-gray-200'
                } focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-mono resize-none transition-colors duration-300`}
                placeholder="Paste or type your code here..."
                spellCheck="false"
              />
            </div>

            {/* Preview Section */}
            <div className={`${settings.isDarkMode ? 'bg-gray-800/50' : 'bg-white'} backdrop-blur-sm p-6 rounded-lg border ${settings.isDarkMode ? 'border-gray-700/50' : 'border-gray-200'} transition-colors duration-300`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  
                  <h2 className={`text-xl font-semibold ${settings.isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>Preview</h2>
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