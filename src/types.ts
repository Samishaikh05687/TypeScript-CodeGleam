export interface CodeTheme {
  name: string;
  background: string;
  frameColor: string;
  gradientFrom?: string;
  gradientTo?: string;
  isDark?: boolean;
}

export interface CodeSettings {
  theme: CodeTheme;
  fontSize: number;
  padding: number;
  language: string;
  showBackground: boolean;
  isDarkMode: boolean;
}