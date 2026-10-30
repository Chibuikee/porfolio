import QuickPharmsArt from './QuickPharmsArt.astro';
import EurekaArt from './EurekaArt.astro';
import GreenRhinoArt from './GreenRhinoArt.astro';
import LexArt from './LexArt.astro';

/** Flagship slug to its illustration: the one place the mapping lives. */
export const artBySlug = {
  quickpharms: QuickPharmsArt,
  eureka: EurekaArt,
  'green-rhino': GreenRhinoArt,
  lexanalytics: LexArt,
} as const;
