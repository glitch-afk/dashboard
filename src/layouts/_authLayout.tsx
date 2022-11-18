import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto flex h-screen w-full max-w-4xl items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
