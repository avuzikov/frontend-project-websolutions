# Customer Management System

This project is a simple Customer Management System developed as part of the onboarding course at ADP. It demonstrates basic CRUD (Create, Read, Update, Delete) operations for managing customer data using React.

## Project Structure

The project consists of the following main files:

1. `App.js`: The main component that orchestrates the application. It manages the state of customers and handles operations like selecting, updating, and deleting customers.

2. `restdb.js`: A module that provides functions for interacting with a RESTful API to perform CRUD operations on customer data.

3. `components/CustomerList.js`: A component that displays the list of customers. It allows selecting a customer for editing and includes a search functionality.

4. `components/UpdateForm.js`: A component that provides a form for adding new customers or updating existing ones.

## Key Features

- Display a list of customers
- Search functionality to filter customers by name or email
- Select a customer to view/edit their details
- Add new customers
- Update existing customer information
- Delete customers

## State Management

The application uses React's useState hook for state management. The main state is kept in the App component, which includes:

- `customers`: An array of all customer objects
- `selectedCustomer`: The currently selected customer (if any)

## Data Flow

1. The App component fetches initial customer data from the API using functions in `restdb.js`.
2. User interactions in the CustomerList and UpdateForm components trigger functions passed down as props from the App component.
3. These functions update the state in the App component and the database through API calls, which then re-renders the child components with the updated data.

## Search Functionality

The CustomerList component now includes a search feature:

- Users can search for customers by name or email.
- The search is case-insensitive and updates in real-time as the user types.
- A custom magnifying glass icon is displayed in the search input for better user experience.
- If no customers match the search criteria, a message "No customers satisfy the search criteria" is displayed.
- If the database is empty, a message "No customers found" is shown instead of the table.

## API Integration

The `restdb.js` file contains functions for interacting with a RESTful API:

- `getAll()`: Fetches all customers
- `get(id)`: Fetches a specific customer by ID
- `post(item)`: Creates a new customer
- `put(id, item)`: Updates an existing customer
- `deleteById(id)`: Deletes a customer

These functions use the Fetch API to make HTTP requests to the server running at `http://localhost:4000/customers`.

## Getting Started

To run this project locally:

1. Clone the repository
2. Run `npm install` to install dependencies
3. Ensure the backend server is running on `http://localhost:4000`
4. Run `npm start` to start the development server
5. Open `http://localhost:3000` in your browser to view the app