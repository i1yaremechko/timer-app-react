import React from 'react';
import './index.scss';

interface LayoutProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, isLoading = false }) => {
  return (
    <div className="page">
      {isLoading && (
        <div className="linear-progress">
          <div className="linear-progress__bar" />
        </div>
      )}
      {children}
    </div>
  );
};