import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-32">
      <h1 className="text-xl font-bold mb-12 text-fuchsia-500">
        Fetcch Dashboard
      </h1>

      <Link href="/auth" className="px-4 py-2 rounded-lg hover:bg-gray-700">
        Register
      </Link>
      <br />
      <Link href="/nft" className="px-4 py-2 rounded-lg hover:bg-gray-700">
        NFT Details
      </Link>
      <br />
      <Link href="/user" className="px-4 py-2 rounded-lg hover:bg-gray-700">
        User Details
      </Link>
      <br />
      <Link
        href="/dashboard"
        className="px-4 py-2 rounded-lg hover:bg-gray-700"
      >
        Dashboard
      </Link>
    </div>
  );
}
