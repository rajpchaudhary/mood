// app/sign-up/[[...sign-up]]/page.tsx
import { SignUp, useUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

export default function Page() {
  return <SignUp forceRedirectUrl="/new-user" />
}
