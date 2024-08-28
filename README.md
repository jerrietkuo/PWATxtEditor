# Just Another Text Editor (J.A.T.E)

## Description

Just Another Text Editor (J.A.T.E) is a Progressive Web Application (PWA) that provides a simple and intuitive interface for writing and managing text. This application is built with modern web technologies, including IndexedDB for data storage, Webpack for bundling, and a service worker for offline capabilities. J.A.T.E allows users to create notes or code snippets with or without an internet connection, ensuring that data is reliably saved and retrievable.

## Features

- **Offline Functionality**: J.A.T.E works seamlessly offline, allowing you to write and edit text without an active internet connection.
- **IndexedDB Storage**: Data is saved using IndexedDB, ensuring that your notes and code snippets are persistently stored.
- **PWA Installation**: J.A.T.E can be installed as a Progressive Web Application, allowing it to function like a native app on your desktop or mobile device.
- **Responsive Design**: The application is designed to work on various screen sizes, ensuring a smooth experience on both desktop and mobile devices.
- **Service Worker**: Caches static assets and ensures that the application loads quickly even when offline.

## Installation

To install J.A.T.E locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/jate.git
    cd jate
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Build the application:
    ```bash
    npm run build
    ```

4. Start the server:
    ```bash
    npm start
    ```

5. Open the application in your browser:
    ```
    http://localhost:3000
    ```

## Deployment

J.A.T.E is deployed on Render. The application is built using Webpack, and the production build is automatically deployed whenever changes are pushed to the main branch.

### Render Deployment

1. **Build Command**: `npm run build`
2. **Start Command**: `npm start`

## Usage

- **Writing and Saving Text**: Start typing in the editor, and your text will be automatically saved as you type.
- **PWA Installation**: Click the "Install" button in the application to install it on your desktop or mobile device.
- **Offline Mode**: J.A.T.E will continue to function offline, allowing you to create and edit text without an internet connection.

## Technologies Used

- **HTML5, CSS3, JavaScript**
- **Webpack**
- **Babel**
- **IndexedDB**
- **Service Workers**
- **Express.js**
- **Node.js**

## Contributing

If you would like to contribute to J.A.T.E, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact:
- Name: [Jerriet Kuo]
- Email: [jerrietkuo@gmail.com]
- GitHub: [https://github.com/jerrietkuo]