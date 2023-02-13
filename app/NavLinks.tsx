'use client'

import { categories } from "../constants";
import { usePathname } from 'next/navigation';
import NavLink from "./NavLink";

function NavLinks() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split('/').pop() === path;
  };

  return (
    <nav className="grid grid-cols-4 
    md:grid-cols-7 text-xs md:text-xs gap-4 
    pb-10 max-w-6xl mx-auto border-b">
      {categories.map((catergoy) => (
        <NavLink key={catergoy} 
        catergory={catergoy} 
        isActive={isActive(catergoy)}/>
      ))}
    </nav>
  )
}

export default NavLinks;