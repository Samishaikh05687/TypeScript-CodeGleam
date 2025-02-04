import { Download, Copy, Share2, Settings } from 'lucide-react';
import { CodeSettings } from '../types';

interface Props {
  onCopy: () => void;
  onDownload: () => void;
  onShare: () => void;
  onSettingsToggle: () => void;
  settings: CodeSettings;
}

export function Controls({ onCopy, onDownload, onShare, onSettingsToggle }: Props) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onCopy}
        className="flex items-center gap-2 px-3 py-1.5 bg-indigo-600/80 hover:bg-indigo-600 rounded-lg transition-colors text-sm"
        title="Copy to Clipboard"
      >
        <Copy size={16} />
        <span className="hidden sm:inline">Copy</span>
      </button>
      <button
        onClick={onDownload}
        className="flex items-center gap-2 px-3 py-1.5 bg-green-600/80 hover:bg-green-600 rounded-lg transition-colors text-sm"
        title="Download as PNG"
      >
        <Download size={16} />
        <span className="hidden sm:inline">Download</span>
      </button>
      <button
        onClick={onShare}
        className="flex items-center gap-2 px-3 py-1.5 bg-purple-600/80 hover:bg-purple-600 rounded-lg transition-colors text-sm"
        title="Share Link"
      >
        <Share2 size={16} />
        <span className="hidden sm:inline">Share</span>
      </button>
      <button
        onClick={onSettingsToggle}
        className="flex items-center gap-2 px-3 py-1.5 bg-gray-600/80 hover:bg-gray-600 rounded-lg transition-colors text-sm lg:hidden"
        title="Toggle Settings"
      >
        <Settings size={16} />
        <span className="hidden sm:inline">Settings</span>
      </button>
    </div>
  );
}