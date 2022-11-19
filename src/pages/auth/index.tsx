import React, { useState } from 'react';

import Button from '@/components/ui/button';
import Input from '@/components/ui/form/input';
import AuthLayout from '@/layouts/_authLayout';
import type { NextPageWithLayout } from '@/types';
import { Magic } from 'magic-sdk';
import router, {useRouter} from "next/router"

const AuthIndex: NextPageWithLayout = () => {
  const [email, setEmail] = useState('')
  const router = useRouter()
  const onSubmit = async (email: string) => {
    const magic = new Magic("pk_live_2E72FB05C25C02B3");
    const didToken = await magic.auth.loginWithMagicLink({ email });
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + didToken,
      },
      body: JSON.stringify({ email }),
    });
    if (res.status === 200) {
      router.push('/dashboard')
    } else {
      // display an error
    }
  };
  return (
    <div className="formShadow flex w-full flex-col space-y-3 p-3 md:w-96">
      <Input 
      value={email}
      onChange={(e) => {
        setEmail(
        e.target.value
        )
      }}
        label="Enter email to continue"
        type="email"
        placeholder="Enter email"
        labelClassName="text-xl font-bold"
        required
      />
      <Button
        variant="solid"
        size="large"
        shape="rounded"
        color="primary"
        onClick={() => {
          onSubmit(email)
        }}
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
