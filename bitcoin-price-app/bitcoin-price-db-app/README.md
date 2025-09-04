# Bitcoin Price Database Application

This project is a simple application that fetches the current Bitcoin price from an API and saves it to a database. It is structured to separate concerns, with distinct files for fetching data, handling database interactions, and defining data models.

## Project Structure

```
bitcoin-price-db-app
├── src
│   ├── app.js               # Entry point of the application
│   ├── db
│   │   └── index.js         # Database connection and interaction functions
│   ├── services
│   │   └── bitcoinService.js # Service to save Bitcoin price to the database
│   └── models
│       └── priceModel.js    # Data model for Bitcoin price
├── package.json              # NPM configuration file
└── README.md                 # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd bitcoin-price-db-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure the database:**
   Update the database connection settings in `src/db/index.js` to match your database configuration.

4. **Run the application:**
   ```
   node src/app.js
   ```

## Usage

The application will fetch the current Bitcoin price every minute and save it to the database. You can check the database to see the saved prices.

## Dependencies

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Database Driver] - (e.g., MongoDB, PostgreSQL) - for database interactions

## License

This project is licensed under the MIT License.