import Link from 'next/link';
import React from 'react';

const index = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Link className="underline" href="/dashboard">
        Dashboard
      </Link>
      <Link className="underline" href="/auth">
        User Auth
      </Link>
      <Link className="underline" href="/auth/user-details">
        User Details
      </Link>
      <Link className="underline" href="/nft/nft-details">
        NFT Details
      </Link>
    </div>
  );
};

export default index;
