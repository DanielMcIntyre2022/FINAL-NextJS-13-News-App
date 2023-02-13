import { categories } from "../constants";
import NavLink from "./NavLink";

function NavLinks() {
  return (
    <nav>
      {categories.map((catergoy) => (
        <NavLink key={catergoy} catergory={catergoy} isActive={true}/>
      ))}
    </nav>
  )
}

export default NavLinks;