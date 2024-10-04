'use client'
import { loginUser } from '@/actions/auth'
import { Input } from '@nextui-org/react'
import Link from 'next/link'
import { useFormState } from 'react-dom'
import SubmitButton from './SubmitButton'
export type loginUserData = 
  (state: { message: string | null; }) => { message: string | null; } | Promise<{ message: string | null; }>

let initState = { message : null}
const SigninForm = () => {
  let [formState,action] = useFormState<{message:string|null}>(loginUser,initState)


  return (
    <form action={action} className="bg-content1 border border-default-100 shadow-lg rounded-md p-3 flex flex-col gap-2 ">
      <h3 className="my-4">Sign in</h3>
      <Input
        fullWidth
        required
        size="lg"
        placeholder="Email"
        name="email"
        type="email"
      />
      <Input
        name="password"
        fullWidth
        required
        size="lg"
        type="password"
        placeholder="Password"
      />
      <SubmitButton label={'sign in'} />
      <div>
        <Link href="/signup">{`Don't have an account?`}</Link>
      </div>
    </form>
  )
}

export default SigninForm
