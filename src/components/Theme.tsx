import { CodeSettings, CodeTheme } from '../types';
import { Sun, Moon } from 'lucide-react';
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
  
  

interface Props {
    settings: CodeSettings;
    onSettingsChange: (settings: CodeSettings) => void;
}

const Theme = ({ settings, onSettingsChange }: Props) => {

    return (
        <>
            <button
                onClick={() => onSettingsChange({
                    ...settings,
                    isDarkMode: !settings.isDarkMode,
                    theme: themes.find(t => t.isDark === !settings.isDarkMode) || themes[0]
                })}
                className="px-4 py-3.5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
                {settings.isDarkMode ?  <Sun size={18} className="text-yellow-400"/> :  <Moon size={18} className="text-purple-400" />}
            </button>

        </>
    )
}

export default Theme