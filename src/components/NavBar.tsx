// components/NavBar.tsx
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="w-full py-4 flex items-center justify-center bg-transparent">
      <div className="flex space-x-8 text-sm font-medium text-white">
        <Link href="/" className="hover:text-gray-400 transition duration-300 transform hover:scale-105">
          About
        </Link>
        <Link href="/portfolio" className="hover:text-gray-400 transition duration-300 transform hover:scale-105">
          Portfolio
        </Link>
        <Link href="/contact" className="hover:text-gray-400 transition duration-300 transform hover:scale-105">
          Contact
        </Link>
      </div>
    </nav>
  );
}
