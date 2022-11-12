import React from 'react';

import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';

const authPage = () => {
  return (
    <div className="formShadow sm:w-full flex flex-col space-y-3 md:w-96 mt-[40vh] p-4">
      <label htmlFor="email" className="text-xl font-semibold">
        Enter email to continue
      </label>
      <Input
        type="email"
        name="email"
        placeholder="Enter Email"
        disabled={false}
        classes="bg-[#101010]"
      />
      <Button intent="primary" fullWidth text="Continue" />
    </div>
  );
};

export default authPage;
