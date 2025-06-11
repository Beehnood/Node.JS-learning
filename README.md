# Project Node 1 (Blog Project)

This is a Node.js application that implements a simple blog. It uses Express, EJS templating, and MongoDB for data storage.

## Prerequisites

*   Node.js and npm installed on your system.
*   Access to a MongoDB instance (local or cloud).

## Setup and Installation

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone <repository-url>
    cd project-node-1
    ```

2.  **Install dependencies:**
    Open your terminal in the project root directory and run:
    ```bash
    npm install
    ```

## Running the Application

1.  **Configure MongoDB:**
    This project requires a MongoDB connection.
    - By default, it will attempt to connect to the URI specified in `app.js`.
    - **Recommended:** Set up a `MONGODB_URI` environment variable with your MongoDB connection string. For example:
      ```
      MONGODB_URI="mongodb://localhost:27017/myblogdb"
      ```
      The application has been updated to prioritize this environment variable. If it's not set, it will fall back to the hardcoded URI in `app.js` (which you might need to update with your own credentials if you don't use the environment variable).

2.  **Start the server:**
    Once dependencies are installed and MongoDB is configured, run:
    ```bash
    npm start
    ```
    This will start the application, and you should see a message in your console like:
    `Serveur en écoute sur le port 3000`
    And possibly a message about the database connection status.

3.  **Access the application:**
    Open your web browser and go to:
    [http://localhost:3000](http://localhost:3000)

## Project Structure

*   `app.js`: The main Express application file. Handles server setup, middleware, and top-level routing.
*   `server.js`: An older http server file, no longer the primary entry point.
*   `routes/`: Contains route handlers (e.g., `blogRoutes.js`).
*   `views/`: Contains EJS template files for rendering HTML.
*   `public/`: Contains static assets like CSS files.
*   `model/`: Contains Mongoose schemas (e.g., `blog.js`).
*   `package.json`: Lists project dependencies and scripts.

## Notes

*   If the MongoDB database is not accessible or not configured correctly, the blog listing page may show an error message or an empty list of blogs, but other parts of the site (like the About page) should still be accessible.
