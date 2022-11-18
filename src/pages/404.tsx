import Image from 'next/image';
import React from 'react';

import Button from '@/components/ui/button';
import AnchorLink from '@/components/ui/links/anchor-link';
import routes from '@/config/routes';
import AuthLayout from '@/layouts/_authLayout';
import ErrorImage from '@/public/assets/404.svg';
import type { NextPageWithLayout } from '@/types';

const ErrorPage: NextPageWithLayout = () => {
  return (
    <div className="flex max-w-full flex-col items-center justify-center text-center">
      <div className="relative w-52 max-w-full sm:w-[400px] xl:w-[450px] 3xl:w-[500px]">
        <Image src={ErrorImage} alt="404 Error" />
      </div>

      <h2 className="mt-5 mb-2 text-base font-medium uppercase tracking-wide text-gray-900 dark:text-white sm:mt-10 sm:mb-4 sm:text-xl 3xl:mt-12 3xl:text-2xl">
        Error! No Result Found
      </h2>
      <p className="mb-4 max-w-full text-xs leading-loose tracking-tight text-gray-600 dark:text-gray-400 sm:mb-6 sm:w-[430px] sm:text-sm sm:leading-loose">
        Sorry, the page you are looking for might be renamed, removed, or might
        never exist.
      </p>
      <AnchorLink href={routes?.home}>
        <Button shape="rounded">Back to Home</Button>
      </AnchorLink>
    </div>
  );
};

ErrorPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default ErrorPage;
