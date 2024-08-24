"use client";
import type React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

interface HashNavLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  activeClassName?: string;
}

/** `activeClassName` defaults to `"active"` */
export default function HashNavLink({
  href,
  children,
  className = "",
  activeClassName = "active",
}: HashNavLinkProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      },
      { rootMargin: "-200px 0px -200px 0px" }
    );

    const targetElement = document.getElementById(
      href.slice(1).replace("#", "")
    );

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, [href]);

  return (
    <Link
      href={href}
      className={isActive ? `${activeClassName} ${className}` : className}
    >
      {children}
    </Link>
  );
}
