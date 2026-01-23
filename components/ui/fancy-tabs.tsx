'use client';

import React, { useState, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';
import { cn } from '@/lib/utils';

export interface TabConfig {
  value: string;
  icon: LucideIcon | IconType;
  label: string;
  shortLabel?: string;
  showBadge?: boolean;
  badgeCount?: number;
}

interface FancyTabsProps {
  tabs: TabConfig[];
  activeTab: string;
  onTabChange: (value: string) => void;
  className?: string;
  tabPadding?: string;
}

interface TabButtonProps {
  value: string;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
  tabPadding?: string;
}

const TabButton = ({
  isActive,
  onClick,
  children,
  tabPadding = 'px-4',
}: TabButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'relative flex items-center justify-center gap-2 rounded-4xl h-10 text-sm font-medium transition-all duration-300 ease-out cursor-pointer',
        tabPadding,
        !isActive && 'hover:bg-white/8 dark:hover:bg-white/8',
        isActive
          ? 'text-black'
          : 'text-gray-400 hover:text-gray-200 dark:text-gray-400 dark:hover:text-gray-200',
      )}
      style={isActive ? { backgroundColor: 'oklch(0.9733 0.016855 61.9626)' } : undefined}
    >
      {children}
    </button>
  );
};

export const FancyTabs = ({
  tabs,
  activeTab,
  onTabChange,
  className,
  tabPadding,
}: FancyTabsProps) => {
  const [showTooltips, setShowTooltips] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      // Show tooltips when screen is between 1024px and 1160px
      setShowTooltips(width >= 1024 && width <= 1160);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div
      className={cn(
        'overflow-hidden grid w-full max-w-lg rounded-4xl h-12 p-1 gap-1 bg-zinc-700/80',
        className,
      )}
      style={{
        gridTemplateColumns: `repeat(${tabs.length}, 1fr)`,
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(20px)',
      }}
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.value;

        return (
          <TabButton
            key={tab.value}
            value={tab.value}
            isActive={isActive}
            onClick={() => onTabChange(tab.value)}
            tabPadding={tabPadding}
          >
            <Icon
              className="h-4 w-4"
              style={{ strokeWidth: '1.5px' } as React.CSSProperties}
            />
            <span
              className={cn(
                'hidden md:inline-block lg:hidden xl:inline-block relative',
                tab.showBadge &&
                  tab.badgeCount !== undefined &&
                  tab.badgeCount > 0 &&
                  'pr-4',
              )}
            >
              {tab.label}
              {tab.showBadge &&
                tab.badgeCount !== undefined &&
                tab.badgeCount > 0 && (
                  <span
                    className={cn(
                      'absolute -top-1.5 -right-2 h-[18px] rounded-full flex items-center justify-center flex-shrink-0',
                      'text-[10px] font-semibold text-white',
                      'shadow-sm z-10',
                      tab.badgeCount > 9 ? 'min-w-[18px] px-1.5' : 'w-[18px]',
                    )}
                    style={{ backgroundColor: '#27584F' }}
                  >
                    {tab.badgeCount > 99 ? '99+' : tab.badgeCount}
                  </span>
                )}
            </span>
            {tab.shortLabel && (
              <span
                className={cn(
                  'sm:hidden relative inline-block',
                  tab.showBadge &&
                    tab.badgeCount !== undefined &&
                    tab.badgeCount > 0 &&
                    'pr-4',
                )}
              >
                {tab.shortLabel}
                {tab.showBadge &&
                  tab.badgeCount !== undefined &&
                  tab.badgeCount > 0 && (
                    <span
                      className={cn(
                        'absolute -top-1.5 -right-2 h-[18px] rounded-full flex items-center justify-center flex-shrink-0',
                        'text-[10px] font-semibold text-white',
                        'shadow-sm z-10',
                        tab.badgeCount > 9
                          ? 'min-w-[18px] px-1.5'
                          : 'w-[18px]',
                      )}
                      style={{ backgroundColor: '#27584F' }}
                    >
                      {tab.badgeCount > 99 ? '99+' : tab.badgeCount}
                    </span>
                  )}
              </span>
            )}
          </TabButton>
        );
      })}
    </div>
  );
};
