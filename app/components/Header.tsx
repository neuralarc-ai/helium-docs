'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black">
      <div className="mx-auto flex h-16 max-w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo.png"
            alt="Helium Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Center - Navigation Links */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          <Link
            href="/docs/quick-start"
            className={`text-sm font-medium transition-colors ${
              pathname === '/docs/quick-start'
                ? 'text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Get Started
          </Link>
          <Link
            href="/docs/api-reference/create-task"
            className={`text-sm font-medium transition-colors ${
              pathname?.startsWith('/docs/api-reference')
                ? 'text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            API Reference
          </Link>
          <Link
            href="/docs/guides/code-examples"
            className={`text-sm font-medium transition-colors ${
              pathname?.startsWith('/docs/guides')
                ? 'text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Guide
          </Link>
        </nav>

        {/* Right - Get Started Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/docs/quick-start"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

