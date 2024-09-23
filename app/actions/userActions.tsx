'use server'
import { z } from "zod";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import bcrypt from 'bcryptjs';
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || '';



const formSchema = z.object({
    email: z.coerce.string().email({ message: "Invalid Email Address." }),
    password: z.coerce.string().min(8, { message: "Min 5 Charachter" }),
    confirm: z.coerce.string().min(8),
});
export const createUser = async (prevState: any, formData: FormData) => {
    const email = formData.get('email');
    const password = formData.get('password');
    const confirm = formData.get('confirm');
    if (password != confirm) {
        return {
            passError: "Password not matched",
            mainError: '',
            emailError: '',
        }
    }
    const res = formSchema.safeParse({ email, password, confirm });
    if (!res.success) {
        const { errors: err } = res.error;
        const message = {
            emailError: '',
            passError: '',
            mainError: '',
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
                mainError: 'User already exists',
                emailError: '',
                passError: '',
            }
        }
        throw new Error(error.message);
    }

    redirect('/signin');

}

export const loginUser = async (prevState: any, formData: FormData) => {
    const email = formData.get('email');
    const password = formData.get('password');

    if (typeof email !== 'string' || typeof password !== 'string') {
        return {
            res: false,
            message: 'Email or Password not correct1'
        };
    }
    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });
        if (!user || !await bcrypt.compare(password, user.password)) {
            return {
                res: false,
                message: 'Email Or Password Not Correct2'
            }
        }
        //Generate token base secrect string
        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' })

        //save token with user id in database
        await prisma.user.update({
            where: { id: user.id },
            data: {
                token
            }
        });

        //set cookie

        const cookieStore = cookies();

        cookieStore.set('authToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        })

        return {
            res: true,
            message: 'Login Successfully'
        }

    } catch (error: any) {
        console.error(error);
        throw new Error('An error occurred during login');
    }
    //not working
    //redirect('/dashboard');
}

export const checkUser = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get('authToken');
    if (!token) {
        return false;
    }
    try {
        const user = await prisma.user.findFirst({
            where: { token: token.value }
        });

        if (!user) {
            return false;
        }

        return user
    } catch (error: any) {
        console.error(error);
        throw new Error(error.message);

    }
}