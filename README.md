# Customer Management System

This project is a simple Customer Management System developed as part of the onboarding course at ADP. It demonstrates basic CRUD (Create, Read, Update, Delete) operations for managing customer data using React.

## Project Structure

The project consists of the following main files:

1. `App.js`: The main component that orchestrates the application. It manages the state of customers and handles operations like selecting, updating, and deleting customers.

2. `memdb.js`: A mock database module that simulates data persistence. It provides functions for retrieving, adding, updating, and deleting customer records.

3. `components/CustomerList.js`: A component that displays the list of customers. It allows selecting a customer for editing.

4. `components/UpdateForm.js`: A component that provides a form for adding new customers or updating existing ones.

## Key Features

- Display a list of customers
- Select a customer to view/edit their details
- Add new customers
- Update existing customer information
- Delete customers

## State Management

The application uses React's useState hook for state management. The main state is kept in the App component, which includes:

- `customers`: An array of all customer objects
- `selectedCustomer`: The currently selected customer (if any)

## Data Flow

1. The App component fetches initial customer data from `memdb.js`.
2. User interactions in the CustomerList and UpdateForm components trigger functions passed down as props from the App component.
3. These functions update the state in the App component, which then re-renders the child components with the updated data.

## Getting Started

To run this project locally:

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server
4. Open `http://localhost:3000` in your browser to view the app