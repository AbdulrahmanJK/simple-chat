import type { CustomFontFace } from 'unplugin-fonts/types';
import Unfonts from 'unplugin-fonts/vite';
import type { Plugin } from 'vite';

export function getFonts(): Plugin | Plugin[] {
  return Unfonts({
    custom: {
      display: 'swap',
      preload: false,
      prefetch: false,
      injectTo: 'head-prepend',
      families: [
        {
          name: 'Roboto',
          local: 'Roboto',
          src: './src/shared/fonts/*.ttf',
          transform(font): CustomFontFace {
            const fontNameMap: Record<string, number> = {
              'Roboto-Black': 900,
              'Roboto-ExtraBold': 800,
              'Roboto-Bold': 700,
              'Roboto-SemiBold': 600,
              'Roboto-Medium': 500,
              'Roboto-Regular': 400,
              'Roboto-Light': 300,
              'Roboto-ExtraLight': 200,
              'Roboto-Thin': 100,
            };
            if (fontNameMap[font.basename])
              font.weight = fontNameMap[font.basename];

            return font;
          },
        },
      ],
    },
  });
}
