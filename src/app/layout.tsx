import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";
import Navbar from "@/components/custom/Navbar";
import SessionWrapper from "@/components/session-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopTalk",
  description: "AI assited shoping platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <SessionWrapper>
        <body
          className={cn(
            "min-h-screen bg-background antialiased",
            inter.className
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex flex-col h-screen">
              <div className="-z-40 absolute top-0 left-0 bg-blue-900 w-1/2 h-1/2 rounded-full blur-[25rem] dark:blur-[10rem]"></div>
              <div className="-z-40 absolute bottom-5 right-0 bg-purple-700 w-2/3 h-1/3 rounded-full blur-[25rem] dark:blur-[10rem]"></div>
              <div className="-z-30 absolute bottom-0 dark:bg-black/80 w-full h-full blur-[5rem]"></div>
              <Navbar />
              <main className="container mx-auto max-w-7xl pt-8 px-6 flex-grow">
                {children}
              </main>
              <footer className="w-full flex items-center justify-center py-3">
                <Link
                  className="flex items-center gap-1 text-current"
                  href="https://priyaaanshh.vercel.app"
                  target="blank"
                  title="Priyansh's Portfolio"
                >
                  <span className="text-default-600 font-extralight">
                    Developed by
                  </span>
                  <p className="text-primary">Priyansh Sahu</p>
                </Link>
              </footer>
            </div>
          </ThemeProvider>
        </body>
      </SessionWrapper>
    </html>
  );
}
