const db = require('./db/index');
const fetchBitcoinPrice = async () => {
    try {
        const response = await fetch('https://api.coinbase.com/v2/prices/spot?currency=USD');
        const data = await response.json();
        const price = data.data.amount;
        await db.saveBitcoinPrice(price);
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        console.log(`Current Bitcoin Price: $${price} (Saved at: ${timeString})`);
    } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    fetchBitcoinPrice();
    setInterval(fetchBitcoinPrice, 60000); // Update price every minute
});