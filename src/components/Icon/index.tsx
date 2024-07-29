import React from 'react';

// Define the type for icon keys
type IconName = 'cc0' | 'code' | 'dice' | 'download' | 'flip-left' | 'flip-right' | 'line' | 'moon' | 'palette';

// Map of icon names to file URLs
const iconMap: Record<IconName, string> = {
  cc0: '/icons/cc0.svg',
  code: '/icons/code.svg',
  dice: '/icons/dice.svg',
  download: '/icons/download.svg',
  'flip-left': '/icons/flip-left.svg',
  'flip-right': '/icons/flip-right.svg',
  line: '/icons/line.svg',
  moon: '/icons/moon.svg',
  palette: '/icons/palette.svg',
};

// Icon component props
interface IconProps {
  name: IconName;
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
}

// Icon component
const Icon: React.FC<IconProps> = ({ name, className, style, alt }) => {
  const iconUrl = iconMap[name];

  return (
    <img src={iconUrl} className={className} style={style} alt={alt || name} />
  );
};

export default Icon;
export { IconName };
