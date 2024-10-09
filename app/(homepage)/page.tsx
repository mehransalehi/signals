import Navbar from "./components/navbar";
import Image from "next/image";
import Link from "next/link";

import { Alegreya } from "next/font/google";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { RiMoneyCnyCircleFill } from "react-icons/ri";
import { RiMoneyEuroBoxFill } from "react-icons/ri";


const alegreya = Alegreya({ subsets: ['latin'], weight: ['400', '700'] });


export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <div className="flex flex-col bg-primary hero-section-background items-center">
        <Navbar />
        <div className="flex xl:w-[1280px] w-full pt-24 pb-[300px]">
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-accent">Unlock Your Crypto Potential: Profit from Expert Signals!</h1>
            <p className="py-6 text-accent">At Signals, we specialize in delivering top-tier crypto signals that empower traders to navigate the dynamic cryptocurrency market with confidence. Our team of experienced analysts leverages advanced algorithms and in-depth market research to provide timely, actionable insights that help you make informed trading decisions.</p>
            <div className="flex">
              <Link href="#" className="btn btn-secondary me-4 text-white">Read More</Link>
              <Link href="#" className="btn btn-accent">Contact Us</Link>
            </div>
          </div>
          <div className="flex-1">
            <Image className="w-[600px]" src="/images/hero.png" width={400} height={400} alt="Hero Image"></Image>
          </div>
        </div>
      </div>
      {/* End Hero Seciton */}

      {/* Fast Services */}
      <div className="flex justify-center py-20 bg-white">
        <div className="flex justify-center xl:w-[1280px] w-full items-stretch">
          <div className="p-5 flex-1">
            <div className="card shadow-md bg-base-100 py-6 h-full transition-all hover:translate-y-[-20px] duration-500 hover:shadow-xl">
              <figure className="text-6xl text-primary">
                <RiMoneyDollarCircleFill />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="text-2xl text-primary">Crypto Spot Signals</h3>
                <p className="text-sm text-[#777]">Discover the power of real-time trading with our Crypto Spot Signals. Our expert analysts deliver precise entry and exit points for top cryptocurrencies.</p>
              </div>
            </div>
          </div>
          <div className="p-5 flex-1">
            <div className="card shadow-md bg-base-100 py-6 h-full transition-all hover:translate-y-[-20px] duration-500 hover:shadow-xl">
              <figure className="text-6xl text-primary">
                <RiMoneyCnyCircleFill />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="text-2xl text-primary">Crypto Feature Signals</h3>
                <p className="text-sm text-[#777]">Elevate your trading strategy with our Crypto Feature Signals. Focused on emerging trends and potential market shifts.</p>
              </div>
            </div>
          </div>
          <div className="p-5 flex-1">
            <div className="card shadow-md bg-base-100 py-6 h-full transition-all hover:translate-y-[-20px] duration-500 hover:shadow-xl">
              <figure className="text-6xl text-primary">
                <RiMoneyEuroBoxFill />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="text-2xl text-primary">Forex Signals</h3>
                <p className="text-sm text-[#777]">Navigate the global currency market with confidence using our Forex Signals. Our experienced team analyzes market trends and economic. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Fast Services */}


      {/* About us section  */}
      <div className="flex justify-center py-20 bg-white">
        <div className="flex xl:w-[1200px] w-full">
          <div className="flex flex-col justify-center flex-1 p-5">
            <p className="text-sm text-secondary mb-4">About Us</p>
            <h2 className={alegreya.className+" text-4xl text-neutral font-bold mb-6"}>Our Journey: Crafting Excellence in Crypto Insights</h2>
            <p className="text-base text-[#777]">
              At Signals, we are passionate about empowering traders with reliable and actionable insights in the ever-evolving world of cryptocurrency. Our journey began with a vision to demystify the crypto market and provide traders, both new and experienced, with the tools they need to succeed.
            </p>

            <div className="flex flex-col mt-7">
              <div className="flex text-sm text-[#888] justify-between mb-1">
                <p>Expertise in Market Analysis</p>
                <p>85%</p>
              </div>
              <div className="w-full bg-base-300 h-1.5 rounded">
                <div className="w-4/5 bg-primary h-1.5 rounded"></div>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <div className="flex text-sm text-[#888] justify-between mb-1">
                <p>User Satisfaction and Trust</p>
                <p>90%</p>
              </div>
              <div className="w-full bg-base-300 h-1.5 rounded">
                <div className="w-11/12 bg-secondary h-1.5 rounded"></div>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <div className="flex text-sm text-[#888] justify-between mb-1">
                <p>Growth in Signal Accuracy</p>
                <p>50%</p>
              </div>
              <div className="w-full bg-base-300 h-1.5 rounded">
                <div className="w-1/2 bg-neutral h-1.5 rounded"></div>
              </div>
            </div>

            <Link href="#" className="btn btn-primary w-1/3 mt-8">Read More</Link>
          </div>
          <div className="flex-1 p-5">
            <figure>
              <Image className="w-full h-full" src="/images/about.png" width={400} height={400} alt="About Image"></Image>
            </figure>
          </div>
        </div>
      </div>
      {/* End About us section */}
    </main>
  );
}
