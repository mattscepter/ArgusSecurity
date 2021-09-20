import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../../argus website/SVG/Logowith shadow.svg";
import Scroll from "./../../argus website/SVG/Scroll up.svg";
import gsap from "gsap";

const Stickynav = () => {
  const [open, setOpen] = useState(false);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 130 ||
      document.documentElement.scrollTop > 130
    ) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="fixed top-0 w-full z-50">
        <div
          className={
            open
              ? "transition-all opacity-100 duration-700"
              : "transition-all opacity-0 duration-500"
          }
        >
          <div
            className={
              open
                ? "block"
                : "hidden"
            }
          >
            <div className="bg-red-1 w-full fixed top-0 z-50">
              <div className="hidden lg:block w-full px-4 sm:px-8 lg:px-12 2xl:px-0 mx-auto max-w-1366 text-lg bg-red-1 font-for-para shadow-lg z-50 bg-no-repeat bg-header-bg bg-center bg-cover bg-blend-multiply">
                <Link to="/">
                  <img src={Logo} alt="" className="w-24 fixed top-1 left-2" />
                </Link>

                <nav class="flex flex-wrap items-center text-base font-for-para font-bold">
                  <Link
                    to="/about"
                    className="w-1/5 text-white py-4 text-center bg-hover bg-opacity-20 hover:bg-hover"
                  >
                    ABOUT
                  </Link>

                  <Link
                    to="/services"
                    className="w-1/5 text-white py-4 text-center bg-hover bg-opacity-20 hover:bg-hover"
                  >
                    SERVICES
                  </Link>

                  <Link
                    to="/jobs"
                    className="w-1/5 text-white py-4 text-center bg-hover bg-opacity-20 hover:bg-hover"
                  >
                    JOBS
                  </Link>

                  <Link
                    to="/courses"
                    className="w-1/5 text-white py-4 text-center bg-hover bg-opacity-20 hover:bg-hover"
                  >
                    COURSE
                  </Link>

                  <Link
                    to="/contact"
                    className="w-1/5 text-white py-4 text-center bg-hover bg-opacity-20 hover:bg-hover"
                  >
                    CONTACT
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-12 fixed bottom-4 right-4 z-50">
        <div
          className={
            open
              ? "transition opacity-100 duration-500 transform translate-y-0"
              : "transition opacity-0 duration-500 transform -translate-y-full"
          }
        >
          <div
            className={
              open
                ? "block"
                : "hidden"
            }
          >
            <button onClick={scrollToTop}>
              <img src={Scroll} alt="" className="w-12 shadow-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stickynav;
