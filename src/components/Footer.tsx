// components/Footer.js
import { Link } from "@/lib/i18n";
import React from 'react'; // 确保导入 React
import Image from "next/image";
import IconImage from "../../public/favicon.svg";
import {useTranslations} from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');
  const size = 30;
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-muted-foreground border-t">
      <div className="flex flex-col justify-center items-center max-w-7xl text-center mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:text-start">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className='flex flex-col justify-center items-center lg:items-start lg:justify-start'>
            <h3 className="text-sm font-bold tracking-normal">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src={IconImage}
                  className="block opacity-80"
                  width={size}
                  height={size}
                  alt="DomainScore"
                />
                <span className="inline-block font-bold">Dev Toolset</span>
              </Link>
            </h3>
            <p className="mt-4 text-xs ">
              {t('description')}
              
            </p>
            <div className='mt-4 text-xs '>
              {t('builtWith')}
              <Link href="https://gitbase.app/" target='_black' className="ml-1 text-xs underline">
                GitBase
              </Link>
            </div>
          </div>
          <div className=''>
            <h3 className="text-sm font-semibold  tracking-wider uppercase">{t('quickLinks')}</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/" className="text-base ">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href="/category" className="text-base">
                  {t('category')}
                </Link>
              </li>
              <li>
                <Link href="/article" className="text-base">
                  {t('article')}
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-base">
                  {t('changelog')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">{t('legal')}</h3>
            <ul className="mt-4 space-y-4">
            <li>
                <Link href="/" className="text-base">
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link href="/" className="text-base">
                  {t('termsOfService')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">{t('connect')}</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href={"mailto:iamcoreychiu+devtoolsetsupport@gmail.com"} className="text-base">
                  {t('support')}
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-base text-center">
            &copy; {new Date().getFullYear()} DevToolset. {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}