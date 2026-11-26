
# Enterprise Cloud Service Catalog

## Project Overview
A Node.js and Express-based web application that provides information about enterprise cloud services and system availability.

## Technologies Used
- Node.js
- Express.js
- HTML and CSS
- Git and GitHub
- Vercel

## Features
1. Displays the Enterprise Cloud Service Catalog homepage.
2. Provides four cloud services through `/api/services`.
3. Displays application health through `/api/status`.
4. Supports local and cloud deployment.

## Local Execution
1. Run `npm install`.
2. Run `npm start`.
3. Open `http://localhost:8080`.

## Local Port vs Vercel Production Port (100 Words)

During local development, the application runs on port 8080 by default, allowing the developer to access it through http://localhost:8080. The port is selected using process.env.PORT || 8080, so an environment-provided port can override the local default. When deployed on Vercel, the application runs within Vercel's managed hosting environment, where incoming requests are routed by the platform rather than relying on a developer-selected public port. Vercel manages the production networking and assigns the deployment its public URL. Therefore, users access the live application through that URL, while port 8080 is the local development default. This separates local testing from production hosting.
