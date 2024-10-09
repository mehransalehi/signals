import Navbar from "./components/navbar";
import Image from "next/image";
import Link from "next/link";

import { Alegreya } from "next/font/google";

import {
  RiMoneyDollarCircleFill,
  RiMoneyCnyCircleFill,
  RiMoneyEuroBoxFill,
  RiSignalTowerFill
} from "react-icons/ri";
import {
  FaUsers,
  FaMapMarkerAlt,
  FaUserCheck,
  FaProjectDiagram,
  FaUserCog,
  FaArrowRight,
  FaLocationArrow,
  FaEye,
  FaQuoteLeft,
  FaInstagram,
  FaPhone
} from "react-icons/fa";
import {
  AiOutlineFileText
} from 'react-icons/ai';
import {
  FiBell
} from 'react-icons/fi';
import {
  MdInsights,
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
  MdLocationOn
} from 'react-icons/md';
import {
  BsStarFill
} from 'react-icons/bs';
import {
  IoIosLink,
  IoLogoYoutube,
  IoMdMail
} from "react-icons/io";

import {
  FaLinkedinIn,
  FaXTwitter
} from 'react-icons/fa6'






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
            <h2 className={alegreya.className + " text-4xl text-neutral font-bold mb-6"}>Our Journey: Crafting Excellence in Crypto Insights</h2>
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
      {/* stat section */}
      <div className="flex flex-col bg-primary primary-section-background items-center">
        <div className="flex xl:w-[1280px] w-full py-10 justify-between">
          <div className="card p-6">
            <figure className="text-secondary text-7xl mb-3">
              <FaUsers />
            </figure>
            <div className="text-white text-center">
              <h3 className={alegreya.className + " font-bold text-2xl"}>Years of Experience</h3>
              <p className="text-sm my-2">Delivering Excellence for Over</p>
              <p className="text-4xl">10+</p>
            </div>
          </div>
          <div className="card p-6">
            <figure className="text-secondary text-7xl mb-3">
              <FaUserCheck />
            </figure>
            <div className="text-white text-center">
              <h3 className={alegreya.className + " font-bold text-2xl"}>Satisfied Customers</h3>
              <p className="text-sm my-2">Trusted by</p>
              <p className="text-4xl">500,000+</p>
            </div>
          </div>
          <div className="card p-6">
            <figure className="text-secondary text-7xl mb-3">
              <FaProjectDiagram />
            </figure>
            <div className="text-white text-center">
              <h3 className={alegreya.className + " font-bold text-2xl"}>Projects Completed</h3>
              <p className="text-sm my-2">Successfully Completed</p>
              <p className="text-4xl">3,200+</p>
            </div>
          </div>
          <div className="card p-6">
            <figure className="text-secondary text-7xl mb-3">
              <FaMapMarkerAlt />
            </figure>
            <div className="text-white text-center">
              <h3 className={alegreya.className + " font-bold text-2xl"}>Global Reach</h3>
              <p className="text-sm my-2">Serving Clients in</p>
              <p className="text-4xl">25+</p>
            </div>
          </div>
        </div>
      </div>
      {/* end stat section */}

      {/* services section */}
      <div className="flex flex-col items-center py-32 bg-white">
        <p className="text-sm text-secondary mb-4">Our Services</p>
        <h2 className={alegreya.className + " text-4xl text-neutral font-bold mb-6"}>What Solutions We Provide</h2>
        <div className="flex xl:w-[1280px] w-full py-10 justify-between flex-wrap items-stretch">
          <div className="p-5 w-1/3">
            <div className="group card shadow-md bg-base-100 text-center items-center py-10 h-full
                            hover:bg-primary hover:text-white transition-all duration-500
                            hover:h-[110%] hover:translate-y-[-10%]
                            overflow-hidden">
              <figure className="bg-[url('/images/blob-primary.png')] group-hover:bg-[url('/images/blob-secondary.png')] w-[100px] h-[80px] bg-contain 
              transition-all duration-500 bg-center bg-no-repeat text-white group-hover:text-black text-4xl mb-6">
                <RiSignalTowerFill />
              </figure>
              <div className="card-body py-0 mb-3">
                <h3 className="font-bold text-xl">Signal Aggregation</h3>
                <p className="text-sm text-[#777] group-hover:text-white transition-all duration-500">Get the best trading signals from multiple trusted Telegram channels, all in one convenient platform.</p>
              </div>
              <Link href="#" className="absolute bottom-[-40px] rounded-t-full bg-white h-[40px] text-primary flex justify-center items-center px-2 
              group-hover:bottom-0 transition-all duration-500 hover:bg-secondary">
                <FaArrowRight />
              </Link>
            </div>
          </div>
          <div className="p-5 w-1/3">
            <div className="group card shadow-md bg-base-100 text-center items-center py-10 h-full
                            hover:bg-primary hover:text-white transition-all duration-500
                            hover:h-[110%] hover:translate-y-[-10%]
                            overflow-hidden">
              <figure className="bg-[url('/images/blob-primary.png')] group-hover:bg-[url('/images/blob-secondary.png')] w-[100px] h-[80px] bg-contain 
              transition-all duration-500 bg-center bg-no-repeat text-white group-hover:text-black text-4xl mb-6">
                <AiOutlineFileText />
              </figure>
              <div className="card-body py-0 mb-3">
                <h3 className="font-bold text-xl">Standardized Format</h3>
                <p className="text-sm text-[#777] group-hover:text-white transition-all duration-500">GWe convert various signal formats into a clear and consistent layout, making them easy to follow and act on.</p>
              </div>
              <Link href="#" className="absolute bottom-[-40px] rounded-t-full bg-white h-[40px] text-primary flex justify-center items-center px-2 
              group-hover:bottom-0 transition-all duration-500 hover:bg-secondary">
                <FaArrowRight />
              </Link>
            </div>
          </div>
          <div className="p-5 w-1/3">
            <div className="group card shadow-md bg-base-100 text-center items-center py-10 h-full
                            hover:bg-primary hover:text-white transition-all duration-500
                            hover:h-[110%] hover:translate-y-[-10%]
                            overflow-hidden">
              <figure className="bg-[url('/images/blob-primary.png')] group-hover:bg-[url('/images/blob-secondary.png')] w-[100px] h-[80px] bg-contain 
              transition-all duration-500 bg-center bg-no-repeat text-white group-hover:text-black text-4xl mb-6">
                <FiBell />
              </figure>
              <div className="card-body py-0 mb-3">
                <h3 className="font-bold text-xl">Real-Time Alerts</h3>
                <p className="text-sm text-[#777] group-hover:text-white transition-all duration-500">Receive instant notifications for every new signal, ensuring you never miss an opportunity to trade at the right time.</p>
              </div>
              <Link href="#" className="absolute bottom-[-40px] rounded-t-full bg-white h-[40px] text-primary flex justify-center items-center px-2 
              group-hover:bottom-0 transition-all duration-500 hover:bg-secondary">
                <FaArrowRight />
              </Link>
            </div>
          </div>
          <div className="p-5 w-1/3">
            <div className="group card shadow-md bg-base-100 text-center items-center py-10 h-full
                            hover:bg-primary hover:text-white transition-all duration-500
                            hover:h-[110%] hover:translate-y-[-10%]
                            overflow-hidden">
              <figure className="bg-[url('/images/blob-primary.png')] group-hover:bg-[url('/images/blob-secondary.png')] w-[100px] h-[80px] bg-contain 
              transition-all duration-500 bg-center bg-no-repeat text-white group-hover:text-black text-4xl mb-6">
                <MdInsights />
              </figure>
              <div className="card-body py-0 mb-3">
                <h3 className="font-bold text-xl">Signal Analytics</h3>
                <p className="text-sm text-[#777] group-hover:text-white transition-all duration-500">Access detailed performance data and insights to evaluate each signal’s success rate and improve your trading decisions.</p>
              </div>
              <Link href="#" className="absolute bottom-[-40px] rounded-t-full bg-white h-[40px] text-primary flex justify-center items-center px-2 
              group-hover:bottom-0 transition-all duration-500 hover:bg-secondary">
                <FaArrowRight />
              </Link>
            </div>
          </div>
          <div className="p-5 w-1/3">
            <div className="group card shadow-md bg-base-100 text-center items-center py-10 h-full
                            hover:bg-primary hover:text-white transition-all duration-500
                            hover:h-[110%] hover:translate-y-[-10%]
                            overflow-hidden">
              <figure className="bg-[url('/images/blob-primary.png')] group-hover:bg-[url('/images/blob-secondary.png')] w-[100px] h-[80px] bg-contain 
              transition-all duration-500 bg-center bg-no-repeat text-white group-hover:text-black text-4xl mb-6">
                <FaUserCog />
              </figure>
              <div className="card-body py-0 mb-3">
                <h3 className="font-bold text-xl">Custom Alerts</h3>
                <p className="text-sm text-[#777] group-hover:text-white transition-all duration-500">Tailor your signal notifications to match your trading interests, including specific asset types, risk levels, and more.</p>
              </div>
              <Link href="#" className="absolute bottom-[-40px] rounded-t-full bg-white h-[40px] text-primary flex justify-center items-center px-2 
              group-hover:bottom-0 transition-all duration-500 hover:bg-secondary">
                <FaArrowRight />
              </Link>
            </div>
          </div>
          <div className="p-5 w-1/3">
            <div className="group card shadow-md bg-base-100 text-center items-center py-10 h-full
                            hover:bg-primary hover:text-white transition-all duration-500
                            hover:h-[110%] hover:translate-y-[-10%]
                            overflow-hidden">
              <figure className="bg-[url('/images/blob-primary.png')] group-hover:bg-[url('/images/blob-secondary.png')] w-[100px] h-[80px] bg-contain 
              transition-all duration-500 bg-center bg-no-repeat text-white group-hover:text-black text-4xl mb-6">
                <BsStarFill />
              </figure>
              <div className="card-body py-0 mb-3">
                <h3 className="font-bold text-xl">Premium Signals</h3>
                <p className="text-sm text-[#777] group-hover:text-white transition-all duration-500">Unlock access to high-performing signals from elite traders and top-rated Telegram channels for better trading outcomes.</p>
              </div>
              <Link href="#" className="absolute bottom-[-40px] rounded-t-full bg-white h-[40px] text-primary flex justify-center items-center px-2 
              group-hover:bottom-0 transition-all duration-500 hover:bg-secondary">
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* end services section */}


      {/* News */}
      <div className="flex flex-col bg-primary primary-section-background items-center py-32 text-white">
        <p className="text-sm mb-4">Newsletter</p>
        <h2 className={alegreya.className + " text-4xl text-neutral font-bold mb-6 text-white"}>Stay Always In Touch</h2>
        <div className="flex flex-col text-center xl:w-[1280px] w-full items-center">
          <p className="w-1/2">Subscribe to our newsletter and get the latest crypto and forex market updates, trading insights, and exclusive offers delivered straight to your inbox. Be the first to know about important trends and signals!</p>
          <label className="input input-bordered flex items-center gap-2 w-1/2 text-primary mt-5">
            <input type="text" className="grow" placeholder="Enter Your Email" />
            <FaLocationArrow className="text-primary text-2xl" />
          </label>
        </div>
      </div>
      {/* end News */}

      {/* blog Seciton */}
      <div className="flex flex-col items-center py-32 bg-white">
        <p className="text-sm text-secondary mb-4">Blog</p>
        <h2 className={alegreya.className + " text-4xl text-neutral font-bold mb-6"}>Recent Blog Posts</h2>
        <div className="flex xl:w-[1280px] w-full py-10 justify-between flex-wrap items-stretch">
          <div className="p-5 w-1/3">
            <div className="group card shadow-md bg-base-100 items-center h-full
                            ">
              <figure className="w-full overflow-hidden relative">
                <Image className="w-full group-hover:scale-110 transition-all duration-500" src="/images/portfolio-1.jpg" width={400} height={100} alt="blog post"></Image>
                <div className="absolute w-full h-full bg-primary bg-opacity-75 flex justify-center items-center
                group-hover:opacity-100 opacity-0 transition-all duration-500">
                  <Link href="#" className="p-3 text-white text-xl border rounded-full 
                  hover:bg-white hover:text-primary hover:border-primary transition-all duration-500">
                    <FaEye />
                  </Link>
                  <Link href="#" className="ms-2 p-3 text-white text-xl border rounded-full 
                  hover:bg-white hover:text-primary hover:border-primary transition-all duration-500">
                    <IoIosLink />
                  </Link>
                </div>
              </figure>
              <div className="card-body">
                <p className="card-title text-primary text-sm">Crypto Insights</p>
                <h3 className="text-xl">Top 5 Crypto Signals to Watch in 2024</h3>
              </div>
            </div>
          </div>
          <div className="p-5 w-1/3">
            <div className="group card shadow-md bg-base-100 items-center h-full
                            ">
              <figure className="w-full overflow-hidden relative">
                <Image className="w-full group-hover:scale-110 transition-all duration-500" src="/images/portfolio-2.jpg" width={400} height={100} alt="blog post"></Image>
                <div className="absolute w-full h-full bg-primary bg-opacity-75 flex justify-center items-center
                group-hover:opacity-100 opacity-0 transition-all duration-500">
                  <Link href="#" className="p-3 text-white text-xl border rounded-full 
                  hover:bg-white hover:text-primary hover:border-primary transition-all duration-500">
                    <FaEye />
                  </Link>
                  <Link href="#" className="ms-2 p-3 text-white text-xl border rounded-full 
                  hover:bg-white hover:text-primary hover:border-primary transition-all duration-500">
                    <IoIosLink />
                  </Link>
                </div>
              </figure>
              <div className="card-body">
                <p className="card-title text-primary text-sm">Trading Strategies</p>
                <h3 className="text-xl">The Power of Combining Crypto and Forex Trading</h3>
              </div>
            </div>
          </div>
          <div className="p-5 w-1/3">
            <div className="group card shadow-md bg-base-100 items-center h-full
                            ">
              <figure className="w-full overflow-hidden relative">
                <Image className="w-full group-hover:scale-110 transition-all duration-500" src="/images/portfolio-3.jpg" width={400} height={100} alt="blog post"></Image>
                <div className="absolute w-full h-full bg-primary bg-opacity-75 flex justify-center items-center
                group-hover:opacity-100 opacity-0 transition-all duration-500">
                  <Link href="#" className="p-3 text-white text-xl border rounded-full 
                  hover:bg-white hover:text-primary hover:border-primary transition-all duration-500">
                    <FaEye />
                  </Link>
                  <Link href="#" className="ms-2 p-3 text-white text-xl border rounded-full 
                  hover:bg-white hover:text-primary hover:border-primary transition-all duration-500">
                    <IoIosLink />
                  </Link>
                </div>
              </figure>
              <div className="card-body">
                <p className="card-title text-primary text-sm">Avoiding Pitfalls</p>
                <h3 className="text-xl">How to Analyze Forex Signals Like a Pro</h3>
              </div>
            </div>
          </div>
          <div className="p-5 w-1/3">
            <div className="group card shadow-md bg-base-100 items-center h-full
                            ">
              <figure className="w-full overflow-hidden relative">
                <Image className="w-full group-hover:scale-110 transition-all duration-500" src="/images/portfolio-4.jpg" width={400} height={100} alt="blog post"></Image>
                <div className="absolute w-full h-full bg-primary bg-opacity-75 flex justify-center items-center
                group-hover:opacity-100 opacity-0 transition-all duration-500">
                  <Link href="#" className="p-3 text-white text-xl border rounded-full 
                  hover:bg-white hover:text-primary hover:border-primary transition-all duration-500">
                    <FaEye />
                  </Link>
                  <Link href="#" className="ms-2 p-3 text-white text-xl border rounded-full 
                  hover:bg-white hover:text-primary hover:border-primary transition-all duration-500">
                    <IoIosLink />
                  </Link>
                </div>
              </figure>
              <div className="card-body">
                <p className="card-title text-primary text-sm">Crypto Insights</p>
                <h3 className="text-xl">Real-Time Signals: How to Take Action at the Right Moment</h3>
              </div>
            </div>
          </div>
          <div className="p-5 w-1/3">
            <div className="group card shadow-md bg-base-100 items-center h-full
                            ">
              <figure className="w-full overflow-hidden relative">
                <Image className="w-full group-hover:scale-110 transition-all duration-500" src="/images/portfolio-5.jpg" width={400} height={100} alt="blog post"></Image>
                <div className="absolute w-full h-full bg-primary bg-opacity-75 flex justify-center items-center
                group-hover:opacity-100 opacity-0 transition-all duration-500">
                  <Link href="#" className="p-3 text-white text-xl border rounded-full 
                  hover:bg-white hover:text-primary hover:border-primary transition-all duration-500">
                    <FaEye />
                  </Link>
                  <Link href="#" className="ms-2 p-3 text-white text-xl border rounded-full 
                  hover:bg-white hover:text-primary hover:border-primary transition-all duration-500">
                    <IoIosLink />
                  </Link>
                </div>
              </figure>
              <div className="card-body">
                <p className="card-title text-primary text-sm">Avoiding Pitfalls</p>
                <h3 className="text-xl">Avoiding Common Pitfalls in Signal-Based Trading</h3>
              </div>
            </div>
          </div>
          <div className="p-5 w-1/3">
            <div className="group card shadow-md bg-base-100 items-center h-full
                            ">
              <figure className="w-full overflow-hidden relative">
                <Image className="w-full group-hover:scale-110 transition-all duration-500" src="/images/portfolio-6.jpg" width={400} height={100} alt="blog post"></Image>
                <div className="absolute w-full h-full bg-primary bg-opacity-75 flex justify-center items-center
                group-hover:opacity-100 opacity-0 transition-all duration-500">
                  <Link href="#" className="p-3 text-white text-xl border rounded-full 
                  hover:bg-white hover:text-primary hover:border-primary transition-all duration-500">
                    <FaEye />
                  </Link>
                  <Link href="#" className="ms-2 p-3 text-white text-xl border rounded-full 
                  hover:bg-white hover:text-primary hover:border-primary transition-all duration-500">
                    <IoIosLink />
                  </Link>
                </div>
              </figure>
              <div className="card-body">
                <p className="card-title text-primary text-sm">Crypto Insights</p>
                <h3 className="text-xl">Premium vs. Free Signals: Is It Worth Paying for?</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end blog section */}


      {/* testimonial section */}
      <div className="flex flex-col items-center py-32 bg-white">
        <p className="text-sm text-secondary mb-4">Testimonial</p>
        <h2 className={alegreya.className + " text-4xl text-neutral font-bold mb-6"}>What Say Our Clients!</h2>
        <div className="flex xl:w-[1280px] w-full py-10 justify-between flex-wrap items-stretch">
          <div className="p-4 w-1/2">
            <div className="shadow-lg rounded-lg bg-base-100 p-5">
              <p className="flex text-[#777]">
                <FaQuoteLeft className="text-primary text-8xl mt-[-50px] me-[-58px]" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I've been using these crypto signals for six months, and my trading results have improved significantly. Highly recommend!
              </p>
              <div className="flex mt-3 items-center">
                <Image className="rounded-full shadow-md" src="/images/testimonial-1.jpg" width={48} height={48} alt="Client image" />
                <div className="flex flex-col ms-2">
                  <p>Client Name</p>
                  <p className="text-sm text-[#777]">Profiession</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 w-1/2">
            <div className="shadow-lg rounded-lg bg-base-100 p-5">
              <p className="flex text-[#777]">
                <FaQuoteLeft className="text-primary text-8xl mt-[-50px] me-[-58px]" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As a beginner in forex trading, the standardized signals are clear and easy to follow. The real-time alerts are a game changer!
              </p>
              <div className="flex mt-3 items-center">
                <Image className="rounded-full shadow-md" src="/images/testimonial-2.jpg" width={48} height={48} alt="Client image" />
                <div className="flex flex-col ms-2">
                  <p>Client Name</p>
                  <p className="text-sm text-[#777]">Profiession</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <button className="btn rounded-full text-2xl hover:bg-primary hover:text-white me-3"><MdOutlineArrowBackIosNew /></button>
          <button className="btn rounded-full text-2xl hover:bg-primary hover:text-white"><MdOutlineArrowForwardIos /></button>
        </div>
      </div>
      {/* End testimonial section */}

      {/* Team section */}
      <div className="flex flex-col items-center py-32 bg-white">
        <p className="text-sm text-secondary mb-4">Out Team</p>
        <h2 className={alegreya.className + " text-4xl text-neutral font-bold mb-6"}>Our Team Members</h2>
        <div className="flex xl:w-[1280px] w-full py-10 justify-between flex-wrap items-stretch">
          <div className="w-1/3 p-3">
            <div className="card bg-base-100 shadow-md">
              <figure className="p-4">
                <Image className="rounded-full" src="/images/team-1.jpg" width={400} height={400} alt="Team Member"></Image>
              </figure>
              <div className="py-3 text-center">
                <h3 className="text-2xl font-bold">Liam Chen</h3>
                <p className="text-lg text-[#777]">Lead Signal Analyst</p>
              </div>
              <div className="divider"></div>
              <div className="flex justify-center mb-6">
                <Link className="rounded-full bg-white text-primary p-3 text-xl me-3
              hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary transition-all duration-500" href="#"><FaInstagram /></Link>
                <Link className="rounded-full bg-white text-primary p-3 text-xl me-3
              hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary transition-all duration-500" href="#"><IoLogoYoutube /></Link>
                <Link className="rounded-full bg-white text-primary p-3 text-xl me-3
              hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary transition-all duration-500" href="#"><FaLinkedinIn /></Link>
                <Link className="rounded-full bg-white text-primary p-3 text-xl me-3
              hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary transition-all duration-500" href="#"><FaXTwitter /></Link>
              </div>
            </div>
          </div>
          <div className="w-1/3 p-3">
            <div className="card bg-base-100 shadow-md">
              <figure className="p-4">
                <Image className="rounded-full" src="/images/team-2.jpg" width={400} height={400} alt="Team Member"></Image>
              </figure>
              <div className="py-3 text-center">
                <h3 className="text-2xl font-bold">Sophia Martinez</h3>
                <p className="text-lg text-[#777]">Chief Trading Strategist</p>
              </div>
              <div className="divider"></div>
              <div className="flex justify-center mb-6">
                <Link className="rounded-full bg-white text-primary p-3 text-xl me-3
              hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary transition-all duration-500" href="#"><FaInstagram /></Link>
                <Link className="rounded-full bg-white text-primary p-3 text-xl me-3
              hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary transition-all duration-500" href="#"><IoLogoYoutube /></Link>
                <Link className="rounded-full bg-white text-primary p-3 text-xl me-3
              hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary transition-all duration-500" href="#"><FaLinkedinIn /></Link>
                <Link className="rounded-full bg-white text-primary p-3 text-xl me-3
              hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary transition-all duration-500" href="#"><FaXTwitter /></Link>
              </div>
            </div>
          </div>
          <div className="w-1/3 p-3">
            <div className="card bg-base-100 shadow-md">
              <figure className="p-4">
                <Image className="rounded-full" src="/images/team-3.jpg" width={400} height={400} alt="Team Member"></Image>
              </figure>
              <div className="py-3 text-center">
                <h3 className="text-2xl font-bold">Olivia Patel</h3>
                <p className="text-lg text-[#777]">Customer Success Manager</p>
              </div>
              <div className="divider"></div>
              <div className="flex justify-center mb-6">
                <Link className="rounded-full bg-white text-primary p-3 text-xl me-3
              hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary transition-all duration-500" href="#"><FaInstagram /></Link>
                <Link className="rounded-full bg-white text-primary p-3 text-xl me-3
              hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary transition-all duration-500" href="#"><IoLogoYoutube /></Link>
                <Link className="rounded-full bg-white text-primary p-3 text-xl me-3
              hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary transition-all duration-500" href="#"><FaLinkedinIn /></Link>
                <Link className="rounded-full bg-white text-primary p-3 text-xl me-3
              hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary transition-all duration-500" href="#"><FaXTwitter /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Team section */}

      {/* footer */}
      <footer className="footer-section flex flex-col items-center pt-[150px] bg-primary">
        <div className="flex xl:w-[1280px] w-full py-10 justify-between flex-wrap items-stretch mt-6 border-b">
          <div className="p-2 w-1/4">
            <div className="flex flex-col text-white">
              <p className="font-bold text-2xl mb-3">Address</p>
              <ul>
                <li className="flex items-center mb-2"><MdLocationOn className="text-xl me-3" />123 Street, New York, USA</li>
                <li className="flex items-center mb-2"><FaPhone className="text-xl me-3" />+012 345 67890</li>
                <li className="flex items-center mb-2"><IoMdMail className="text-xl me-3" />info@example.com</li>
              </ul>
              <div className="flex justify-center mt-6">
                <Link className="rounded-full bg-primary border-white border text-white p-2 text-sm me-3
              hover:bg-white hover:text-primary hover:shadow-sm hover:shadow-white transition-all duration-500" href="#"><FaInstagram /></Link>
                <Link className="rounded-full bg-primary border-white border text-white p-2 text-sm me-3
              hover:bg-white hover:text-primary hover:shadow-sm hover:shadow-white transition-all duration-500" href="#"><IoLogoYoutube /></Link>
                <Link className="rounded-full bg-primary border-white border text-white p-2 text-sm me-3
              hover:bg-white hover:text-primary hover:shadow-sm hover:shadow-white transition-all duration-500" href="#"><FaLinkedinIn /></Link>
                <Link className="rounded-full bg-primary border-white border text-white p-2 text-sm me-3
              hover:bg-white hover:text-primary hover:shadow-sm hover:shadow-white transition-all duration-500" href="#"><FaXTwitter /></Link>
              </div>
            </div>
          </div>
          <div className="p-2 w-1/4">
            <div className="flex flex-col text-white">
              <p className="font-bold text-2xl mb-3">Quick Links</p>
              <ul>
                <li className="mb-2">
                  <Link className="flex items-center hover:text-secondary hover:tracking-wider transition-all duration-500" href="#">
                    <MdOutlineArrowForwardIos className="text-sm me-2" />About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="flex items-center hover:text-secondary hover:tracking-wider transition-all duration-500" href="#">
                    <MdOutlineArrowForwardIos className="text-sm me-2" />Contact Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="flex items-center hover:text-secondary hover:tracking-wider transition-all duration-500" href="#">
                    <MdOutlineArrowForwardIos className="text-sm me-2" />Privacy Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="flex items-center hover:text-secondary hover:tracking-wider transition-all duration-500" href="#">
                    <MdOutlineArrowForwardIos className="text-sm me-2" />Blog
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="flex items-center hover:text-secondary hover:tracking-wider transition-all duration-500" href="#">
                    <MdOutlineArrowForwardIos className="text-sm me-2" />Terms And Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-2 w-1/4">
            <div className="flex flex-col text-white">
              <p className="font-bold text-2xl mb-3">Blog Posts</p>
              <ul className="flex flex-wrap pe-6">
                <li className="flex items-center mb-2 px-1 w-1/3">
                  <Link className="hover:translate-y-[-5px] transition-all" href="#"><Image className="w-full" src="/images/portfolio-1.jpg" width={100} height={100} alt="Blog Post"></Image></Link>
                </li>
                <li className="flex items-center mb-2 px-1 w-1/3">
                  <Link className="hover:translate-y-[-5px] transition-all" href="#"><Image className="w-full" src="/images/portfolio-2.jpg" width={100} height={100} alt="Blog Post"></Image></Link>
                </li>
                <li className="flex items-center mb-2 px-1 w-1/3">
                  <Link className="hover:translate-y-[-5px] transition-all" href="#"><Image className="w-full" src="/images/portfolio-3.jpg" width={100} height={100} alt="Blog Post"></Image></Link>
                </li>
                <li className="flex items-center mb-2 px-1 w-1/3">
                  <Link className="hover:translate-y-[-5px] transition-all" href="#"><Image className="w-full" src="/images/portfolio-4.jpg" width={100} height={100} alt="Blog Post"></Image></Link>
                </li>
                <li className="flex items-center mb-2 px-1 w-1/3">
                  <Link className="hover:translate-y-[-5px] transition-all" href="#"><Image className="w-full" src="/images/portfolio-5.jpg" width={100} height={100} alt="Blog Post"></Image></Link>
                </li>
                <li className="flex items-center mb-2 px-1 w-1/3">
                  <Link className="hover:translate-y-[-5px] transition-all" href="#"><Image className="w-full" src="/images/portfolio-6.jpg" width={100} height={100} alt="Blog Post"></Image></Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-2 w-1/4">
            <div className="flex flex-col text-white">
              <p className="font-bold text-2xl mb-3">Newsletter</p>
              <p>Subscribe to our newsletter and get the latest crypto and forex market updates, trading insights, and exclusive offers delivered straight to your inbox</p>
              <label className="input input-bordered flex items-center gap-2 text-primary mt-5">
                <input type="text" className="grow" placeholder="Enter Your Email" />
                <FaLocationArrow className="text-primary text-2xl" />
              </label>
            </div>
          </div>
        </div>
        <div className="flex xl:w-[1280px] w-full py-5 justify-between flex-wrap items-stretch text-white">
          <p className="flex-1 text-sm">
            © <Link className="hover:text-secondary underline" href="#">SIGNALS</Link>, All Right Reserved. Designed By <Link className="hover:text-secondary underline" href="https://webiox.net">WEBIOX</Link>
          </p>
          <ul className="flex text-sm">
            <li className="flex items-center px-1">
              <Link className="hover:text-secondary" href="#">Home</Link>
            </li>
            <li className="flex items-center px-1">
              <Link className="hover:text-secondary" href="#">Coockies</Link>
            </li>
            <li className="flex items-center px-1">
              <Link className="hover:text-secondary" href="#">Help</Link>
            </li>
            <li className="flex items-center px-1">
              <Link className="hover:text-secondary" href="#">FAQs</Link>
            </li>
          </ul>
        </div>
      </footer>
      {/* End footer */}
    </main>
  );
}
