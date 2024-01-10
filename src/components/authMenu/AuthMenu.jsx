import { Navbar, NavbarBrand } from "@nextui-org/react"
import Link from "next/link"


const AuthMenu = () => {
  return (
    <Navbar className="bg-transparent fixed z-10">
    <NavbarBrand>
      <Link className="font-semibold text-slate-800" href="/">
        TESLA | SHOP
      </Link>
    </NavbarBrand>
  </Navbar>
  )
}

export default AuthMenu