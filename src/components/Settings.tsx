
import { CodeSettings, CodeTheme } from '../types';
import { Palette, Type, Layout, Code } from 'lucide-react';

const themes: CodeTheme[] = [
  // 🌙 Dark Themes
  {
    name: 'Midnight Pro',
    background: 'bg-gradient-to-br from-[#1E1E1E] via-[#313131] to-[#111111]',
    frameColor: 'border-[#313131]',
    gradientFrom: 'from-blue-500/30',
    gradientTo: 'to-purple-500/30',
    isDark: true
  },
  {
    name: 'Ocean Dark',
    background: 'bg-gradient-to-br from-[#011627] via-[#022c43] to-[#003554]',
    frameColor: 'border-[#1E2D3D]',
    gradientFrom: 'from-cyan-500/30',
    gradientTo: 'to-blue-500/30',
    isDark: true
  },
  {
    name: 'Monokai Pro',
    background: 'bg-gradient-to-br from-[#2D2A2E] via-[#403E41] to-[#1E1E1E]',
    frameColor: 'border-[#403E41]',
    gradientFrom: 'from-yellow-500/30',
    gradientTo: 'to-red-500/30',
    isDark: true
  },
  {
    name: 'Dracula',
    background: 'bg-gradient-to-br from-[#282A36] via-[#3A3D4D] to-[#181920]',
    frameColor: 'border-[#44475A]',
    gradientFrom: 'from-purple-500/30',
    gradientTo: 'to-pink-500/30',
    isDark: true
  },
  {
    name: 'Nord Dark',
    background: 'bg-gradient-to-br from-[#2E3440] via-[#3B4252] to-[#1B1F27]',
    frameColor: 'border-[#3B4252]',
    gradientFrom: 'from-blue-400/30',
    gradientTo: 'to-indigo-400/30',
    isDark: true
  },
  {
    name: 'Material Dark',
    background: 'bg-gradient-to-br from-[#263238] via-[#37474F] to-[#1B252D]',
    frameColor: 'border-[#37474F]',
    gradientFrom: 'from-teal-400/30',
    gradientTo: 'to-blue-500/30',
    isDark: true
  },
  {
    name: 'Cyberpunk',
    background: 'bg-gradient-to-br from-[#0D0D0D] via-[#240046] to-[#7B2CBF]',
    frameColor: 'border-[#F81CE5]',
    gradientFrom: 'from-pink-500/30',
    gradientTo: 'to-yellow-500/30',
    isDark: true
  },
  {
    name: 'Vaporwave',
    background: 'bg-gradient-to-br from-[#1A1A2E] via-[#302B63] to-[#6639A6]',
    frameColor: 'border-[#E94560]',
    gradientFrom: 'from-pink-400/30',
    gradientTo: 'to-purple-600/30',
    isDark: true
  },

  // ☀️ Light Themes
  {
    name: 'GitHub Light',
    background: 'bg-gradient-to-br from-[#FFFFFF] via-[#F7F7F7] to-[#E1E4E8]',
    frameColor: 'border-[#e1e4e8]',
    gradientFrom: 'from-gray-100',
    gradientTo: 'to-gray-50',
    isDark: false
  },
  {
    name: 'Solarized Light',
    background: 'bg-gradient-to-br from-[#FDF6E3] via-[#EEE8D5] to-[#DECBA4]',
    frameColor: 'border-[#EEE8D5]',
    gradientFrom: 'from-yellow-50',
    gradientTo: 'to-orange-50',
    isDark: false
  },
  {
    name: 'Light+',
    background: 'bg-gradient-to-br from-[#FFFFFF] via-[#F8F8F8] to-[#D4D4D4]',
    frameColor: 'border-[#D4D4D4]',
    gradientFrom: 'from-blue-50',
    gradientTo: 'to-indigo-50',
    isDark: false
  },
  {
    name: 'Nord Light',
    background: 'bg-gradient-to-br from-[#ECEFF4] via-[#D8DEE9] to-[#B0BEC5]',
    frameColor: 'border-[#D8DEE9]',
    gradientFrom: 'from-blue-200/30',
    gradientTo: 'to-indigo-200/30',
    isDark: false
  },
  {
    name: 'Palenight Light',
    background: 'bg-gradient-to-br from-[#FAF7F5] via-[#F3E9DC] to-[#E3D6C8]',
    frameColor: 'border-[#E3D6C8]',
    gradientFrom: 'from-orange-100/30',
    gradientTo: 'to-yellow-100/30',
    isDark: false
  },
  {
    name: 'Material Light',
    background: 'bg-gradient-to-br from-[#FAFAFA] via-[#EAEAEA] to-[#BDBDBD]',
    frameColor: 'border-[#BDBDBD]',
    gradientFrom: 'from-teal-100/30',
    gradientTo: 'to-blue-200/30',
    isDark: false
  },
  {
    name: 'Pastel Light',
    background: 'bg-gradient-to-br from-[#FFF5E1] via-[#FFE5A6] to-[#FFC371]',
    frameColor: 'border-[#FFC371]',
    gradientFrom: 'from-orange-200/30',
    gradientTo: 'to-red-200/30',
    isDark: false
  },
  {
    name: 'Neon Light',
    background: 'bg-gradient-to-br from-[#F1F8E9] via-[#C5E1A5] to-[#81C784]',
    frameColor: 'border-[#C5E1A5]',
    gradientFrom: 'from-green-200/30',
    gradientTo: 'to-teal-300/30',
    isDark: false
  }
];



