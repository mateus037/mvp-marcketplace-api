import axios from 'axios';

const SECONDARY_API_URL = process.env.SECONDARY_API_URL || 'http://localhost:3002';

export const getProducts = async () => {
    try {
        const response = await axios.get(`${SECONDARY_API_URL}/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products from secondary API:', error);
        throw error;
    }
};

export const getProductById = async (id: string) => {
    try {
        const response = await axios.get(`${SECONDARY_API_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product from secondary API:', error);
        throw error;
    }
};

export const getAddressByCep = async (cep: string) => {
    try {
        const response = await axios.get(`${SECONDARY_API_URL}/address/${cep}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching address from secondary API:', error);
        throw error;
    }
};
