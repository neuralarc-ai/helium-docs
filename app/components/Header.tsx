'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FancyTabs, TabConfig } from '@/components/ui/fancy-tabs';
import { Rocket, FileCode, BookOpen } from 'lucide-react';

const tabConfigs: TabConfig[] = [
  {
    value: '/docs/quick-start',
    icon: Rocket,
    label: 'Get Started',
  },
  {
    value: '/docs/api-reference/create-task',
    icon: FileCode,
    label: 'API Reference',
  },
  {
    value: '/docs/guides/code-examples',
    icon: BookOpen,
    label: 'Guide',
  },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  // Determine active tab based on current path
  const getActiveTab = () => {
    if (pathname === '/docs/quick-start') return '/docs/quick-start';
    if (pathname?.startsWith('/docs/api-reference')) return '/docs/api-reference/create-task';
    if (pathname?.startsWith('/docs/guides')) return '/docs/guides/code-examples';
    return '/docs/quick-start';
  };

  const handleTabChange = (value: string) => {
    router.push(value);
    // Scroll to top when changing tabs
    window.scrollTo(0, 0);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-black pt-2">
      <div className="mx-auto flex h-16 max-w-full items-center px-4 sm:px-6 lg:px-8">
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

        {/* Center - Navigation Tabs */}
        <div className="flex-1 flex justify-center">
          <div className="hidden md:flex md:items-center">
            <FancyTabs
              tabs={tabConfigs}
              activeTab={getActiveTab()}
              onTabChange={handleTabChange}
              className="max-w-none"
            />
          </div>
        </div>

        {/* Right - Get Started Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/docs/quick-start"
            className="rounded-md px-4 py-2 text-sm font-medium text-black transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ backgroundColor: 'oklch(0.9021 0.1723 120.2)' }}
          >
            Get API Key
          </Link>
        </div>
      </div>
    </header>
  );
}

