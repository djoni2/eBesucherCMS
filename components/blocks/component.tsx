import React, { useState } from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { Input, type TinaTemplate } from "tinacms";
import { PageBlocksTrafficExchange } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactStars from 'react-stars'
import { TiTick } from 'react-icons/ti'
import { AiFillInfoCircle } from "react-icons/ai";

export const WebsiteTrafficExchange = ({ data }: { data: PageBlocksTrafficExchange }) => {
    const [domain, setDomain] = useState("")
    const [error, setError] = useState({
        error: false,
        error1: false,
        error2: false
    })
    const settings = {
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        appendDots: dots => (
            <div>
                <ul style={{ position: 'relative', bottom: '-20px' }}>{dots}</ul>
            </div>
        ),
    };
    const httpCheckUrl = (url) => {
        const regexPattern = /^https?:\/\/(?:.*\.)?(?:ebesucher\.com|ebesucher\.de)(?:\/.*)?.*$/;
        return regexPattern.test(url);
    };
    const isValidUrl = (url) => {
        const regexPattern = /^(https:\/\/)?([\w.-]+\.[a-zA-Z]{2,})(\/.*)?$/;
        return regexPattern.test(url);
    };

    const ishttps = (url) => {
        const regex = /^https?:\/\//i;
        return !regex.test(url);
    };

    const ishttp = (url) => {
        const regex = /^http:\/\//i;
        return regex.test(url);
    };

    const advertiseNow = () => {
        setError({
            error: false,
            error1: false,
            error2: false
        })

        if (isValidUrl(domain) && !httpCheckUrl(domain)) {
            alert('Url is Accurate to post');
            setError({
                error: false,
                error1: false,
                error2: false
            })
        } else {
            if (domain === "") {
                setError({ ...error, error: true })
                setTimeout(() => {
                    setError({ ...error, error: false })
                }, 4000);
                return
            }
            if (ishttps(domain)) {
                setError({ ...error, error: true })
                setTimeout(() => {
                    setError({ ...error, error: false })
                }, 4000);
                return
            }
            if (!ishttps(domain)) {
                if (ishttp(domain)) {
                    setError({ ...error, error2: true })
                    setTimeout(() => {
                        setError({ ...error, error2: false })
                    }, 4000);
                    return
                }
                else if (httpCheckUrl(domain)) {
                    setError({ ...error, error1: true })
                    setTimeout(() => {
                        setError({ ...error, error1: false })
                    }, 4000);
                    return
                }
            }
            if (!isValidUrl(domain)) {
                setError({ ...error, error: true })
                setTimeout(() => {
                    setError({ ...error, error: false })
                }, 4000);
                return
            }
        }
    }
    return (
        <Section >
            <Container width="large" size="medium">
                {/* headline */}
                {data.headline1 && <div className=" text-lg sm:text-2xl font-medium capitalize leading-loose">{data.headline1}</div>}

                {/* Input */}
                <div className="grid grid-cols-10 rounded--sm border border-zinc-300 justify-between items-center mt-5">
                    <div className="md:col-span-9 col-span-7 h-10 px-3 py-2 justify-start items-start gap-2.5 flex">
                        <input onChange={e => { setDomain(e.target.value) }} className="grow shrink basis-0 h-6 justify-start items-start gap-2.5 flex" placeholder="https://www.my-own-domain.xx" />
                    </div>
                    {data.button1 && <div onClick={advertiseNow} className=" cursor-pointer md:col-span-1 col-span-3 self-stretch h-10 bg-blue-600 rounded-tr--sm rounded-br--sm shadow border border-blue-600 justify-center items-center gap-2 flex">
                        <div className="Input text-white text-base font-medium leading-normal">{data.button1.label}</div>
                    </div>}
                </div>
                {error.error && <div className="flex items-center mt-1">
                    <AiFillInfoCircle className="text-red-700" />
                    <span className=" ml-1 text-red-700">This value is not allowed!</span>
                </div>}
                {error.error1 && <div className="flex items-center mt-1">
                    <AiFillInfoCircle className="text-red-700" />
                    <span className=" ml-1 text-red-700"> Please do not add ebesucher.com / ebesucher.de to the surfbar.</span>
                </div>}
                {error.error2 &&
                    <div className="flex items-center mt-1">
                        <AiFillInfoCircle className="text-red-700" />
                        <span className=" ml-1 text-red-700">Please do only add websites with a HTTPS protocoll!</span>
                    </div>
                }

                {/* list of options */}

                {data.options && <div className="flex flex-col items-center sm:flex-row sm:justify-center">
                    {data.options.map((value, index) => (
                        <div className=" my-2 sm:mx-2">
                            {/* Content for the first div */}
                            <div className="col-span-2 sm:col-span-1 justify-start items-center gap-2 flex">
                                <TiTick className=" w-4 h-4" />
                                {value.text && <div className="text-black text-opacity-90  text-xs md:text-base font-normal leading-normal">{value.text}</div>}
                            </div>
                        </div>
                    ))}
                </div>}

                {/* Detail's of Page */}

                <div className="flex-col justify-start items-start gap-[15px] inline-flex mt-4">
                    {data.headline2 && <div className=" text-black  text-lg md:text-xl font-medium capitalize leading-loose">{data.headline2}</div>}
                    <div className="">
                        {data.text && <TinaMarkdown content={data.text} />}
                    </div>
                </div>
            </Container>
            {/* Banners */}

            {data.banner &&
                data.banner.map((data, index) => (

                    <div key={index}>
                        <div style={{ backgroundImage: `url(${data && data.image.src})` }} className="bg-cover bg-center h-[320px] sm:h-[350px] md:h-[420px]">
                            <div className={`flex px-6 items-center max-w-7xl mx-auto sm:px-8 mb-6 ${index === 0 ? 'md:right-[665] sm:right-[355]' : 'md:left-[665] sm:left-[355]'}`}>
                                <div className="w-[390px] h-[328px] md:w-[383.60px] md:h-[289px] lg:w-[631px] lg:h-[201px]  sm:px-8 sm:py-2">
                                    <div className="row-start-1 col-span-2 md:col-span-3 text-center md:text-left">
                                        {data.headline && (
                                            <h3
                                                data-tina-field={tinaField(data, "headline")}
                                                className={`w-full text-left relative mb-4 md:mb-6 text-white
                                                text-lg
                                                font-medium
                                                capitalize
                                                leading-loose
                                                 md:text-xl lg:text-2xl tracking-normal title-font`}
                                            >
                                                <span
                                                    className={`bg-clip-text text-transparent ${index === 0 ? "text-white" : "bg-black"} `}
                                                >
                                                    {data.headline}
                                                </span>
                                            </h3>
                                        )}
                                        {data.tagline && (
                                            <h5
                                                data-tina-field={tinaField(data, "tagline")}
                                                className={`w-full text-left relative text-white
                                                font-normal
                                                leading-snug
                                                 mb-3 md:mb-4  text-xs lg:text-sm tracking-normal title-font`}
                                            >
                                                <span
                                                    className={`bg-clip-text text-transparent ${index === 0 ? "text-white" : "bg-black"} `
                                                    }
                                                >
                                                    {data.tagline}
                                                </span>
                                            </h5>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            {/* Button */}
            {data.button2 && (
                <div className="flex justify-center p-6">
                    <div className="Button w-[341px] h-[38.80px] px-[15px] py-[6.40px] bg-blue-600 rounded-[30px] shadow border border-blue-600 justify-center items-center gap-2.5 inline-flex">
                        <div className="Text text-center text-white text-base font-normal leading-normal">{data.button2.label}!</div>
                    </div>
                </div>
                // <div>
                //   <button
                //     style={{ borderRadius: "30px" }}
                //     className={`relative bg-blue-500 text-white text-center flex items-center w-[341px] h-[38.80px] px-[15px] py-[6.40px] text-center text-xs transition duration-150 ease-out transform focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 whitespace-nowrap 
                // `}
                //   >
                //     {data.button2.label}
                //   </button>
                // </div>
            )}
            <Container width="large" size="medium">
                <Slider {...settings}>
                    {
                        data.testimonal && data.testimonal.map((test, index) => (
                            <div className="m-3 bg-white rounded-[10px] border border-zinc-300">
                                <div className="px-8 py-[25px] mx-3 flex-col overflow-auto justify-around items-start gap-5 inline-flex">
                                    <ReactStars
                                        count={test.rating}
                                        size={24}
                                        color1={'#ffd700'}
                                        edit="false" />
                                    <div className="text-black text-opacity-90 text-sm font-normal leading-snug mt">{test.comment}</div>
                                    <div className="text-black text-xl font-medium leading-7">{test.name}</div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>

            </Container>
        </Section>
    );
};



export const WebsiteTrafficExchangeSchema: TinaTemplate = {
    name: "trafficExchange",
    label: "Website Traffic Exchange",
    fields: [
        {
            type: "string",
            label: "HeadLine",
            name: "headline1",
        },
        {
            label: "Button",
            name: "button1",
            type: "object",
            fields: [
                {
                    label: "Label",
                    name: "label",
                    type: "string",
                },
                {
                    label: "Type",
                    name: "type",
                    type: "string",
                    options: [
                        { label: "Button", value: "button" },
                        { label: "Link", value: "link" },
                    ],
                },
                {
                    label: "Link",
                    name: "link",
                    type: "string",
                },
            ],
        },
        {
            label: "Options",
            name: "options",
            type: "object",
            list: true,
            fields: [
                {
                    label: "Text",
                    name: "text",
                    type: "string",
                },
            ],
        },
        {
            type: "string",
            label: "HeadLine",
            name: "headline2",
        },
        {
            type: "rich-text",
            label: "Description",
            name: "text",
        },
        {
            name: "banner",
            label: "Banner",
            type: 'object',
            list: true,
            fields: [
                {
                    type: "object",
                    label: "Image",
                    name: "image",
                    fields: [
                        {
                            name: "src",
                            label: "Image Source",
                            type: "image",
                        },
                        {
                            name: "alt",
                            label: "Alt Text",
                            type: "string",
                        },
                    ],
                },
                {
                    type: "string",
                    label: "HeadLine",
                    name: "headline",
                },
                {
                    type: "string",
                    label: "TagLine",
                    name: "tagline",
                },
            ]
        },
        {
            label: "Button",
            name: "button2",
            type: "object",
            fields: [
                {
                    label: "Label",
                    name: "label",
                    type: "string",
                },
                {
                    label: "Type",
                    name: "type",
                    type: "string",
                    options: [
                        { label: "Button", value: "button" },
                        { label: "Link", value: "link" },
                    ],
                },
                {
                    label: "Link",
                    name: "link",
                    type: "string",
                },
            ],
        },
        {
            type: "object",
            label: "Testimonal",
            name: "testimonal",
            list: true,
            fields: [
                {
                    type: "number",
                    label: "Rating",
                    name: "rating",
                },
                {
                    type: "string",
                    label: "Comment",
                    name: "comment",
                },
                {
                    type: "string",
                    label: "Name",
                    name: "name",
                },
            ]
        },
    ],
};

