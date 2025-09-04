const { savePriceToDatabase } = require('../db/index');

const saveBitcoinPrice = async (price) => {
    try {
        await savePriceToDatabase({ price });
        console.log('Bitcoin price saved to database:', price);
    } catch (error) {
        console.error('Error saving Bitcoin price to database:', error);
    }
};

module.exports = { saveBitcoinPrice };