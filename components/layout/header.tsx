import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "../util/container";
import { useTheme } from ".";
import { Icon } from "../util/icon";
import { tinaField } from "tinacms/dist/react";
import { GlobalHeader } from "../../tina/__generated__/types";
import { Actions } from "../util/actions";
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Import the 3-bar icon from react-icons library
import Image from "next/image";


export const Header = ({ data }: { data: GlobalHeader }) => {
  const router = useRouter();
  const theme = useTheme();
  const datas = {
    nav: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Services",
        href: "/services",
        subMenu: [
          {
            label: "Service 1",
            href: "services/service-1",
          },
          {
            label: "Service 2",
            href: "services/service-2",
          },
        ],
      },
      // Add more main menu items here
    ],
  };
  const [activeSubMenuIndex, setActiveSubMenuIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveSubMenuIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveSubMenuIndex(null);
  };
  const headerColor = {
    default:
      "text-black dark:text-white from-gray-50 to-white dark:from-gray-800 dark:to-gray-900",
    // primary: {
    //   blue: "text-white from-blue-300 to-blue-500",
    //   teal: "text-white from-teal-400 to-teal-500",
    //   green: "text-white from-green-400 to-green-500",
    //   red: "text-white from-red-400 to-red-500",
    //   pink: "text-white from-pink-400 to-pink-500",
    //   purple: "text-white from-purple-400 to-purple-500",
    //   orange: "text-white from-orange-400 to-orange-500",
    //   yellow: "text-white from-yellow-400 to-yellow-500",
    // },
    primary: "#001E47"
  };

  const headerColorCss =
    data.color === "primary"
      ? headerColor.primary
      : headerColor.default;

  const activeItemClasses = {
    blue: "text-white dark:text-white-300 font-medium dark:border-white-700",
    teal: "border-b-3 border-teal-200 text-teal-700 dark:text-teal-300 font-medium dark:border-teal-700",
    green:
      "border-b-3 border-green-200 text-green-700 dark:text-green-300 font-medium dark:border-green-700",
    red: "border-b-3 border-red-300 text-red-700 dark:text-green-300 font-medium dark:border-red-700",
    pink: "border-b-3 border-pink-200 text-pink-700 dark:text-pink-300 font-medium dark:border-pink-700",
    purple:
      "border-b-3 border-purple-200 text-purple-700 dark:text-purple-300 font-medium dark:border-purple-700",
    orange:
      "border-b-3 border-orange-200 text-orange-700 dark:text-orange-300 font-medium dark:border-orange-700",
    yellow:
      "border-b-3 border-yellow-300 text-yellow-700 dark:text-yellow-300 font-medium dark:border-yellow-600",
  };

  const activeBackgroundClasses = {
    blue: "text-blue-500",
    teal: "text-teal-500",
    green: "text-green-500",
    red: "text-red-500",
    pink: "text-pink-500",
    purple: "text-purple-500",
    orange: "text-orange-500",
    yellow: "text-yellow-500",
  };
  const [isClient, setIsClient] = React.useState(false);

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="bg-themeBlue h-auto border border-solid">
        <Container size="medium" width="large">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Image className="hidden md:block" src="https://www.ebesucher.com/images/cookie.svg" alt="Icon" width={110} height={110} />
            <div className="text-white flex flex-col">
              <span>
                This website uses cookies, which are necessary for the technical operation of the website
                and which are always set. Other cookies, which are used to personalize content and advertisement
                and to analyze the access to our website, are only set with your consent. We also share information
                about your use of our website with our social media, advertising and analytics partners. Our privacy policy.
              </span><br />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <div className="text-white text-opacity-90  text-xs md:text-base font-normal leading-normal gap-2">
                  <input type="checkbox" checked disabled className="w-4 h-4 p-2" />
                  <span>Required</span>
                </div>
                <div className="text-white text-opacity-90  text-xs md:text-base font-normal leading-normal gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Statistics</span>
                </div>
                <div className="text-white text-opacity-90  text-xs md:text-base font-normal leading-normal gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Marketing</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-white text-opacity-90  text-xs md:text-base font-normal leading-normal">
                <button
                  style={{ borderRadius: "30px" }}
                  data-tina-field={tinaField(data, "Button")}
                  className={`relative bg-[#344b5b] text-[#cecece] flex items-center px-4 py-1 text-xs transition duration-150 ease-out transform focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 whitespace-nowrap 
            `}
                >
                  Accept selected cookies
                </button>
              </div>
              <div className="text-white text-opacity-90  text-xs md:text-base font-normal leading-normal">
                <button
                  style={{ borderRadius: "30px" }}
                  data-tina-field={tinaField(data, "Button")}
                  className={`relative w-full text-center bg-green-700 text-white flex items-center px-8 py-1 text-xs transition duration-150 ease-out transform focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 whitespace-nowrap 
            `}
                >
                  Accept all cookies
                </button>
              </div>
            </div>
          </div>

        </Container>
      </div>
      <div
        className={`  bg-themeBlue`}
      >
        <Container size="custom" className=" py-4 sm:py-0 z-10 max-w-8xl">
          <div className="flex items-center justify-between gap-x-6 sm:my-2 ">
            {/* Logo  */}
            <Link
              href="/"
              className="flex gap-1 items-center whitespace-nowrap tracking-[.002em]"
            >
              <img
                className=""
                src={data.LogoImage}
                alt="logo"
                aria-hidden="true"
              />
            </Link>

            {/* Nav Links */}
            <ul className="gap-2 md:gap-6 tracking-[.002em] -mx-4 hidden sm:flex">
              {data.nav &&
                data.nav.map((mainMenuItem, i) => {
                  const hasSubMenu = mainMenuItem.subs && mainMenuItem.subs.length > 0;
                  return (
                    <li
                      key={`${mainMenuItem.label}-${i}`}
                      className={`${activeItemClasses["blue"]} relative`}
                      onMouseEnter={() => handleMouseEnter(i)}
                      onMouseLeave={() => handleMouseLeave()}
                    >
                      <a
                        data-tina-field={tinaField(mainMenuItem, "label")}
                        href={`/${mainMenuItem.href}`}
                        className={`select-none text-xs md:text-sm py-3 px-2 
                  inline-block tracking-wide transition duration-150 ease-out 
                  hover:opacity-100  md:py-6 md:px-4`}
                      >
                        {mainMenuItem.label}
                      </a>

                      {/* Submenu */}
                      {hasSubMenu && activeSubMenuIndex === i && (

                        <ul
                          className="absolute left-0 bg-white border border-gray-50 rounded-lg shadow-lg z-[999]"
                          onMouseEnter={() => handleMouseEnter(i)} // Keep submenu open when hovering over it
                          onMouseLeave={() => handleMouseLeave()} // Close submenu when mouse leaves
                        >
                          {mainMenuItem.subs.map((subMenuItem, j) => (
                            <li
                              key={j}
                              className="px-4 py-2 text-sm hover:bg-gray-100 text-black"
                            >
                              <Link href={subMenuItem.href} className="w-[186px] h-[38px] rounded-sm flex-col justify-start items-start inline-flex">
                                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                                  <div className="text-black text-opacity-90 text-sm font-normal leading-snug">{subMenuItem.label}</div>
                                </div>
                              </Link>
                            </li>
                          )
                          )}
                        </ul>

                      )}
                    </li>
                  );
                })}
            </ul>
            {/* <ul className="gap-2 md:gap-6 tracking-[.002em] -mx-4 hidden sm:flex">
            {data.nav &&
              data.nav.map((item, i) => {
                // const activeItem =
                //   (item.href === ""
                //     ? router.asPath === "/"
                //     : router.asPath.includes(item.href)) && isClient;
                return (
                  <li
                    key={`${item.label}-${i}`}
                    className={`${activeItemClasses["blue"]}`}
                  >
                    <Link
                      data-tina-field={tinaField(item, "label")}
                      href={`/${item.href}`}
                      className={`relative select-none text-xs md:text-sm py-3 px-2 
                      inline-block tracking-wide transition duration-150 ease-out 
                      hover:opacity-100  md:py-6 md:px-4`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
          </ul> */}

            {/* Sign Up Button */}
            {data.Button && (
              <>
                <button
                  style={{ borderRadius: "30px" }}
                  data-tina-field={tinaField(data, "Button")}
                  className={`relative bg-blue-500 text-white flex items-center px-4 py-1 text-xs transition duration-150 ease-out transform focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 whitespace-nowrap 
            `}
                >
                  {data.Button.label}
                </button>
              </>
            )}


            {/* Small Screen drawer*/}

            <div className="sm:hidden">
              <div>
                <button
                  className="text-white"
                  onClick={toggleDrawer}
                  aria-label="Toggle drawer"
                >
                  <FiMenu size={24} />
                </button>
              </div>
              <div
                className={`fixed inset-y-0 right-0 w-64 bg-white transition-transform duration-300 ease-in-out transform ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
                  }`}
              >
                <div className="p-4 flex items-baseline justify-between">
                  <h2 className="text-sm font-semibold mb-4">MENU</h2>
                  <button
                    className="text-gray-500"
                    onClick={toggleDrawer}
                    aria-label="Close drawer"
                  >
                    <FiX size={24} />
                  </button>
                </div>
                {/* Additional content of the drawer goes here */}
                <div className="px-8 py-3 flex flex-col gap-4">
                  {data.nav &&
                    data.nav.map((item, i) => {
                      const activeItem =
                        (item.href === ""
                          ? router.asPath === "/"
                          : router.asPath.includes(item.href)) && isClient;
                      return (
                        <div key={i} style={{ borderRadius: activeItem ? "10px" : "", background: activeItem ? "rgba(22, 119, 255, 0.10)" : '' }}>
                          <h4 className="px-4 py-2" style={{ color: activeItem ? "#1677FF" : '' }}>{item.label}</h4>
                        </div>
                      );
                    }
                    )}
                </div>
              </div>
            </div>


          </div>
          <div
            className={`absolute h-1 bg-gradient-to-r from-transparent ${data.color === "primary" ? `via-white` : `via-black dark:via-white`
              } to-transparent bottom-0 left-4 right-4 -z-1 opacity-5`}
          />
        </Container>
      </div>
    </>
  );
};
