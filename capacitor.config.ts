import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hutsonlabs.simple',
  appName: 'Simple',
  webDir: 'build',
  server: { 
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: { 
      launchShowDuration: 2000, 
      launchAutoHide: true
    },
    StatusBar: { style: 'DARK' },
    Keyboard: { 
      resize: 'body', 
      style: 'DARK'
    }
  }
};

export default config;