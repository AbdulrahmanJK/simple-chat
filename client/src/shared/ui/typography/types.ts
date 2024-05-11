import fontClasses from './fonts.module.css';
import weightClasses from './weights.module.css';

export const weightMap = {
  100: weightClasses.thin,
  200: weightClasses.extraLight,
  300: weightClasses.light,
  400: weightClasses.regular,
  500: weightClasses.medium,
  600: weightClasses.semiBold,
  700: weightClasses.bold,
  800: weightClasses.extraBold,
  900: weightClasses.black,
};

export type TypographyWeight = keyof typeof weightMap;

export const variantsMap = {
  // headings
  'h1': fontClasses.h1,
  'h2': fontClasses.h2,
  'h3': fontClasses.h3,
  'h4': fontClasses.h4,
  'h5': fontClasses.h5,
  'h6': fontClasses.h6,
  // regular texts
  'text-body': fontClasses.textBody,
  'text-small': fontClasses.textSmall,
};

export type TypographyVariant = keyof typeof variantsMap;

type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
export const elementMaps: Record<TypographyVariant, TextElement> = {
  'h1': 'h1',
  'h2': 'h2',
  'h3': 'h3',
  'h4': 'h4',
  'h5': 'h5',
  'h6': 'h6',
  'text-body': 'p',
  'text-small': 'p',
};

export interface TypographyProps {
  variant: TypographyVariant
  as?: string
  weight?: TypographyWeight
}
