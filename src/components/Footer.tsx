// components/Footer.js
import Link from 'next/link';
import React from 'react'; // 确保导入 React
import Image from "next/image";
import IconImage from "../../public/favicon.svg";


export function Footer() {
  const size = 30;
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="flex flex-col justify-center items-center max-w-7xl text-center mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:text-start">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className='flex flex-col justify-center items-center lg:items-start lg:justify-start'>
            <h3 className="text-sm font-bold text-gray-600 tracking-normal">
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
            <p className="mt-4 text-xs text-gray-500">
              Open Source Developer Tools Navigator
              
            </p>
            <div className='mt-4 text-xs text-gray-500'>
              Built with 
              <Link href="https://gitbase.app/" target='_black' className="ml-1 text-xs text-gray-500 hover:text-gray-900 underline">
                GitBase
              </Link>
            </div>
          </div>
          <div className=''>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/" className="text-base text-gray-500 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/category" className="text-base text-gray-500 hover:text-gray-900">
                  Category
                </Link>
              </li>
              <li>
                <Link href="/article" className="text-base text-gray-500 hover:text-gray-900">
                  Article
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-base text-gray-500 hover:text-gray-900">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
            <li>
                <Link href="/" className="text-base text-gray-500 hover:text-gray-900">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/" className="text-base text-gray-500 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Connect</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href={"mailto:iamcoreychiu@gmail.com"} className="text-base text-gray-500 hover:text-gray-900">
                  Support
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} DevToolset. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}