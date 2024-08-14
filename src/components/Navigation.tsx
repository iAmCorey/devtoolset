'use client'
import React from 'react'; // 确保导入 React
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Github } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import IconImage from "../../public/favicon.svg";

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/category', label: 'Categories' },
  { path: '/posts', label: 'Articles' },
]

export function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true;
    const checkLoginStatus = async () => {
      if (!isMounted) return;
      setIsLoading(true);
      try {
        const response = await fetch('/api/check-auth');
        const data = await response.json();
        console.log('check auth res: ', data)
        if (isMounted) setIsLoggedIn(data.isLoggedIn);
      } catch (error) {
        console.error('Failed to check auth status:', error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    checkLoginStatus();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST' });
      setIsLoggedIn(false);
      router.push('/');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };
  const size = 30;

  return (

    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={IconImage}
              className="block"
              width={size}
              height={size}
              alt="DomainScore"
            />
            <span className="inline-block font-bold">Dev Toolset</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "flex items-center text-sm font-medium text-muted-foreground",
                  item.path === pathname && "text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href={"https://github.com/iAmCorey/devtoolset"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="/posts/add-new-developer-tools">
            <Button variant="outline">Submit A Tool</Button>
          </Link>
          {/* {!isLoading && (
            isLoggedIn ? (
              <>
                <Link href="/admin">
                  <Button variant="ghost">Admin</Button>
                </Link>
                <Button onClick={handleLogout} variant="outline">Logout</Button>
              </>
            ) : (
              <Link href="/login">
                <Button>Login</Button>
              </Link>
            )
          )} */}
        </div>
      </div>
    </header>
  )
}