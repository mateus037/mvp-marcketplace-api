import { Router } from 'express';
import { listUsers, registerUser } from './controllers/UserController';
import { createOrder, listUserOrders } from './controllers/OrderController';
import { getAddressByCep, getProducts, getProductById } from './integration/secondaryApi';

const router = Router();

// Users
router.post('/users', registerUser);
router.get('/users', listUsers);

// Orders
router.post('/orders', createOrder);
router.get('/orders/user/:userId', listUserOrders);

// Integration Proxies (for Frontend convenience)
router.get('/catalog/products', async (req, res) => {
    try {
        const products = await getProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

router.get('/catalog/products/:id', async (req, res) => {
    try {
        const product = await getProductById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch product' });
    }
});

router.get('/dist/address/:cep', async (req, res) => {
    try {
        const address = await getAddressByCep(req.params.cep);
        res.json(address);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch address' });
    }
});

export default router;
