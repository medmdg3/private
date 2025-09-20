// Centralized tags enum, labels, colors and optional logos

export enum Tag {
  MOI = 'MOI',
  CompetitiveProgramming = 'Competitive Programming',
  National = 'National',
  AUICompete = 'AUI Compete',
  JNJD = 'JNJD',
  Education = 'Education',
  CPGE = 'CPGE',
  EMI = 'EMI',
  Codeforces = 'Codeforces',
  GameOfCode = 'Game of Code',
  AMPC = 'AMPC',
  CodeIT = 'CodeIT',
  Mathematics = 'Mathematics',
  MathAndMaroc = 'Math&Maroc',
  MMC = 'MMC',
  IOI = 'IOI',
  International = 'International',
  Mentoring = 'Mentoring',
  Mentorship = 'Mentorship',
  Leadership = 'Leadership',
  ITAcademi = 'IT AcadEMI',
  CodEMI = 'CodEMI',
  Organization = 'Organization',
  IMC = 'IMC',
  MCPC = 'MCPC',
  ICPC = 'ICPC',
  Upcoming = 'Upcoming',
  ITHolic = 'ITHolic',
  Ministry = 'Ministry',
}

export type TagMeta = {
  label: string;
  color: string; // hex or CSS color
  logo?: string; // asset path for small logo to render when tag exists
};

// Distinct, hand-picked, high-contrast colors for all tags
// Each hex is unique to avoid collisions across enum tags.
const PALETTE = {
  cobalt: '#0047AB',      // MOI
  denim: '#1560BD',       // Competitive Programming
  orange: '#F97316',      // National
  teal: '#0D9488',        // AUI Compete
  forest: '#22C55E',      // JNJD
  gold: '#D97706',        // Education
  burgundy: '#8B0000',    // CPGE
  violet: '#7C3AED',      // EMI
  crimson: '#DC143C',     // Codeforces
  cyan: '#06B6D4',        // Game of Code
  lime: '#84CC16',        // AMPC
  indigo: '#4F46E5',      // CodeIT
  red: '#EF4444',         // Mathematics
  rose: '#F43F5E',        // Math&Maroc
  magenta: '#C026D3',     // MMC
  blue: '#3B82F6',        // IOI
  sky: '#0EA5E9',         // International
  emerald: '#10B981',     // Mentoring
  green: '#16A34A',       // Mentorship
  amber: '#F59E0B',       // Leadership
  purple: '#9333EA',      // IT AcadEMI
  plum: '#8B5CF6',        // CodEMI
  slate: '#64748B',       // Organization
  maroon: '#800000',      // IMC
  navy: '#1E3A8A',        // MCPC
  azure: '#2563EB',       // ICPC
  yellow: '#EAB308',      // Upcoming
  indigoDeep: '#3730A3',  // ITHolic
  ministryBlue: '#1F4F99' // Ministry
};

// Associate each tag with a stable color and optional logo
export const TAG_META: Record<Tag, TagMeta> = {
  [Tag.MOI]: { label: 'MOI', color: PALETTE.cobalt, logo: 'assets/logo/moi.png' },
  [Tag.CompetitiveProgramming]: { label: 'Competitive Programming', color: PALETTE.denim },
  [Tag.National]: { label: 'National', color: PALETTE.orange },
  [Tag.AUICompete]: { label: 'AUI Compete', color: PALETTE.teal, logo: 'assets/logo/auicompete.png' },
  [Tag.JNJD]: { label: 'JNJD', color: PALETTE.forest, logo: 'assets/logo/jnjd.png' },
  [Tag.Education]: { label: 'Education', color: PALETTE.gold },
  [Tag.CPGE]: { label: 'CPGE', color: PALETTE.burgundy, logo: 'assets/logo/cpge.png' },
  [Tag.EMI]: { label: 'EMI', color: PALETTE.violet, logo: 'assets/logo/emi.png' },
  [Tag.Codeforces]: { label: 'Codeforces', color: PALETTE.crimson, logo: 'assets/logo/codeforces.png' },
  [Tag.GameOfCode]: { label: 'Game of Code', color: PALETTE.cyan, logo: 'assets/logo/goc.png' },
  [Tag.AMPC]: { label: 'AMPC', color: PALETTE.lime, logo: 'assets/logo/ampc.png' },
  [Tag.CodeIT]: { label: 'CodeIT', color: PALETTE.indigo, logo: 'assets/logo/codeit.png' },
  [Tag.Mathematics]: { label: 'Mathematics', color: PALETTE.red },
  [Tag.MathAndMaroc]: { label: 'Math&Maroc', color: PALETTE.rose, logo: 'assets/logo/mathandmaroc.png' },
  [Tag.MMC]: { label: 'MMC', color: PALETTE.magenta, logo: 'assets/logo/mmc.png' },
  [Tag.IOI]: { label: 'IOI', color: PALETTE.blue, logo: 'assets/logo/ioi.png' },
  [Tag.International]: { label: 'International', color: PALETTE.sky },
  [Tag.Mentoring]: { label: 'Mentoring', color: PALETTE.emerald },
  [Tag.Mentorship]: { label: 'Mentorship', color: PALETTE.green },
  [Tag.Leadership]: { label: 'Leadership', color: PALETTE.amber },
  [Tag.ITAcademi]: { label: 'IT AcadEMI', color: PALETTE.purple, logo: 'assets/logo/itacademi.png' },
  [Tag.CodEMI]: { label: 'CodEMI', color: PALETTE.plum, logo: 'assets/logo/codemi.png' },
  [Tag.Organization]: { label: 'Organization', color: PALETTE.slate },
  [Tag.IMC]: { label: 'IMC', color: PALETTE.maroon, logo: 'assets/logo/imc.png' },
  [Tag.MCPC]: { label: 'MCPC', color: PALETTE.navy, logo: 'assets/logo/mcpc.png' },
  [Tag.ICPC]: { label: 'ICPC', color: PALETTE.azure, logo: 'assets/logo/icpc.png' },
  [Tag.Upcoming]: { label: 'Upcoming', color: PALETTE.yellow },
  [Tag.ITHolic]: { label: 'ITHolic', color: PALETTE.indigoDeep, logo: 'assets/logo/itholic.png' },
  [Tag.Ministry]: { label: 'Ministry', color: PALETTE.ministryBlue, logo: 'assets/logo/ministry.png' },
};

// Helpers to work with possibly stringly-typed tags while migrating
export function toTag(value: Tag | string): Tag | null {
  if (!value) return null;
  // already a Tag
  if (Object.values(Tag).includes(value as Tag)) return value as Tag;
  // try to map string to enum by label match
  const str = String(value).trim();
  const found = (Object.values(Tag) as string[]).find(v => v === str);
  return (found as Tag) ?? null;
}

export function tagColor(value: Tag | string): string | null {
  const t = toTag(value);
  if (!t) return null;
  return TAG_META[t]?.color ?? null;
}

export function tagLogo(value: Tag | string): string | null {
  const t = toTag(value);
  if (!t) return null;
  return TAG_META[t]?.logo ?? null;
}

export function tagLabel(value: Tag | string): string {
  const t = toTag(value);
  if (!t) return String(value);
  return TAG_META[t]?.label ?? String(value);
}
