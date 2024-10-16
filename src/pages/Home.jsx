import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import SwiperCarousol from "../components/swiper";
import { FaArrowRight } from "react-icons/fa6";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
// import OurPolicy from '../components/OurPolicy'
// import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  const { ref: partneroneRef, inView: partneroneInView } = useInView({
    triggerOnce: false,
  });
  const { ref: partnertwoRef, inView: partnertwoInView } = useInView({
    triggerOnce: false,
  });
  const { ref: partnerthreeRef, inView: partnerthreeInView } = useInView({
    triggerOnce: false,
  });
  const { ref: welcomeRef, inView: welcomeInView } = useInView({
    triggerOnce: false,
  });
  const { ref: aboutLeftRef, inView: aboutLeftInView } = useInView({
    triggerOnce: false,
  });
  const { ref: aboutRightRef, inView: aboutRightInView } = useInView({
    triggerOnce: false,
  });
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-16">
      <div className="w-full grid lg:grid-cols-8 grid-cols-1 mt-8">
        <div
          ref={welcomeRef}
          className="lg:col-span-3 py-4 lg:px-7 order-2 lg:order-1 md:order-1"
        >
          <div className="w-full flex flex-col h-full justify-center gap-4">
            <h1 className="text-white font-bold text-3xl">Welcome</h1>
            <p
              className={clsx(
                "text-white py-4 transition-all duration-[2000ms]",
                {
                  "opacity-0": !welcomeInView,
                  "opacity-100": welcomeInView,
                }
              )}
            >
              Unleash your gaming potential with our top-tier selection of
              gaming PCs, custom builds, and accessories. Whether you're a pro
              gamer or just starting out, we've got the power, speed, and style
              to elevate your gaming experience.
            </p>
            <button
              onClick={() => navigate("/collection")}
              className={clsx(
                "p-2 rounded transition-all hover:bg-gray-100 duration-[1000ms] bg-green-700 w-[6rem] text-black",
                {
                  "translate-y-9 opacity-0": !welcomeInView,
                  "translate-y-0 opacity-100": welcomeInView,
                }
              )}
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 order-1  md:order-2 lg:order-2">
          <SwiperCarousol />
        </div>
      </div>
      <div className="w-full grid lg:grid-cols-8 md:grid-cols-8 grid-cols-1 mt-5">
        <div
          ref={aboutLeftRef}
          className={clsx(
            "lg:col-span-3 md:col-span-3  transition-all duration-[1000ms]",
            {
              "translate-x-0 opacity-100": aboutLeftInView,
              "translate-x-[-30%] opacity-0": !aboutLeftInView,
            }
          )}
        >
          <div className="w-full lg:h-full min-h-[30vh] md:h-full p-4 bg-gradient-to-br from-gray-600 to-purple-900 rounded flex items-center justify-center">
            <div className="flex flex-col lg:mb-4 lg:mr-4">
              <h1
                className={clsx(
                  "text-3xl text-white font-bold  transition-all duration-[2000ms]",
                  {
                    "opacity-100": aboutLeftInView,
                    "opacity-0": !aboutLeftInView,
                  }
                )}
              >
                Gaming Website
              </h1>
              <div className="flex flex-row items-center gap-3 text-gray-400">
                <VscWorkspaceTrusted />
                <p>Trusted Seller</p>
              </div>
            </div>
          </div>
        </div>
        <div ref={aboutRightRef} className="col-span-5 text-white">
          <div className="w-full h-full py-4 md:px-4 lg:px-4 flex flex-col gap-4">
            <h1
              className={clsx(
                "text-white font-bold text-3xl transition-all duration-1000",
                {
                  "opacity-100": aboutRightInView,
                  "opacity-0": !aboutRightInView,
                }
              )}
            >
              About Us
            </h1>
            <div className="flex flex-row gap-4 items-start ml-3">
              {/* <div><TiTick size={20} /></div>  */}
              <p
                className={clsx("py-4 transition-all duration-[1500ms]", {
                  "opacity-100": aboutRightInView,
                  "opacity-0": !aboutRightInView,
                })}
              >
                We're your ultimate destination for high-performance gaming PCs
                and cutting-edge hardware.Whether you're a competitive eSports
                player or an enthusiast looking to build the perfect gaming rig,
                we have the expertise, products, and passion to fuel your gaming
                journey.
              </p>
            </div>
            <div className="flex flex-row gap-4 lg:items-center md:items-center items-start ml-3">
              {/* <div className="">
                <TiTick size={20} />
              </div> */}
              <p
                className={clsx("py-4 transition-all duration-[2000ms]", {
                  "opacity-100": aboutRightInView,
                  "opacity-0": !aboutRightInView,
                })}
              >
                We’re committed to offering only the best, ensuring every
                product you purchase meets the highest standards of quality and
                performance.
              </p>
            </div>
            <div className="ml-3 text-green-700 text-lg flex flex-row items-center gap-3 ">
              <div
                onClick={() => navigate("/about")}
                className="hover:underline hover:cursor-pointer"
              >
                View More
              </div>{" "}
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 mt-5">
        <h1 className="text-white font-bold text-3xl">Our Partners</h1>
        <div className="w-full gap-x-4 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1">
          <div
            ref={partneroneRef}
            className={clsx(
              "w-full flex justify-center items-center border p-3 rounded transition-all duration-[2500ms]",
              {
                " border-white": partneroneInView,
                "border-black": !partneroneInView,
              }
            )}
          >
            <div className="w-full lg:w-[20rem] md:w-[15rem] relative flex flex-col gap-4">
              <div className="w-full h-auto lg:h-[15rem] md:h-[10rem]">
                <img
                  className={clsx(
                    "w-full h-full transition-all duration-1000 object-cover ",
                    {
                      "scale-100": partneroneInView,
                      "scale-75": !partneroneInView,
                    }
                  )}
                  src="/partner/navidia.jpg"
                  alt=""
                />
              </div>
              <p
                className={clsx(
                  "text-white text-sm py-3 transition-all duration-[2000ms]",
                  {
                    "opacity-100": partneroneInView,
                    "opacity-0": !partneroneInView,
                  }
                )}
              >
                Discover the possibility, power, and performance of AI and
                accelerated computing from the cloud to the edge across
                industries.
              </p>
              <div className="p-3 mt-3 mb-3 rounded bg-green-600 text-center text-lg font-semibold">
                Visit
              </div>
            </div>
          </div>
          <div
            ref={partnertwoRef}
            className={clsx(
              "w-full flex justify-center items-center border p-3 rounded transition-all duration-[2500ms]",
              {
                " border-white": partnertwoInView,
                "border-black": !partnertwoInView,
              }
            )}
          >
            <div className="w-full lg:w-[20rem] md:w-[15rem] relative flex flex-col gap-4">
              <div className="w-full h-auto lg:h-[15rem] md:h-[10rem]">
                <img
                  className={clsx(
                    "w-full h-full transition-all duration-1000 object-cover ",
                    {
                      "scale-100": partnertwoInView,
                      "scale-75": !partnertwoInView,
                    }
                  )}
                  src="/partner/razor.jpg"
                  alt=""
                />
              </div>
              <p
                className={clsx(
                  "text-white text-sm py-3 transition-all duration-[2000ms]",
                  {
                    "opacity-100": partnertwoInView,
                    "opacity-0": !partnertwoInView,
                  }
                )}
              >
                From cutting-edge gaming and creator laptops to high-end
                components for your dream PC build, Razer systems are
                meticulously crafted to provide the ultimate performance for
                work and play.
              </p>
              <div className="p-3 mt-3 mb-3 rounded bg-green-600 text-center text-lg font-semibold">
                Visit
              </div>
            </div>
          </div>
          <div
            ref={partnerthreeRef}
            className={clsx(
              "w-full flex justify-center items-center border p-3 rounded transition-all duration-[2500ms]",
              {
                " border-white": partneroneInView,
                "border-black": !partneroneInView,
              }
            )}
          >
            <div className="w-full lg:w-[20rem] md:w-[15rem] relative flex flex-col gap-4">
              <div className="w-full h-auto lg:h-[15rem] md:h-[10rem]">
                <img
                  className={clsx(
                    "w-full h-full transition-all duration-1000 object-cover ",
                    {
                      "scale-100": partnerthreeInView,
                      "scale-75": !partnerthreeInView,
                    }
                  )}
                  src="/partner/ROG.jpg"
                  alt=""
                />
              </div>
              <p
                className={clsx(
                  "text-white text-sm py-3 transition-all duration-[2000ms]",
                  {
                    "opacity-100": partnerthreeInView,
                    "opacity-0": !partnerthreeInView,
                  }
                )}
              >
                Technology never sleeps, nor should the action. For those keen
                on winning power, the Republic of Gamers awaits.
              </p>
              <div className="p-3 mt-3 mb-3 rounded bg-green-600 text-center text-lg font-semibold">
                Visit
              </div>
            </div>
          </div>
        </div>
      </div>
      <Hero />
      <LatestCollection />
      <BestSeller />
    </div>
  );
};

export default Home;
