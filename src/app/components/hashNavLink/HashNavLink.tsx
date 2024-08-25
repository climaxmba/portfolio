"use client";
import type React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useNavContext } from "@/lib/NavbarContext";

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
  const { activeId, removeId, addId } = useNavContext();

  const id = href.slice(1).replace("#", "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsActive(activeId === id);
          addId(id);
        } else {
          setIsActive(activeId === id);
          removeId(id);
        }
      },
      { rootMargin: "0px 0px -100px 0px" }
    );

    const targetElement = document.getElementById(id);

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, [activeId, addId, id, removeId]);

  return (
    <Link
      href={href}
      className={isActive ? `${activeClassName} ${className}` : className}
    >
      {children}
    </Link>
  );
}
