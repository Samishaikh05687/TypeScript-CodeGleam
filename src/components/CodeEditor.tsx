import { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prism-themes/themes/prism-vsc-dark-plus.css"; // VS Code-like theme
import "prismjs/plugins/line-numbers/prism-line-numbers.css"; // Line numbers CSS
import "prismjs/plugins/line-numbers/prism-line-numbers"; // Line numbers plugin
import "prismjs/components/prism-javascript"; // JavaScript support
import "prismjs/components/prism-jsx"; // JSX support
import "prismjs/components/prism-tsx"; // TSX support
import "prismjs/components/prism-typescript"; // TypeScript support
import "prismjs/components/prism-python"; // Python support

interface Props {
  code: string;
  settings: { language: string; fontSize: number };
}

export function CodeEditor({ code, settings }: Props) {
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (preRef.current) {
      const codeElement = preRef.current.querySelector("code");
      if (codeElement) {
        Prism.highlightElement(codeElement);
      }
    }
  }, [code, settings.language]);

  return (
    <div className="mac-window">
      <div className="mac-header">
        <div className="mac-buttons">
          <div className="mac-button close"></div>
          <div className="mac-button minimize"></div>
          <div className="mac-button maximize"></div>
        </div>
      </div>

      {/* Scrollable Container with Hidden Scrollbar */}
      <div
        className="mac-content"
        style={{
          maxHeight: "400px",     
          overflow: "auto",
          msOverflowStyle: "none", // Hides scrollbar in IE/Edge
        }}
      >
    
       

        <pre
          ref={preRef}
          className="line-numbers w-full overflow-auto font-mono"
          style={{
            fontSize:`${settings.fontSize}px`,
            lineHeight: `${settings.fontSize * 1.5}px`,
            minWidth: "300px",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            overflowX: "auto",
           margin: 0,
          }}
        >
          <code
            className={`language-${settings.language}`}
            style={{
              fontSize: `${settings.fontSize}px`,
              display: "block",
            }}
          >
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}
