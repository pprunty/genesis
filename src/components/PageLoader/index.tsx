import React from 'react';
import ClipSpinner from '@/components/ClipSpinner'; // Make sure this component accepts color and size props

interface LoaderProps {
  loading: boolean;
  size?: number;
  color?: string;
}

const PageLoader: React.FC<LoaderProps> = React.memo(({ loading = true, size = 20, color }) => {
  if (!loading) return null;

  // Tailwind CSS classes for overlay and container
  const overlayClasses = `fixed inset-0 bg-[var(--background-color)] flex justify-center items-center transition-opacity duration-300 ${loading ? 'opacity-100 visible' : 'opacity-0 invisible'}`;

  return (
    <div className={overlayClasses}>
      <div className="flex justify-center items-center">
        <ClipSpinner color={color} loading={loading} size={size} />
      </div>
    </div>
  );
});

export default PageLoader;
