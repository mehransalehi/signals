import type { Metadata } from "next";
import { Inter, Roboto, Alegreya } from "next/font/google";
import "./../globals.css";
import { UserProvider } from "../context/userContext";
import { SplashScreenProvider } from "../context/splashScreenContext";
import SplashScreenComponent from "../components/splashScreen";
import { checkUser } from "../actions/userActions";


const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
const alegreya = Alegreya({ subsets: ['latin'], weight: ['400', '700'] });

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
    <html lang="en" data-theme="cupcake">
      <body className={roboto.className}>
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
