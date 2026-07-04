import type { SVGProps } from 'react';

export type ConditionIconName =
  | 'access-friendly'
  | 'english-friendly'
  | 'family-friendly'
  | 'food-friendly'
  | 'luggage-friendly'
  | 'pet-friendly'
  | 'private-bath'
  | 'private-villa'
  | 'self-catering'
  | 'tattoo-consideration'
  | 'tattoo-friendly';

export interface ConditionIconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: string;
  title?: string;
}

const ICON_ALIASES: Record<string, ConditionIconName> = {
  access: 'access-friendly',
  'access-friendly': 'access-friendly',
  english: 'english-friendly',
  'english-friendly': 'english-friendly',
  family: 'family-friendly',
  'family-friendly': 'family-friendly',
  food: 'food-friendly',
  'food-friendly': 'food-friendly',
  luggage: 'luggage-friendly',
  'luggage-friendly': 'luggage-friendly',
  pet: 'pet-friendly',
  'pet-friendly': 'pet-friendly',
  bath: 'private-bath',
  'private-bath': 'private-bath',
  villa: 'private-villa',
  'private-villa': 'private-villa',
  'private-villas': 'private-villa',
  kitchen: 'self-catering',
  'self-catering': 'self-catering',
  tattoo: 'tattoo-friendly',
  'tattoo-friendly': 'tattoo-friendly',
  'tattoo-consideration': 'tattoo-consideration',
};

