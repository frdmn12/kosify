# Kosan Project

## Introduction
This project is a full-stack application for managing a rental property business. It consists of a frontend built with React and Vite, and a backend powered by NestJS.

## Prerequisites
Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/kosan.git
    ```
2. Navigate to the project directory:
    ```sh
    cd kosan
    ```

### Install Client and Backend Dependencies
3. Install the dependencies for both client and backend:
    - For the client:
      ```sh
      cd client
      npm install
      ```
    - For the backend:
      ```sh
      cd ../backend
      npm install
      ```

## Running the Application
### Start the Backend
1. Navigate to the `backend` directory and start the NestJS server:
    ```sh
    cd backend
    npm run start:dev
    ```
   The backend server will be running on `http://localhost:3001`.

### Start the Client
2. Open a new terminal window, navigate to the `client` directory, and start the development server:
    ```sh
    cd client
    npm run dev
    ```
   Open your browser and go to `http://localhost:3000`.

## Project Structure
This project is divided into two main folders:
- `client`: Contains the frontend code built with React and Vite.
- `backend`: Contains the backend code built with NestJS.

## Environment Variables
Make sure to set up the necessary environment variables for both the client and backend. You can create a `.env` file in each directory and add the required variables. Here are some examples:

### Backend `.env` Example
```env
PORT=3001
# Add other environment variables as needed