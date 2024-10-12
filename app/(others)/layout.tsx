import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";
import { SplashScreenProvider } from "../context/splashScreenContext";
import SplashScreenComponent from "../components/splashScreen";
import { UserProvider } from "../context/userContext";
import { checkUser } from "../actions/userActions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Signals",
  description: "Auto Ordring Bot For Cryptocurency",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let user = await checkUser();
  if(user === true) {
    user = false;
  }
  return (
    <html lang="en" className="h-full" data-theme="cupcake">
      <body className={`${inter.className}  min-h-full h-full`}>
        <SplashScreenProvider>
          <UserProvider user={user}>
            <SplashScreenComponent />
            {children}
          </UserProvider>
        </SplashScreenProvider>
      </body>
    </html>
  );
}
