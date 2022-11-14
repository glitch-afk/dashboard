import React from 'react';

const detailsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-4xl mx-auto my-28 w-full px-4 lg:px-0">
      {children}
    </div>
  );
};

export default detailsLayout;
