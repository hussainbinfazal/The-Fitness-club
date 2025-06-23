import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata = {
  title: "The Fitness Club | Elevate Your Fitness Journey",
  description: "Join The Fitness Club – your local gym offering state-of-the-art equipment, expert trainers, group classes, and personalized fitness plans. Start your transformation today!",
  keywords: [
    "Fitness Club",
    "Gym",
    "Personal Training",
    "Group Classes",
    "Health",
    "Wellness",
    "Workout",
    "Strength Training",
    "Cardio",
    "Nutrition",
    "gyn near me",
    "best gym in okhla",
    "best gym in zakir nagar okhla",
    "best gym in batla house",
    "best gym in jamia nagar",
  ],
  author: "The Fitness Club Team"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-inter `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster  />
        </ThemeProvider>
      </body>
    </html>
  );
}
