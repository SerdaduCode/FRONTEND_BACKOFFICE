import localFont from "next/font/local";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <main>
        <h1 className="container bg-red-500 text-3xl font-bold underline">
          Hello world!
        </h1>
        <Link href="/login" className="underline mx-4">
          Login
        </Link>
        <Link href="/register">register</Link>
      </main>
    </div>
  );
}
