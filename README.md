# Chat Application

This is a chat application built as a test task for the Frontend Developer position. The application allows users to log in, create and delete chats, send messages to a botls.

## Live Demo

🔗 [Deployed Application]()

## Installation

Clone the repository:

```sh
git clone https://github.com/iZeevens/chat-app
```

Install dependencies:

```sh
yarn install
# or
npm install
```

Build the project:

```sh
yarn build
# or
npm run build
```

Run the development server:

```sh
yarn dev
# or
npm run dev
```

## Features

✅ User authentication (localStorage-based)
✅ Display username
✅ Logout functionality
✅ Create & delete chats
✅ Chat list display
✅ Chat with a bot
✅ Responsive design with sidebar toggle
✅ API integration for chat messages

## Technologies Used

- React
- React Router
- TypeScript
- Styled Components
- Redux
- Axios
- API integration with [BothubQ](https://bothubq.com/api/v2/swagger/#/)

## Authentication

Authorization token is required in headers:

```sh
Authorization: Bearer YOUR_TOKEN
```

Use the `.env` file to configure your API key:

```sh
VITE_AUTH_API_TOKEN=YOUR_API_KEY
```
