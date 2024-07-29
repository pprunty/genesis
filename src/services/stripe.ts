import { BASE_URL } from "./index";

const STRIPE_PREFIX = "payment";

export const STRIPE_API_ENDPOINTS = {
    CHECKOUT: `${BASE_URL}/${STRIPE_PREFIX}/checkout`,
} as const;

export const createStripeCheckoutSession = async (mockData: any) => {
    console.log('Creating Stripe checkout session with data:', mockData);

    try {
        const response = await fetch(STRIPE_API_ENDPOINTS.CHECKOUT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(mockData),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Network response was not ok:', response.status, errorText);
            throw new Error(`Network response was not ok: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        console.log('Received Stripe session response:', data);

        if (!data.url) {
            console.error('URL not found in the Stripe session response:', data);
            throw new Error('URL not found in the Stripe session response.');
        }

        // Return the URL to redirect the user to the Stripe Checkout page
        return data.url;
    } catch (error) {
        console.error('Error creating checkout session:', error);
        throw error; // Re-throw the error so it can be handled by the caller
    }
};
