import React from "react";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import { AiFillInstagram, AiOutlineYoutube, AiOutlineCopyright, AiOutlineFacebook } from "react-icons/ai";
import { Container } from "../../util/container";
import { RawRenderer } from "./rawRenderer";
import { useTheme } from "..";
import { Icon } from "../../util/icon";


export const Footer = ({ data, icon, rawData }) => {
  const theme = useTheme();
  const socialIconClasses = "h-7 w-auto";
  const socialIconColorClasses = {
    themeColor: "#BFBFBF",
    blue: "text-blue-500 dark:text-blue-400 hover:text-blue-300",
    teal: "text-teal-500 dark:text-teal-400 hover:text-teal-300",
    green: "text-green-500 dark:text-green-400 hover:text-green-300",
    red: "text-red-500 dark:text-red-400 hover:text-red-300",
    pink: "text-pink-500 dark:text-pink-400 hover:text-pink-300",
    purple: "text-purple-500 dark:text-purple-400 hover:text-purple-300",
    orange: "text-orange-500 dark:text-orange-400 hover:text-orange-300",
    yellow: "text-yellow-500 dark:text-yellow-400 hover:text-yellow-300",
    primary: "text-white opacity-80 hover:opacity-100",
  };

  const footerColor = {
    default:
      "text-gray-800 from-white to-gray-50 dark:from-gray-900 dark:to-gray-1000",
    primary: {
      blue: "text-white from-blue-500 to-blue-700",
      teal: "text-white from-teal-500 to-teal-600",
      green: "text-white from-green-500 to-green-600",
      red: "text-white from-red-500 to-red-600",
      pink: "text-white from-pink-500 to-pink-600",
      purple: "text-white from-purple-500 to-purple-600",
      orange: "text-white from-orange-500 to-orange-600",
      yellow: "text-white from-yellow-500 to-yellow-600",
    },
    themeColor: "bg-blue-900"
  };

  // const footerColorCss =
  //   data.color === "primary"
  //     ? footerColor.primary[theme.color]
  //     : footerColor.default;
  // const handleChange = () => {
  //
  // }

  return (
    <footer className=" bg-themeBlue">
      <Container className="relative" size="small">
        <div className="grid sm:grid-cols-6 grid-cols-2 gap-5">
          {data &&
            <>
              <div className="col-span-3">
                <div className="flex-row">
                  <div className="flex">
                    <img
                      className="lg:h-43 lg:w-210 md:h-33 md:w-164 h-148 w-30"
                      src={data.image.src}
                      alt={data.image.alt}
                      aria-hidden="true"
                    />
                    <span className="text-xs sm:text-sm flex gap-1 items-center ml-3 text-white"><AiOutlineCopyright />{data.copy_right}</span>
                  </div>
                  <div className="flex"></div>
                  <div style={{ color: `${socialIconColorClasses.themeColor}` }} className="mt-2 text-xs sm:text-sm text-white">{data.tagline}</div>
                  <div>
                    {data &&
                      <select className="px-4 py-2 mt-6" value={'English'} name="language"
                              // onChange={handleChange}
                      >
                        {data.language_list.map((value, index) => (
                          <option key={index} value={value.label}>{value.label}</option>)
                        )}
                      </select>}
                  </div>
                  <div>
                    {data &&
                      <>
                        <div className="flex gap-5 mt-6">
                          {data.social && data.social.facebook && (
                            <a
                              className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                              href={data.social.facebook}
                              target="_blank"
                            >
                              <AiOutlineFacebook
                                style={{ color: `${socialIconColorClasses.themeColor}` }}
                                className={`${socialIconClasses}`}
                              />
                            </a>
                          )}
                          {data.social && data.social.instagram && (
                            <a
                              className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                              href={data.social.instagram}
                              target="_blank"
                            >
                              <AiFillInstagram
                                style={{ color: `${socialIconColorClasses.themeColor}` }}
                                className={`${socialIconClasses} `}
                              />
                            </a>
                          )}
                          {data.social && data.social.twitter && (
                            <a
                              className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                              href={data.social.twitter}
                              target="_blank"
                            >
                              <FaTwitter
                                style={{ color: `${socialIconColorClasses.themeColor}` }}
                                className={`${socialIconClasses} `}
                              />
                            </a>
                          )}

                          {data.social && data.social.youtube && (
                            <a
                              className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                              href={data.social.youtube}
                              target="_blank"
                            >
                              <AiOutlineYoutube
                                style={{ color: `${socialIconColorClasses.themeColor}` }}
                                className={`${socialIconClasses} `}
                              />
                            </a>
                          )}
                        </div>
                      </>
                    }
                  </div>
                </div>
              </div>
            </>
          }
          <div className="col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {data &&
                data.footer_links.length > 0 &&
                data.footer_links.map((footer, index) => (
                  <div key={index}>
                    <div className=" text-white">
                      <h4 className="font-medium text-sm sm:text-lg mb-5">{footer.headLine}</h4>
                      <div className="flex flex-wrap justify-start">
                        {
                          footer && footer.footer_links !== null && footer.footer_links.length > 0 && footer.footer_links.map((subLinks, index) => (
                            <div key={index} className="w-full text-xs sm:text-sm mb-1" style={{ color: `${socialIconColorClasses.themeColor}` }}>
                              <Link href={`/${subLinks.url}`}>
                                {subLinks.sub_links}
                              </Link>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </ div>
                ))
              }
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
