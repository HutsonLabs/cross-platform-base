import { useEffect } from 'react';

interface ThemeColors {
  bgApp?: string;
  bgSurface?: string;
  bgHover?: string;
  border?: string;
  text?: string;
  textMuted?: string;
  accent?: string;
  accentHover?: string;
  accentText?: string;
}

export const useTheme = (customColors?: ThemeColors) => {
  useEffect(() => {
    if (!customColors) return;
    
    const root = document.documentElement;
    
    // Apply custom colors from user settings
    Object.entries(customColors).forEach(([key, value]) => {
      const cssVar = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      root.style.setProperty(cssVar, value);
    });
  }, [customColors]);
};