"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Contact", link: "https://app.sessions.us/book/george-karani/impact-meetings" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-col justify-between rounded-b-lg bg-slate-50 px-4 py-2 md:m-4 md:flex-row md:items-center md:rounded-xl">
        <div className="flex items-center justify-between">
          <NameLogo name="palontologist" />
          <button
            aria-expanded={open}
            aria-label="Open menu"
            className="block p-2 text-2xl text-slate-800 md:hidden"
            onClick={() => setOpen(true)}
          >
            <MdMenu />
          </button>
        </div>
        <MobileMenu open={open} setOpen={setOpen} pathname={pathname} />
        <DesktopMenu pathname={pathname} />
      </ul>
    </nav>
  );
}

function NameLogo({ name }: { name: string }) {
  return (
    <Link
      href="/"
      aria-label="Home page"
      className="text-xl font-extrabold tracking-tighter text-slate-900"
    >
      {name}
    </Link>
  );
}

function MobileMenu({ open, setOpen, pathname }: { open: boolean; setOpen: (open: boolean) => void; pathname: string }) {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden ${
        open ? "translate-x-0" : "translate-x-[100%]"
      }`}
    >
      <button
        aria-label="Close menu"
        aria-expanded={open}
        className="fixed right-4 top-3 block p-2 text-2xl text-slate-800 md:hidden"
        onClick={() => setOpen(false)}
      >
        <MdClose />
      </button>
      {navItems.map(({ link, label }) => (
        <li key={label} className="first:mt-8">
          <Link
            href={link}
            className={`group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900 ${
              pathname === link ? "text-yellow-500" : ""
            }`}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        </li>
      ))}
    </div>
  );
}

function DesktopMenu({ pathname }: { pathname: string }) {
  return (
    <div className="relative z-50 hidden flex-row items-center gap-1 bg-transparent py-0 md:flex">
      {navItems.map(({ link, label }, index) => (
        <React.Fragment key={label}>
          <li>
            <Link
              href={link}
              className={`group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900 ${
                pathname === link ? "text-yellow-500" : ""
              }`}
            >
              {label}
            </Link>
          </li>
          {index < navItems.length - 1 && (
            <span
              className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
              aria-hidden="true"
            >
              /
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}