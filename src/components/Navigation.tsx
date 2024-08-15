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

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


type categoriesType = {
  name: string, 
  src: string, 
  description: string,
  link: string
}

type navigationProp = {
  categories: categoriesType[]
}

export const Navigation: React.FC<navigationProp> = ({ categories }) => {
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
  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  })
  ListItem.displayName = "ListItem"
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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'font-medium', '/' === pathname && "font-extrabold")}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn('font-medium', '/category' === pathname && "font-extrabold")}>Category</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {categories.map((category) => (
                        <ListItem
                          key={category.name}
                          title={category.name}
                          href={`/tools/${category.link}`}
                          className='capitalize'
                        >
                          {category.description}
                        </ListItem>
                      ))}
                      <ListItem
                          title={'More'}
                          href={'/category'}
                          className='capitalize border border-muted  bg-gradient-to-b  from-muted/50 to-muted/20'
                        >
                         More Category
                        </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn('font-medium', '/posts' === pathname && "font-extrabold")}>
                    Articles
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Dev Toolset
                            </div>
                            <p className="text-xs leading-tight text-muted-foreground">
                              Open-Source Database-free Developer Tools Navigator
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/posts/add-new-developer-tools" title="Add Tools">
                        Adding New Developer Tools to DevToolset
                      </ListItem>
                      <ListItem href="/posts/deploy-own-devtoolset" title="Deploy DevToolset">
                        Deploy your own DevToolset
                      </ListItem>
                      <ListItem href="/posts/" title="More" className='border border-muted  bg-gradient-to-b  from-muted/50 to-muted/20'>
                        More articles
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
        </div>
      </div>
    </header>
  )
}