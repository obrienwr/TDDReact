"use client";

// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import {Provider} from "react-redux";
import store from "@/app/lib/store";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Bookish App",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={inter.className}>
          <div className={"background bg-purple-300"}>
            <Typography variant="h2" component="h2" data-test="heading">
              <Link href={"/"}>Bookish</Link>
            </Typography>
          </div>
          {children}
        </body>
      </Provider>
    </html>
  );
}
