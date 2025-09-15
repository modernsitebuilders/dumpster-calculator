import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 max-w-6xl">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Dumpster Calculator
          </Link>
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Calculator</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}