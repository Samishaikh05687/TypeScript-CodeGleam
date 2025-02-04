
import { CodeSettings, CodeTheme } from '../types';
import { Palette, Type, Layout, Code, Sun, Moon, ToggleLeft } from 'lucide-react';

const themes: CodeTheme[] = [
  // Dark Themes
  { 
    name: 'Midnight Pro',
    background: 'bg-[#1E1E1E]',
    frameColor: 'border-[#313131]',
    gradientFrom: 'from-blue-500/10',
    gradientTo: 'to-purple-500/10',
    isDark: true
  },
  { 
    name: 'Ocean Dark',
    background: 'bg-[#011627]',
    frameColor: 'border-[#1E2D3D]',
    gradientFrom: 'from-cyan-500/10',
    gradientTo: 'to-blue-500/10',
    isDark: true
  },
  { 
    name: 'Monokai Pro',
    background: 'bg-[#2D2A2E]',
    frameColor: 'border-[#403E41]',
    gradientFrom: 'from-yellow-500/10',
    gradientTo: 'to-red-500/10',
    isDark: true
  },
  // Light Themes
  { 
    name: 'GitHub Light',
    background: 'bg-[#ffffff]',
    frameColor: 'border-[#e1e4e8]',
    gradientFrom: 'from-gray-100',
    gradientTo: 'to-gray-50',
    isDark: false
  },
  { 
    name: 'Solarized Light',
    background: 'bg-[#FDF6E3]',
    frameColor: 'border-[#EEE8D5]',
    gradientFrom: 'from-yellow-50',
    gradientTo: 'to-orange-50',
    isDark: false
  },
  { 
    name: 'Light+',
    background: 'bg-[#FFFFFF]',
    frameColor: 'border-[#D4D4D4]',
    gradientFrom: 'from-blue-50',
    gradientTo: 'to-indigo-50',
    isDark: false
  },
];

const languages = ['javascript', 'typescript', 'python', 'html', 'css', 'jsx', 'tsx', 'java', 'cpp', 'ruby'];

interface Props {
  settings: CodeSettings;
  onSettingsChange: (settings: CodeSettings) => void;
}

export function Settings({ settings, onSettingsChange }: Props) {
  const filteredThemes = themes.filter(theme => theme.isDark === settings.isDarkMode);

  return (
    <div className="space-y-6 p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50">
      <div className="flex items-center gap-2 mb-6">
        <Palette size={20} className="text-indigo-400" />
        <h2 className="text-xl font-semibold text-indigo-400">Customize</h2>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between gap-4 p-3 rounded-lg bg-gray-900/30">
          <div className="flex items-center gap-2">
            {settings.isDarkMode ? <Moon size={16} className="text-purple-400" /> : <Sun size={16} className="text-yellow-400" />}
            <span>Theme Mode</span>
          </div>
          <button
            onClick={() => onSettingsChange({ 
              ...settings, 
              isDarkMode: !settings.isDarkMode,
              theme: themes.find(t => t.isDark === !settings.isDarkMode) || themes[0]
            })}
            className="px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            {settings.isDarkMode ? 'Dark' : 'Light'}
          </button>
        </div>

        <div className="flex items-center justify-between gap-4 p-3 rounded-lg bg-gray-900/30">
          <div className="flex items-center gap-2">
            <ToggleLeft size={16} className="text-purple-400" />
            <span>Show Background</span>
          </div>
          <button
            onClick={() => onSettingsChange({ ...settings, showBackground: !settings.showBackground })}
            className="px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            {settings.showBackground ? 'On' : 'Off'}
          </button>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <Palette size={16} className="text-purple-400" />
            <h3 className="text-lg font-medium">Theme</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {filteredThemes.map((theme) => (
              <button
                key={theme.name}
                onClick={() => onSettingsChange({ ...settings, theme })}
                className={`p-4 rounded-lg border-2 transition-all ${
                  theme.background
                } ${theme.frameColor} ${
                  settings.theme.name === theme.name
                    ? 'ring-2 ring-indigo-400'
                    : 'hover:ring-2 hover:ring-indigo-400/50'
                }`}
              >
                <span className={theme.isDark ? 'text-white' : 'text-gray-900'}>
                  {theme.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <Type size={16} className="text-purple-400" />
            <h3 className="text-lg font-medium">Font Size</h3>
          </div>
          <input
            type="range"
            min="12"
            max="24"
            value={settings.fontSize}
            onChange={(e) =>
              onSettingsChange({ ...settings, fontSize: Number(e.target.value) })
            }
            className="w-full accent-indigo-400"
          />
          <div className="text-center mt-2 text-sm">{settings.fontSize}px</div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <Layout size={16} className="text-purple-400" />
            <h3 className="text-lg font-medium">Padding</h3>
          </div>
          <input
            type="range"
            min="16"
            max="64"
            value={settings.padding}
            onChange={(e) =>
              onSettingsChange({ ...settings, padding: Number(e.target.value) })
            }
            className="w-full accent-indigo-400"
          />
          <div className="text-center mt-2 text-sm">{settings.padding}px</div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <Code size={16} className="text-purple-400" />
            <h3 className="text-lg font-medium">Language</h3>
          </div>
          <select
            value={settings.language}
            onChange={(e) =>
              onSettingsChange({ ...settings, language: e.target.value })
            }
            className="w-full p-2 rounded-lg bg-gray-900/50 border border-gray-700/50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
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