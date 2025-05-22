# LinkedTree

A modern link-in-bio platform built with Next.js, MongoDB, and Cloudinary. Create customizable profile pages with social media buttons, external links, and analytics tracking.

## 🌟 Features

- **Customizable Profiles**: Create personalized pages with custom URLs
- **Social Media Buttons**: Add social media links with icons
- **Custom Links**: Add unlimited external links with titles and descriptions
- **Analytics Dashboard**: Track views and clicks with visual charts
- **Drag-and-Drop Interface**: Easily reorder buttons and links
- **Visual Customization**: Change background colors or upload background images
- **Responsive Design**: Looks great on all devices
- **Google Authentication**: Secure login with Google OAuth

## 🚀 Tech Stack

- **Frontend**: Next.js 14, React, TailwindCSS
- **Backend**: Next.js API Routes, MongoDB
- **Authentication**: NextAuth.js with Google provider
- **File Storage**: Cloudinary
- **Styling**: TailwindCSS, FontAwesome
- **Charts**: Recharts
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- Google OAuth credentials
- Cloudinary account

## 🛠️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/Saksham-Goel1107/LinkedTree.git
cd LinkedTree
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory with the following variables:

```
# MongoDB
MONGO_URI=your_mongodb_connection_string

# NextAuth
SECRET=your_generated_secret
NEXTAUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Cloudinary configuration (for file uploads)
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

4. **Run the development server**

```bash
npm run dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see your app running.

## 📱 Usage

1. **Login with Google**
2. **Create your custom username**
3. **Customize your profile**:
   - Add profile details
   - Change background colors or images
   - Add social media buttons
   - Add custom links
4. **View your public profile** at `yourdomain.com/your-username`
5. **Track analytics** in the analytics dashboard

## 🧰 Project Structure

```
src/
  ├── actions/        # Server actions for form submissions
  ├── app/            # Next.js 14 app directory
  │   ├── (app)/      # Dashboard & account management routes
  │   ├── (page)/     # Public profile pages
  │   ├── (website)/  # Landing page and authentication
  │   └── api/        # API routes
  ├── components/     # Reusable React components
  ├── libs/           # Utility functions
  └── models/         # MongoDB models
```

## 🔄 How to Contribute

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Cloudinary](https://cloudinary.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [FontAwesome](https://fontawesome.com/)
- [Recharts](https://recharts.org/)

## 🔐 Environment Setup Guide

### MongoDB Atlas (Free Tier)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Sign up for a free account (no credit card required)
3. Create a new cluster (select the free "Shared" tier)
4. Set up database access (create a user with password)
5. Set up network access (allow connections from anywhere or your IP)
6. Get your connection string from the "Connect" button

### Google OAuth (Free)
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (it's free)
3. Navigate to "APIs & Services" > "Credentials"
4. Configure the OAuth consent screen
5. Create OAuth client ID (Web application type)
6. Add authorized redirect URIs (`http://localhost:3000/api/auth/callback/google` for development)

### Cloudinary (Free Tier)
1. Go to [Cloudinary](https://cloudinary.com/users/register/free)
2. Sign up for a free account (no credit card required)
3. Get your cloud name, API key, and API secret from the dashboard