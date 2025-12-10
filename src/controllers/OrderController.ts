import { Request, Response } from 'express';
import prisma from '../prisma';

export const createOrder = async (req: Request, res: Response) => {
    try {
        const { userId, total, items } = req.body;

        const order = await prisma.order.create({
            data: {
                userId,
                total,
                status: 'COMPLETED',
                items: {
                    create: items.map((item: any) => ({
                        productId: String(item.productId),
                        quantity: item.quantity,
                        price: item.price
                    }))
                }
            },
            include: {
                items: true
            }
        });

        res.status(201).json(order);
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ error: 'Failed to create order' });
    }
};

export const listUserOrders = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const orders = await prisma.order.findMany({
            where: { userId },
            include: { items: true }
        });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
};
