import Link from "next/link";

interface NavLinkProps {
    id: string;
    label: string;
    isButton?: boolean;
    scrollToSection: (id: string) => void;
  }
  
 export default function NavLink({ id, label, isButton = false, scrollToSection }: NavLinkProps) {
    return (
      <Link
      href={id}
        onClick={() => scrollToSection(id)}
        className={`text-xl md:text-lg
        ${isButton
            ? 'px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors font-medium shadow-md hover:shadow-lg'
            : 'text-neutral-600 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors'}
      `}
      >
        {label}
      </Link>
    );
  }