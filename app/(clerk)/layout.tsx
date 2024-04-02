import { Metadata } from "next";




export const metadata: Metadata = {
  title: "Sign In",
  description: "Best Hotel In Rudrapur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="h-screen flex items-center justify-center">
        {children}
    </body>
  );
}
