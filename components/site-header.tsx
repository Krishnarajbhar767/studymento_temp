"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function SiteHeader() {
    const [open, setOpen] = useState(false);
    return (
        <header className="border-b bg-background">
            <div className="mx-auto max-w-7xl px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2"
                        aria-label="StudyMento Home"
                    >
                        <Image
                            src={"/LOGO.png"}
                            height={100}
                            width={200}
                            alt="LOGO"
                        />
                    </Link>

                    <nav
                        className="hidden items-center gap-6 md:flex"
                        aria-label="Main navigation"
                    >
                        {/* Removed Courses link */}
                        <Link
                            className="text-sm hover:opacity-80"
                            href="/about"
                        >
                            About
                        </Link>
                        <Link className="text-sm hover:opacity-80" href="/faq">
                            FAQ
                        </Link>
                        <Link
                            className="text-sm hover:opacity-80"
                            href="/contact"
                        >
                            Contact
                        </Link>
                        {/* Removed Explore Courses button */}
                    </nav>

                    <button
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border md:hidden"
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                    >
                        <span className="sr-only">Toggle Menu</span>
                        <div
                            className={cn(
                                "h-4 w-4",
                                open ? "rotate-90 transition" : ""
                            )}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="h-5 w-5"
                            >
                                <path
                                    d="M4 7h16M4 12h16M4 17h16"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </button>
                </div>

                {open && (
                    <div
                        className="mt-3 flex flex-col gap-2 md:hidden"
                        role="dialog"
                        aria-label="Mobile menu"
                    >
                        {/* Removed Courses */}
                        <Link
                            className="rounded-md px-2 py-2 hover:bg-muted"
                            href="/about"
                            onClick={() => setOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            className="rounded-md px-2 py-2 hover:bg-muted"
                            href="/faq"
                            onClick={() => setOpen(false)}
                        >
                            FAQ
                        </Link>
                        <Link
                            className="rounded-md px-2 py-2 hover:bg-muted"
                            href="/contact"
                            onClick={() => setOpen(false)}
                        >
                            Contact
                        </Link>
                        {/* Removed Explore Courses button */}
                    </div>
                )}
            </div>
        </header>
    );
}