export function getConditionIconName(value: string): ConditionIconName | null {
  const normalized = value
    .trim()
    .toLowerCase()
    .replace(/&/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  if (ICON_ALIASES[normalized]) return ICON_ALIASES[normalized];
  if (normalized.includes('tattoo') && normalized.includes('consideration')) return 'tattoo-consideration';
  if (normalized.includes('tattoo')) return 'tattoo-friendly';
  if (normalized.includes('private') && normalized.includes('bath')) return 'private-bath';
  if (normalized.includes('bath')) return 'private-bath';
  if (normalized.includes('luggage') || normalized.includes('bag')) return 'luggage-friendly';
  if (normalized.includes('kitchen') || normalized.includes('catering')) return 'self-catering';
  if (normalized.includes('english') || normalized.includes('language')) return 'english-friendly';
  if (normalized.includes('family') || normalized.includes('child')) return 'family-friendly';
  if (normalized.includes('pet') || normalized.includes('dog') || normalized.includes('cat')) return 'pet-friendly';
  if (normalized.includes('food') || normalized.includes('diet')) return 'food-friendly';
  if (normalized.includes('access') || normalized.includes('elevator')) return 'access-friendly';
  if (normalized.includes('villa') || normalized.includes('private-stay')) return 'private-villa';

  return null;
}

export function ConditionIcon({
  name,
  title,
  className,
  ...props
}: ConditionIconProps) {
  const iconName = getConditionIconName(name);
  if (!iconName) return null;

  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.85,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': title ? undefined : true,
    role: title ? 'img' : undefined,
    ...props,
  };

  return (
    <svg {...common}>
      {title ? <title>{title}</title> : null}
      {iconName === 'tattoo-friendly' ? (
        <>
          <rect x="3.2" y="6.2" width="14.2" height="11.6" rx="2.1" />
          <text
            x="5.2"
            y="14.4"
            fill="currentColor"
            stroke="none"
            fontSize="5.4"
            fontWeight="700"
            letterSpacing=".15"
          >
            TAT
          </text>
          <path d="m16.7 5.6 1.5 1.5 2.8-3.1" />
        </>
      ) : null}
      {iconName === 'tattoo-consideration' ? (
        <>
          <rect x="3.2" y="6.2" width="14.2" height="11.6" rx="2.1" />
          <text
            x="5.2"
            y="14.4"
            fill="currentColor"
            stroke="none"
            fontSize="5.4"
            fontWeight="700"
            letterSpacing=".15"
          >
            TAT
          </text>
          <path d="M19.3 5.1c0-.9.7-1.6 1.6-1.6s1.6.6 1.6 1.5c0 1.3-1.5 1.3-1.5 2.5" />
          <path d="M21 10h.01" />
        </>
      ) : null}
      {iconName === 'private-bath' ? (
        <>
          <path d="M5 11.5h14v2.8a4.2 4.2 0 0 1-4.2 4.2H9.2A4.2 4.2 0 0 1 5 14.3v-2.8Z" />
          <path d="M7.3 18.5 6.5 21" />
          <path d="m16.7 18.5.8 2.5" />
          <path d="M7.2 11.5V7.8c0-1.3 1-2.3 2.3-2.3H11" />
          <path d="M10.8 5.5c0-1.1.9-2 2-2h1" />
          <path d="M15.7 8.2h3.2v3.3" />
          <path d="M18.9 8.2 15.5 12" />
        </>
      ) : null}
      {iconName === 'luggage-friendly' ? (
        <>
          <rect x="6" y="7" width="12" height="12" rx="2" />
          <path d="M9.5 7V5.7c0-1 .8-1.7 1.7-1.7h1.6c.9 0 1.7.7 1.7 1.7V7" />
          <path d="M9 19v1.2" />
          <path d="M15 19v1.2" />
          <path d="M9.3 10.5h5.4" />
          <path d="m14 13.2 2 2-2 2" />
        </>
      ) : null}
      {iconName === 'self-catering' ? (
        <>
          <path d="M6 4v7" />
          <path d="M9 4v7" />
          <path d="M6 8h3" />
          <path d="M7.5 11v9" />
          <path d="M15.5 4c1.4 1.3 2.2 3.1 2.2 5.2v1.9h-4.4V9.2c0-2.1.8-3.9 2.2-5.2Z" />
          <path d="M15.5 11.1V20" />
        </>
      ) : null}
      {iconName === 'pet-friendly' ? (
        <>
          <path d="M8.1 10.9c.8-2.2 2.3-3.4 3.9-3.4s3.1 1.2 3.9 3.4l.9 2.4c.7 1.8-.6 3.7-2.6 3.7-.8 0-1.5-.3-2.2-.8-.7.5-1.4.8-2.2.8-2 0-3.3-1.9-2.6-3.7l.9-2.4Z" />
          <path d="M6.2 8.6c.9 0 1.6-.9 1.6-2s-.7-2-1.6-2-1.6.9-1.6 2 .7 2 1.6 2Z" />
          <path d="M17.8 8.6c.9 0 1.6-.9 1.6-2s-.7-2-1.6-2-1.6.9-1.6 2 .7 2 1.6 2Z" />
          <path d="M10 6.5c.8 0 1.4-.8 1.4-1.8S10.8 3 10 3s-1.4.8-1.4 1.7S9.2 6.5 10 6.5Z" />
          <path d="M14 6.5c.8 0 1.4-.8 1.4-1.8S14.8 3 14 3s-1.4.8-1.4 1.7.6 1.8 1.4 1.8Z" />
        </>
      ) : null}
      {iconName === 'english-friendly' ? (
        <>
          <path d="M4.5 6.2h9.2v7.2H8.2l-3.7 3.2V6.2Z" />
          <path d="M10.6 15.2h5.2l3.7 3.2V8.9h-3.6" />
          <path d="M7.2 9.1h3.8" />
          <path d="M7.2 11.3h2.4" />
        </>
      ) : null}
      {iconName === 'family-friendly' ? (
        <>
          <circle cx="9" cy="7" r="2" />
          <circle cx="16.2" cy="8.4" r="1.6" />
          <path d="M5.7 18.8v-3.1A3.3 3.3 0 0 1 9 12.4a3.3 3.3 0 0 1 3.3 3.3v3.1" />
          <path d="M13.8 18.8v-2.4c0-1.7 1.1-3 2.6-3s2.6 1.3 2.6 3v2.4" />
        </>
      ) : null}
      {iconName === 'food-friendly' ? (
        <>
          <path d="M6.5 4.2v7.2" />
          <path d="M9.5 4.2v7.2" />
          <path d="M6.5 7.8h3" />
          <path d="M8 11.4v8.4" />
          <path d="M16.6 4.2v15.6" />
          <path d="M14.2 4.6c0 3.3.7 5.3 2.4 6" />
          <path d="M18.9 4.6c0 3.3-.7 5.3-2.3 6" />
        </>
      ) : null}
      {iconName === 'access-friendly' ? (
        <>
          <path d="M7 4.5h8.5a2.5 2.5 0 0 1 2.5 2.5v10a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 17V7A2.5 2.5 0 0 1 7 4.5Z" />
          <path d="M8 8.2h8" />
          <path d="M9.3 11.8h5.4" />
          <path d="M10.8 15.2h2.4" />
          <path d="m15.7 15.6 1.6 1.6 2.5-3" />
        </>
      ) : null}
      {iconName === 'private-villa' ? (
        <>
          <path d="M4.5 11.1 12 5l7.5 6.1" />
          <path d="M6.5 10.2v8.3h11v-8.3" />
          <path d="M10 18.5v-5h4v5" />
          <path d="M4.5 18.5h15" />
          <path d="M16.5 5.8v2.6" />
        </>
      ) : null}
    </svg>
  );
}

export default ConditionIcon;
