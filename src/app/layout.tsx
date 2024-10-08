import {ConvexClientProvider} from "./ConvexClientProvider"
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from 'react';



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en">
      <body>
      <ConvexClientProvider>
        {children}
      </ConvexClientProvider>
      </body>
      </html>
    </ConvexAuthNextjsServerProvider>

  );
}
