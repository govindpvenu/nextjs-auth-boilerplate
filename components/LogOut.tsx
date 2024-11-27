"use client"

import { LogOut } from "lucide-react"
import { Button } from "./ui/button"
import { signOut } from "@/lib/client"
import { useRouter } from "next/navigation"

export function LogoutButton() {
  const router = useRouter()
  return (
    <Button
      onClick={async () => {
        await signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/login") // redirect to login page
            },
          },
        })
      }}
      className=""
      variant="destructive"
    >
      <LogOut />
    </Button>
  )
}
