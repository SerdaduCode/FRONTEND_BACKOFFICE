import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 className="container bg-red-500 text-3xl font-bold underline">
        Hello world!
      </h1>
      <Link href="/login" className="underline mx-4">
        Login
      </Link>
      <Link href="/register">register</Link>
    </main>
  );
}
