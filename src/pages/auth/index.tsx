import React from 'react';

import Button from '@/components/ui/button';
import Input from '@/components/ui/form/input';
import AuthLayout from '@/layouts/_authLayout';
import type { NextPageWithLayout } from '@/types';

const AuthIndex: NextPageWithLayout = () => {
  return (
    <div className="formShadow flex w-full flex-col space-y-3 p-3 md:w-96">
      <Input
        label="Enter email to continue"
        type="email"
        inputClassName="border bg-transparent"
        labelClassName="text-xl font-bold"
        required
      />
      <Button
        variant="solid"
        size="large"
        shape="rounded"
        color="primary"
        // loaderVariant="scaleUp"
        // loaderSize="large"
        // isLoading={true}
      >
        Continue
      </Button>
    </div>
  );
};

AuthIndex.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default AuthIndex;
