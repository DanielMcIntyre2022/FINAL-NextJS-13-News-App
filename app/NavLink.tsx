
import Link from "next/link"

type Props = {
    catergory: string,
    isActive: boolean
}

function NavLink({ catergory, isActive }: Props) {
  return (
    <Link href={`/news/${catergory}`}
    className={`navLink ${
        isActive && 
        "underline decoration-orange-400 underline-offset-4 font-bold text-lg"
    }`}
    >
    {catergory}
    </Link>
  )
}

export default NavLink;