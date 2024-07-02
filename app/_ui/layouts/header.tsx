"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/app/_ui/atoms/navigation-menu";
import { config } from "@/app/_lib/config";
import { cn } from "@/app/_lib/utils";
import { List, X } from "@phosphor-icons/react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/app/_ui/atoms/collabsible";
import Image from "next/image";
import { Button } from "@/app/_ui/atoms/button";

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
            "hover:bg-secondary-300 hover:text-secondary-900 focus:bg-secondary-300 focus:text-secondary-900 block select-none space-y-1 rounded-md p-3 leading-none text-gray-800 no-underline outline-none transition-colors",
            className,
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
  );
});
ListItem.displayName = "ListItem";

function CustomDropdown({ navItem }: { navItem: any }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <button
          className={cn(navigationMenuTriggerStyle(), "flex flex-row gap-x-1")}
        >
          <span>{navItem.name}</span>
          <CaretDown
            weight="bold"
            className={cn(
              isDropdownVisible && "rotate-180",
              "transition-transform",
            )}
          />
        </button>
        {/* <DropdownMenu /> */}
        <div
          className={cn(
            !isDropdownVisible && "h-0",
            "absolute -left-4 top-8 overflow-hidden rounded-lg bg-white shadow-xl",
          )}
        >
          <ul className="w-[18rem] p-4">
            {navItem.children.map((subNavItem: any, key: number) => (
              <ListItem
                key={key}
                title={subNavItem.name}
                href={subNavItem.href}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function CustomNavigationMenuItem({ navItem }: { navItem: any }) {
  if (navItem.children) {
    return (
      <NavigationMenuItem>
        <CustomDropdown navItem={navItem} />
      </NavigationMenuItem>
    );
  } else {
    return (
      <NavigationMenuItem>
        <Link href={navItem.href} legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {navItem.name}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    );
  }
}

export default function Header() {
  const pathname = usePathname();

  const [mobileNavIsOpened, setMobileNavIsOpened] = useState<boolean>(false);

  useEffect(() => {
    setMobileNavIsOpened(false);
  }, [pathname]);

  function handleToggleMobileNav() {
    setMobileNavIsOpened(!mobileNavIsOpened);
  }

  return (
    <header className="relative">
      <div className="fixed z-20 flex h-16 w-full items-center bg-white">
        <div className="container mx-auto flex flex-row items-center justify-between">
          <Link
            href="/"
            className="text-secondary-500 flex flex-row items-end gap-x-2"
          >
            <Image src="/logo.png" alt="" width={32} height={32} />
          </Link>
          <NavigationMenu className="hidden text-gray-800 md:flex md:flex-row md:items-center">
            <NavigationMenuList>
              {config.navigation.map((nav, key) => (
                <CustomNavigationMenuItem navItem={nav} key={key} />
              ))}
            </NavigationMenuList>
            <Button className="ml-4">Hubungi kami</Button>
          </NavigationMenu>
          <div className="md:hidden">
            <button onClick={handleToggleMobileNav} className="text-gray-700">
              <List size="1.8em" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={cn(
          !mobileNavIsOpened ? "hidden" : "flex",
          "fixed z-50 h-dvh w-full flex-col bg-gray-100 md:hidden",
        )}
      >
        <div className="container flex h-16 flex-row items-center justify-between text-gray-700">
          <Image src="/logo.png" alt="" width={32} height={32} />
          <button onClick={handleToggleMobileNav}>
            <X size="1.8em" />
          </button>
        </div>
        <div className="container flex flex-col gap-y-6 pt-6 text-lg">
          {config.navigation.map((nav: any, key) => (
            <div key={key} className="w-full">
              {nav.children ? (
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <button className="flex w-full flex-row items-center justify-between">
                      <span>{nav.name}</span>
                      <CaretDown size="1em" />
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="ml-2 mt-4 flex flex-col gap-y-6 border-l-2 border-gray-300 pl-2">
                      {nav.children.map((subnav: any, jkey: number) => (
                        <div key={jkey}>
                          <Link
                            href={subnav.href}
                            className="block focus:underline"
                          >
                            {subnav.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <Link href={nav.href} className="block focus:underline">
                  {nav.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
