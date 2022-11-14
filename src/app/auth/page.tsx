import React from 'react';

import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';

const authPage = () => {
  return (
    <div className="formShadow flex flex-col space-y-3 p-3 w-full md:w-96">
      <label htmlFor="email">Enter email to continue</label>
      <Input name="email" type="email" placeholder="Enter email" />
      <Button fullWidth intent="primary">
        Continue
      </Button>
    </div>
  );
};

export default authPage;
