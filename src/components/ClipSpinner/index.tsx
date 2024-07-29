import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

interface LoaderProps {
  loading: boolean;
  size?: number;
  color?: string;
}

const ClipSpinner: React.FC<LoaderProps> = React.memo(({ loading, size = 35, color = "#F0F0F0" }) => {
  if (!loading) return null;

  return (
    <div className="flex justify-center items-center h-full">
      <ClipLoader color={color} loading={loading} size={size} />
    </div>
  );
});

export default ClipSpinner;
