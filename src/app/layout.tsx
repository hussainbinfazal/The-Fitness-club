import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { JSX, ReactNode } from "react";
import { Metadata } from "next";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
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
    "gym near me",
    "best gym in okhla",
    "best gym in zakir nagar okhla",
    "best gym in batla house",
    "best gym in  Jogabai",
    "best gym in Jamia Nagar",
    "best gym near Khalliullah Masjid",
    "best gym in Batla house",
    "best gym in delhi NCR",
    "best gym in NFC",
    "best gym in New Friends Colony",
    "best gym in Near TTI",
    "best gym in Okhla",


  ].join(", "),
   openGraph: {
    title: "The Fitness Club – your local gym offering state-of-the-art equipment, expert trainers, group classes, and personalized fitness plans.",
    description:
      "Join The Fitness Club – your local gym offering state-of-the-art equipment, expert trainers, group classes, and personalized fitness plans. Start your transformation today.",
    url: process.env.NEXT_PUBLIC_BASE_URL!, 
    type: "website",
    images: [
      {
        url: "/logo.jpg", 
        width: 800,
        height: 600,
        alt: "The Fitness Club Logo",
      },
    ],
    locale: "en_US",
    siteName: "The Fitness Club",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
    languages: {
       "en-US": "/en",
       "hi-IN": "/hi",
      "es-ES": "/es",
    }
  }
  
};

export default function RootLayout({ children }:{children: ReactNode}): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </body>
       
    </html>
  )
};
