//backend call
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

export const redirectToCheckout = async (priceId) => {
	try {
		const response = await fetch(`${BACKEND_URL}/create-checkout-session`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ priceId }),
		});

		const data = await response.json();

		if (data.url) {
			window.location.href = data.url;
		} else {
			console.error('No URL returned from backend');
		}
	} catch (error) {
		console.error('Checkout error:', error);
	}
};

export const redirectToBillingPortal = async (email) => {
	const response = await fetch(`${BACKEND_URL}/create-portal-session`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email }),
	});

	const data = await response.json().catch(() => ({}));

	if (!response.ok) {
		throw new Error(data.error || `Billing portal request failed (${response.status})`);
	}

	if (!data.url) {
		throw new Error('No portal URL returned from backend');
	}

	window.location.href = data.url;
};