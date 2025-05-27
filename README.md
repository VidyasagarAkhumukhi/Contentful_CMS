# React Portfolio with Contentful CMS

## 📝 Description

This project is a React-based portfolio website that dynamically fetches and displays project information from Contentful, a headless Content Management System (CMS). It demonstrates how to integrate a React frontend with Contentful to manage website content (like project details, images, and links) without needing to redeploy the frontend application for content updates. The application features a hero section and a projects gallery where each project's data is pulled directly from Contentful.

## ✨ Features

- **Dynamic Content Management:** Project data (title, image, live URL, GitHub URL) is managed via Contentful.
- **Headless CMS Integration:** Leverages Contentful as a headless CMS for content delivery.
- **React Frontend:** Built with React for a modern, component-based user interface.
- **Custom Data Fetching Hook:** Uses a custom hook (`useFetchProjects`) to encapsulate the logic for fetching and parsing project data from Contentful.
- **Responsive Design:** (Assumed) Styled with CSS for display on various devices.
- **Loading State:** Displays a loading indicator while fetching project data.

## 🚀 Live Demo

[Link to Live Demo](https://contentfulcmsprojects.netlify.app/) 

## 🛠️ Technologies Used

- **Frontend:** React.js (Vite assumed, based on `import.meta.env`)
- **CMS:** Contentful
- **Contentful SDK:** `contentful` npm package
- **Styling:** CSS
- **Illustrations:** (Optional, e.g., hero image from Undraw)

## ⚙️ Prerequisites

- Node.js and npm (or yarn) installed.
- A Contentful account.

## 🔑 Contentful Setup

1.  **Create a Contentful Account:** If you don't have one, sign up at [Contentful.com](https://www.contentful.com/).
2.  **Create a New Space:** Or use an existing one. Note down your **Space ID**.
3.  **Define a Content Type (Content Model):**
    - Go to "Content model" in your Contentful space.
    - Create a new content type, e.g., named "Projects" (API Identifier: `projects`).
    - Add the following fields to this content type:
      - `title` (Short text, required)
      - `url` (Short text - for the live project URL, make it a URL validation if possible)
      - `image` (Media - for the project image)
      - `github` (Short text - for the GitHub repository URL, make it a URL validation if possible)
4.  **Create Content Entries:**
    - Go to the "Content" section.
    - Add a few entries for your "Projects" content type, filling in the details for each project.
5.  **Get API Access Token:**
    - Go to "Settings" > "API keys".
    - Create a new API key (or use an existing one). Note down your **Content Delivery API - access token**.

## ⚙️ Frontend Setup and Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/VidyasagarAkhumukhi/Contentful_CMS
    cd <your-repository-directory-name>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up Environment Variables:**

    - Create a `.env` file in the root of your project.
    - Add your Contentful Space ID and Access Token to this file. If using Vite, environment variables must be prefixed with `VITE_`:
      ```env
      VITE_CONTENTFUL_SPACE_ID=your_space_id_here
      VITE_CONTENTFUL_ACCESS_TOKEN=your_content_delivery_api_access_token_here
      ```
    - **Important:** Add `.env` to your `.gitignore` file to prevent your API credentials from being committed to version control.

4.  **Update Contentful Client Configuration:**
    Modify `src/fetchProjects.jsx` to use these environment variables:

    ```javascript
    // src/fetchProjects.jsx
    import { useState, useEffect } from "react";
    import { createClient } from "contentful";

    const client = createClient({
      space: import.meta.env.VITE_CONTENTFUL_SPACE_ID, // Use environment variable
      environment: "master", // defaults to 'master' if not set
      accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN, // Use environment variable
    });

    // ... rest of the hook
    ```

5.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    This will typically open the application in your default browser (e.g., `http://localhost:5173` for Vite).

## 📖 Usage

Once the setup is complete and the development server is running:

1.  The application will load, displaying the Hero section.
2.  The `Projects` component will fetch data from your Contentful space.
3.  A "Loading..." message will appear while data is being fetched.
4.  Once loaded, the projects you entered in Contentful will be displayed in a gallery format, each with an image, title, and links to the live site and GitHub repository.

## 🏗️ Project Structure

- `src/`: Contains the main source code.
  - `App.jsx`: Main application component, renders `Hero` and `Projects`.
  - `Hero.jsx`: Displays the hero section with an introductory text and image.
  - `Projects.jsx`: Fetches and displays the list of projects from Contentful using the `useFetchProjects` hook.
  - `fetchProjects.jsx`: Custom React hook to fetch and parse project data from Contentful using the `contentful` SDK.
  - `assets/`: Contains static assets like images (e.g., `hero.svg`).
  - `main.jsx`: Application entry point.
  - `index.css`: Global CSS styles.
- `public/`: Static assets served by Vite.
- `.env`: Environment variables (for Contentful credentials - **DO NOT COMMIT THIS FILE**).
- `.gitignore`: Specifies intentionally untracked files.
- `package.json`: Lists project dependencies and scripts.
- `vite.config.js` (if using Vite): Vite configuration file.

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-amazing-feature`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some amazing feature'`).
5.  Push to the branch (`git push origin feature/your-amazing-feature`).
6.  Open a Pull Request.
