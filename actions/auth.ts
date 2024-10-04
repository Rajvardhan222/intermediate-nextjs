"use server"
import { cookies } from 'next/headers'
import { signin, signup } from '@/utils/authTools'
import { z } from 'zod'
import { redirect } from 'next/navigation'
import { COOKIE_NAME } from '@/utils/constants'
import { loginUserData } from '@/components/SigninForm'


const authSchema = z.object({
    email: z.string().email(),
    password: z.string(),
})

export const registerUser = async (prevState : any,formData:FormData) => {
    const data = authSchema.parse({
        email: formData.get('email'),
        password: formData.get('password'),
    })

    try {
        const {token} = await signup(data)
        cookies().set(COOKIE_NAME, token)
    } catch (error:any) {
        console.error(error)
        return { error: 'An error occurred',
        message : error.message}
    }

    redirect('/dashboard')
}

export let loginUser = async (prevState:any,formData:FormData) => {
    const data = authSchema.parse({
        email: formData.get('email'),
        password: formData.get('password'),
    })

    try {
        const {token} = await signin(data)
        cookies().set(COOKIE_NAME, token)
    } catch (error:any) {
        console.error(error)
        return { error: 'An error occurred',
        message : error.message}
    }

    redirect('/dashboard')
}

