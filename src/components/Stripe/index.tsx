import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { createStripeCheckoutSession } from "@/services/stripe"; // Adjust the path according to your project structure


const stripePromise = loadStripe(process.env.NEXT_STRIPE_API_KEY || '');

const CheckoutButton: React.FC = () => {
    const handleClick = async () => {
        // Get Stripe.js instance
        const stripe = await stripePromise;
        if (!stripe) {
            console.error('Stripe.js has not loaded yet.');
            return;
        }

        // Mock product data to send to backend
        const mockData = {
            products: [
                {
                    name: "Sample Product 1",
                    description: 'Comfortable cotton t-shirt',
                    images: ["https://picsum.photos/200/300"],
                    currency: "usd",
                    unit_amount: 2500, // $25.00 (in cents)
                },
                {
                    name: "Sample Product 2",
                    description: 'Comfortable velvet jeans',
                    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
                    currency: "usd",
                    unit_amount: 1500, // $15.00 (in cents)
                },
            ],
            default_product_names: ["default_product_1", "default_product_2"],
        };

        try {
            // Use the function to create the checkout session
            const checkoutUrl = await createStripeCheckoutSession(mockData);

            // Redirect the user to the Stripe Checkout page
            window.location.href = checkoutUrl;
        } catch (error) {
            console.error('Error creating checkout session:', error);
        }
    };

    return (
        <button role="link" onClick={handleClick}>
            Checkout
        </button>
    );
};

export default CheckoutButton;
