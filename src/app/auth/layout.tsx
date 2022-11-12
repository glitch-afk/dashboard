import React from 'react';

const authLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex max-w-4xl mx-auto w-full h-screen justify-center">
      {children}
    </div>
  );
};

export default authLayout;
