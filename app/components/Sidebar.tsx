'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  RiMenuLine,
  RiCloseLine,
  RiRocketLine,
  RiFileCodeLine,
  RiBookOpenLine,
  RiInformationLine,
  RiTaskLine,
  RiMessage3Line,
  RiFolderLine,
  RiCodeSSlashLine,
  RiLightbulbLine,
  RiSpeedLine,
  RiErrorWarningLine,
  RiToolsLine,
} from 'react-icons/ri';

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    title: 'GET STARTED',
    items: [
      { title: 'Quick Start', href: '/docs/quick-start', icon: RiRocketLine },
      { title: 'Authentication', href: '/docs/authentication', icon: RiFileCodeLine },
    ],
  },
  {
    title: 'API REFERENCE',
    items: [
      {
        title: 'Create Task',
        href: '/docs/api-reference/create-task',
        icon: RiTaskLine,
      },
      {
        title: 'Stop Agent',
        href: '/docs/api-reference/stop-agent',
        icon: RiTaskLine,
      },
      {
        title: 'Get Results',
        href: '/docs/api-reference/get-results',
        icon: RiMessage3Line,
      },
      {
        title: 'Continue Conversation',
        href: '/docs/api-reference/continue-conversation',
        icon: RiMessage3Line,
      },
      {
        title: 'Get History',
        href: '/docs/api-reference/get-history',
        icon: RiMessage3Line,
      },
      {
        title: 'List Files',
        href: '/docs/api-reference/list-files',
        icon: RiFolderLine,
      },
      {
        title: 'Get File Content',
        href: '/docs/api-reference/get-file-content',
        icon: RiFolderLine,
      },
    ],
  },
  {
    title: 'GUIDES',
    items: [
      {
        title: 'Code Examples',
        href: '/docs/guides/code-examples',
        icon: RiCodeSSlashLine,
      },
      {
        title: 'Best Practices',
        href: '/docs/guides/best-practices',
        icon: RiLightbulbLine,
      },
    ],
  },
  {
    title: 'RESOURCES',
    items: [
      {
        title: 'Rate Limits',
        href: '/docs/resources/rate-limits',
        icon: RiSpeedLine,
      },
      {
        title: 'Error Handling',
        href: '/docs/resources/error-handling',
        icon: RiErrorWarningLine,
      },
      {
        title: 'Troubleshooting',
        href: '/docs/resources/troubleshooting',
        icon: RiToolsLine,
      },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="fixed left-4 top-24 z-40 rounded-md bg-gray-800 p-2 shadow-lg md:hidden"
        aria-label="Toggle sidebar"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <RiCloseLine className="h-6 w-6" />
        ) : (
          <RiMenuLine className="h-6 w-6" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-18 z-30 h-[calc(100vh-4.5rem)] w-64 transform bg-black transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <nav className="h-full overflow-y-auto p-4">
          {navSections.map((section) => (
            <div key={section.title} className="mb-8">
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                {section.title}
              </h2>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                          isActive
                            ? 'bg-gray-700 font-medium text-gray-100'
                            : 'text-gray-300 hover:bg-gray-800'
                        }`}
                      >
                        <Icon className="h-4 w-4 flex-shrink-0" />
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Fixed Border Divider */}
      <div className="fixed left-64 top-18 bottom-0 z-20 w-0.5 bg-gradient-to-b from-transparent via-white/30 to-transparent hidden md:block"></div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