const languages = ['javascript', 'typescript', 'python', 'html', 'css', 'jsx', 'tsx', 'java', 'cpp', 'ruby'];

interface Props {
  settings: CodeSettings;
  onSettingsChange: (settings: CodeSettings) => void;
}

export function Settings({ settings, onSettingsChange }: Props) {
  const filteredThemes = themes.filter(theme => theme.isDark === settings.isDarkMode);

  return (
    <div className={`${settings.isDarkMode ? 'bg-[#3d3d3d8a]' : 'bg-purple-400 '} p-6 backdrop-blur-sm rounded-lg border border-gray-700/50`}>
      
      <div className="flex items-center  gap-3 mb-6 border-b border-white pb-2">
        <Palette size={24} className={`${settings.isDarkMode ? 'text-[#ad50d5]' : ' text-white'}`} />
        <h2 className={`${settings.isDarkMode ? 'text-[#ad50d5]' : ' text-white'} text-2xl font-bold `}>Customize</h2>
      </div>

      <div className="space-y-4 pb-1">

        <div className={`${settings.isDarkMode ? 'bg-black border border-white' : ' bg-white text-black border border-black'} flex items-center justify-between gap-4 px-4 py-3 rounded-full`}>
          <div className="flex items-center gap-2">
            <span className='font-medium'>Background</span>
          </div>

          {/* Toggle Switch */}
          <label className="relative inline-flex items-center cursor-pointer">
            {/* Hidden Checkbox */}
            <input
              type="checkbox"
              checked={settings.showBackground}
              onChange={() => onSettingsChange({ ...settings, showBackground: !settings.showBackground })}
              className="sr-only peer rounded-full"
            />

            {/* Toggle Background */}
            <div className="w-12 h-6 bg-gray-800 rounded-full transition-colors duration-300 peer-checked:bg-purple-500"></div>

            {/* Moving Circle */}
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out peer-checked:translate-x-6"></div>
          </label>
        </div>




        <div className="flex items-center gap-2 ">
          <Palette size={18} className={`${settings.isDarkMode ? 'text-[#ad50d5]' : ' text-white'}`} />
          <h3 className="text-xl font-medium">Theme</h3>
        </div>
        <div className="relative">
          <select
            value={settings.theme.name}
            onChange={(e) => {
              const selectedTheme = filteredThemes.find(theme => theme.name === e.target.value);
              if (selectedTheme) {
                onSettingsChange({ ...settings, theme: selectedTheme });
              }
            }}
            className={`${settings.isDarkMode ? 'bg-black border-white ' : ' bg-white text-black border-black'} w-full p-2 rounded-lg  border  focus:border-purple-500 focus:ring-1 focus:ring-purple-500`}
          >
            {filteredThemes.map((theme) => (
              <option key={theme.name} value={theme.name}>
                {theme.name}
              </option>
            ))}
          </select>
        </div>



        <div className='flex items-center justify-start gap-28'>
          <div className='flex flex-col items-center justify-center'>
          <div className="flex items-center gap-2 mb-3">
            <Type size={16} className={`${settings.isDarkMode ? 'text-[#ad50d5]' : ' text-white'}`} />
            <h3 className="text-lg font-medium">Font Size</h3>
          </div>
          <input
            type="number"
            min="12"
            max="24"
            value={settings.fontSize}
            onChange={(e) =>
              onSettingsChange({ ...settings, fontSize: Number(e.target.value) })
            }
            className={`${settings.isDarkMode ? 'bg-black border-white ' : ' bg-white text-black border-black'} w-full p-1 rounded-lg  border  focus:border-purple-500 focus:ring-1 focus:ring-purple-500`}
          />
         <div className={`${settings.isDarkMode ? 'text-[#ad50d5]' : ' text-black'} text-center mt-2 text-md font-medium`}>{settings.fontSize}px</div>
          </div>
          <div>
          <div className="flex items-center gap-2 mb-3">
            <Layout size={16} className={`${settings.isDarkMode ? 'text-[#ad50d5]' : ' text-white'}`} />
            <h3 className="text-lg font-medium">Padding</h3>
          </div>
          <input
            type="number"
            min="16"
            max="64"
            value={settings.padding}
            onChange={(e) =>
              onSettingsChange({ ...settings, padding: Number(e.target.value) })
            }
            className={`${settings.isDarkMode ? 'bg-black border-white ' : ' bg-white text-black border-black'} w-full p-1 rounded-lg  border  focus:border-purple-500 focus:ring-1 focus:ring-purple-500`}
          />
          <div className={`${settings.isDarkMode ? 'text-[#ad50d5]' : ' text-black'} text-center mt-2 text-md font-medium`}>{settings.padding}px</div>
        </div>
        </div>
        
          
        

        <div>
          <div className="flex items-center gap-2 mb-3">
            <Code size={16} className={`${settings.isDarkMode ? 'text-[#ad50d5]' : ' text-white'}`} />
            <h3 className="text-lg font-medium">Language</h3>
          </div>
          <select
            value={settings.language}
            onChange={(e) =>
              onSettingsChange({ ...settings, language: e.target.value })
            }
            className={`${settings.isDarkMode ? 'bg-black border-white ' : ' bg-white text-black border-black'} w-full p-2 rounded-lg  border  focus:border-purple-500 focus:ring-1 focus:ring-purple-500`}
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}