import Link from "next/link"
import { ModeToggle } from "./theme-toggle"
import { LogoutButton } from "./LogOut"

export default function Header() {
  return (
    <nav className="border-b h-16 flex items-center justify-between p-4">
      <Nav />
      <div className="flex items-center justify-between gap-2">
        <ModeToggle />
        <LogoutButton />
      </div>
    </nav>
  )
}

function Nav() {
  return (
    <div className="flex gap-3">
      <Link href={"/"}>
        <span>Home</span>
      </Link>
      <Link href={"/login"}>
        <span>Login</span>
      </Link>
      <Link href={"/signup"}>
        <span>Signup</span>
      </Link>
      <Link href={"/dashboard"}>
        <span>Dashboard</span>
      </Link>
    </div>
  )
}
