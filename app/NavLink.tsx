import Link from "next/link"

type Props = {
    catergory: string,
    isActive: boolean
}

function NavLink({ catergory, isActive }: Props) {
  return (
    <Link 
    href={`/news/${catergory}`}
    className='navLink'
    >
    {catergory}
    </Link>
  )
}

export default NavLink;