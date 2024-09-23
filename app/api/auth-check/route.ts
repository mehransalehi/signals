import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from 'next'
import { cookies } from "next/headers";

export const GET = async (req: Request) => {
    const cookieStore = cookies();
    const  authToken  = cookieStore.get('authToken');
    if (!authToken) {
        return new Response('NOT VALID USER',{
            status :401
        });
    }
    try {
        const user = await prisma.user.findFirst({
            where: { token: authToken.value }
        });

        if (!user) {
            return new Response('NOT VALID USER',{
                status :401
            });
        }

        return Response.json({user})
    } catch (error) {
        return new Response('Internal Server Error',{
            status :500
        });
    }
}