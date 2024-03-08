import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex gap-8 w-full border-b p-4 justify-center bg-slate-100">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
