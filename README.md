# 🏋️‍♂️ The Fitness Club

A modern, full-featured fitness club website built with Next.js, React, and Tailwind CSS. This project showcases a professional gym/fitness club platform with membership plans, trainer profiles, testimonials, contact forms, and more.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd the-fitness-club
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🏗️ Project Structure

- `src/app/components/` — All main React components (Header, HeroSection, About, Services, Pricing, Trainers, Testimonials, Contact, Footer, etc.)
- `src/app/api/submitEmail/route.js` — API route for handling contact form submissions.
- `src/model/` — Mongoose models for MongoDB.
- `src/config/` — Database connection utilities.
- `src/components/ui/` — Reusable UI components (button, input, carousel, etc.)
- `src/lib/` — Utility functions.
- `public/` — Static assets (images, logo, etc.)

---

## ✨ Features

- **Responsive Design:** Looks great on desktop, tablet, and mobile.
- **Modern UI:** Built with Tailwind CSS for a clean, professional look.
- **Hero Section:** Eye-catching intro with call-to-action.
- **About Section:** Club philosophy and highlights.
- **Services:** Detailed overview of gym offerings.
- **Pricing:** Membership plans with feature comparison.
- **Trainers:** Profiles of expert trainers.
- **Testimonials:** Real member success stories.
- **Contact Form:** Secure, validated form with backend integration.
- **Carousel:** Image slider for gym photos.
- **Sticky Header & Animated Progress Bar:** Enhanced navigation experience.
- **API Integration:** Contact form posts to a Next.js API route and stores messages in MongoDB.
- **Toast Notifications:** User feedback for form submissions.
- **Dark Mode Support:** Theme toggling via `next-themes`.

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root and add:

```
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_PHONE_NUMBER=your_whatsapp_number
```

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Next.js API Routes, MongoDB (via Mongoose)
- **UI:** Lucide Icons, Embla Carousel, Sonner (toasts)
- **Other:** Framer Motion (for scroll progress), next-themes (dark mode)

---

## 📦 Deployment

You can deploy this app on [Vercel](https://vercel.com/) or any platform that supports Next.js.

---

## 🙏 Credits

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Embla Carousel](https://www.embla-carousel.com/)
- [Sonner](https://sonner.emilkowal.ski/)
- [Framer Motion](https://www.framer.com/motion/)

---

## 📄 License

This project is for educational and portfolio purposes.

---

**Built with ❤️ by Hussainbinfazal and The Fitness Club Team**