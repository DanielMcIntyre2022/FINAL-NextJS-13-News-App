import Link from "next/link"

type Props = {
    catergory: string,
    isActive: boolean
}

function NavLink({ catergory, isActive }: Props) {
  return (
    <Link href={`/news/${catergory}`}>{catergory}</Link>
  )
}

export default NavLink;