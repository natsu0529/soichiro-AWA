'use client';

import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-dark-900 border-t border-primary-900/30 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Maha Lycopene. {t('rights')}.
          </div>
          <div className="text-gray-500 text-sm">
            {t('builtWith')}
          </div>
        </div>
      </div>
    </footer>
  );
}
