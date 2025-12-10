import { Request, Response } from 'express';
import prisma from '../prisma';

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { name, email } = req.body;
        const user = await prisma.user.upsert({
            where: { email },
            update: {},
            create: { name, email }
        });
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to find or create user' });
    }
};

export const listUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};
