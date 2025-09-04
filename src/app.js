let latestPrice = null;
let latestTimestamp = null;

const fetchBitcoinPrice = async () => {
    try {
        const response = await fetch('https://api.coinbase.com/v2/prices/spot?currency=USD');
        const data = await response.json();
        const price = data.data.amount;
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        document.getElementById('price').innerText = `Current Bitcoin Price: $${price} (Updated: ${timeString})`;
        latestPrice = price;
        latestTimestamp = now.toISOString();
    } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
        document.getElementById('price').innerText = 'Error fetching price';
    }
};

const savePrice = async () => {
    if (!latestPrice || !latestTimestamp) return;
    try {
        await fetch('http://localhost:3001/save-price', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ price: latestPrice, timestamp: latestTimestamp })
        });
        alert('Price saved!');
    } catch (error) {
        alert('Failed to save price.');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    fetchBitcoinPrice();
    setInterval(fetchBitcoinPrice, 60000); // Update price every minute
    document.getElementById('save-btn').addEventListener('click', savePrice);
});