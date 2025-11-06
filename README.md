# 🌐 Socially — Connect. Share. Engage.

**[Visit Socially Live](https://socially-liart-rho.vercel.app/)**

Socially is a modern social media web application designed to bring people together. Built with the latest web technologies, it provides a seamless and intuitive experience for users to connect, post, follow, like, and comment.

![Socially Preview](https://socially-liart-rho.vercel.app/og-image.png)

## ✨ Features

**Modern Social Experience**
Share & Express: Create and share engaging posts, including images.
Engage & Interact: Like, comment on, and interact with posts from other users.
Connect & Follow: Follow users to stay updated with their activities and unfollow when you need to curate your feed.

**Authentication with [Clerk](https://clerk.dev)**
Powered by Clerk: Secure and easy-to-use authentication for user sign-in, sign-up, and profile management.
Social Logins: Supports popular social providers like Google and GitHub for quick access.

**Image Uploads with [UploadThing](https://uploadthing.com)**
Fast and secure image uploads
Uploads with UploadThing: Fast, secure, and optimized image uploads and delivery for a smooth user experience.

**Data Layer with [Prisma ORM](https://www.prisma.io/)**
Type-safe database access
Clean and efficient schema design
Prisma ORM: Provides type-safe database access with a clean and efficient schema design.

**Beautiful UI with [shadcn/ui](https://ui.shadcn.com)**
Modern, accessible, and customizable components
Built on top of Radix UI and Tailwind CSS
shadcn/ui: A collection of modern, accessible, and customizable UI components built on top of Radix UI and Tailwind CSS.

**Built with [Next.js 14](https://nextjs.org)**
App Router architecture
Server Actions, ISR, and optimized performance
Leverages the App Router architecture, Server Actions, Incremental Static Regeneration (ISR), and other optimizations for superior performance.

## 🛠️ Tech Stack

| Category       | Technology       |
| -------------- | ---------------- |
| Framework      | **Next.js**      |
| Authentication | **Clerk**        |
| Database ORM   | **Prisma**       |
| Image Storage  | **UploadThing**  |
| UI Library     | **shadcn/ui**    |
| Styling        | **Tailwind CSS** |
| Deployment     | **Vercel**       |

## 🧩 Project Structure

```bash
socially/
├── src/
│   ├── app/               # Next.js App Router pages and API routes
│   ├── components/        # Reusable UI components
│   ├── lib/               # Utility functions and helpers
│   ├── prisma/            # Prisma schema and generated client
│   └── styles/            # Global stylesheets
├── public/                # Static assets (images, fonts, etc.)
├── prisma/                # Prisma database migrations
├── .env.local             # Environment variables for local development
└── package.json           # Project dependencies and scripts

## ⚙️ Getting Started (Local Development)

1️⃣ Clone the repository

git clone https://github.com/yourusername/socially.git
cd socially

2️⃣ Install dependencies
npm install

# or

yarn install

3️⃣ Set up environment variables

Create a .env.local file in the root directory and add:

DATABASE_URL=your_database_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
UPLOADTHING_SECRET=your_uploadthing_secret
UPLOADTHING_APP_ID=your_uploadthing_app_id

4️⃣ Generate Prisma Client
npx prisma generate

5️⃣ Run the development server
npm run dev
Then open http://localhost:3000 to see it live.

## Future Enhancements

🔔 Real-time notifications
💬 Direct messaging
🧑‍🤝‍🧑 Group chats and communities
📱 Mobile-first PWA version

## 🤝 Contributing

Contributions are welcome!
If you’d like to improve Socially, please fork the repo and open a pull request.
Fork the repository
Create your feature branch: git checkout -b feature/amazing-feature
Commit your changes: git commit -m 'Add amazing feature'
Push to the branch: git push origin feature/amazing-feature
Open a Pull Request

## 🧑‍💻 Author

Developed by Mustafizur Rahman
Built with ❤️ using Next.js, Prisma, and Clerk

## 🪩 License

This project is licensed under the MIT License — feel free to use and modify it.

```

```

```
