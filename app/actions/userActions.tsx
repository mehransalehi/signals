'use server'
import { z } from "zod";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import bcrypt from 'bcryptjs';



const formSchema = z.object({
    email: z.coerce.string().email({ message: "Invalid Email Address." }),
    password: z.coerce.string().min(8, { message: "Min 5 Charachter" }),
    confirm: z.coerce.string().min(8),
});
export async function createUser(prevState: any, formData: FormData) {
    const email = formData.get('email');
    const password = formData.get('password');
    const confirm = formData.get('confirm');
    if (password != confirm) {
        return {
            passError: "Password not matched"
        }
    }
    const res = formSchema.safeParse({ email, password, confirm });
    if (!res.success) {
        const { errors: err } = res.error;
        const message = {
            emailError: '',
            passError: ''
        };
        err.forEach((er) => {
            if (er.path[0] == 'email') {
                message.emailError = er.message;
            } else if (er.path[0] == 'password') {
                message.passError = er.message;
            }
        })
        return message;
    }
    const hashedPassword = await bcrypt.hash(res.data.password, 10);
    try {
        await prisma.user.create({
            data: {
                name: '',
                email: res.data.email,
                password: hashedPassword,
            }
        });
    } catch (error: any) {
        if (error.code == 'P2002') {
            return {
                mainError: 'User already exists'
            }
        }
        throw new Error(error.message);
    }

    redirect('/signin');

}