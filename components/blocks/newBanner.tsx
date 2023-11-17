import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { PageBlocksNewbanner } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export const NewBanner = ({ data }: { data: PageBlocksNewbanner }) => {
    return (
        <Section>
            <Container width="100%" style={{ padding: 'unset' }}>
                <div>
                    <div className="parent-container relative  sm:bg-none bg-no-repeat bg-cover bg-center" style={{backgroundSize:"100% 100%"}}>
                        {data&&data.image && (
                            <img className="w-full h-[100%] object-cover absolute " src={data.image.src} alt={data && data.image.alt} />

                        )}
                        <div className=" inset-0 flex items-center justify-center py-[3rem] sm:py-16 md:py-24 lg:py-36">
                            <div className="px-6 sm:px-8 max-w-7xl">
                                <div className="row-start-1 col-span-2 md:col-span-3 justify-center  flex items-center flex-col text-center md:text-left">
                                    {data.headline && (
                                        <h3
                                            data-tina-field={tinaField(data, "headline")}
                                            className={`w-1/2 sm:w-full text-center relative mb-4 md:mb-6 text-xl md:text-4xl lg:text-5xl font-bold tracking-normal leading-tight title-font`}
                                        >
                                            <span
                                                className={`bg-clip-text text-transparent text-white`
                                                }
                                            >
                                                {data.headline}
                                            </span>
                                        </h3>
                                    )}
                                    {data.tagline && (
                                        <h5
                                            data-tina-field={tinaField(data, "tagline")}
                                            className={`w-2/3 sm:w-full text-center relative mb-3 md:mb-4  text-xs lg:text-sm font-bold tracking-normal leading-tight title-font`}
                                        >
                                            <span
                                                className={`bg-clip-text text-transparent text-white`
                                                }
                                            >
                                                {data.tagline}
                                            </span>
                                        </h5>
                                    )}
                                    {/* Sign Up Button */}
                                    {data.buttons && (
                                        <div className="flex gap-2 justify-center">
                                            {data.buttons.map((value, index) => (
                                                <button
                                                    key={index}
                                                    style={{ borderRadius: '30px' }}
                                                    className={` relative ${
                                                        index === 0 ? 'bg-blue-900 text-white' : 'bg-white text-black'
                                                      } px-[6px] py-[5px] sm:px-4 sm:py-2 text-[10px] lg:text-sm  flex items-center font-medium transition duration-150 ease-out transform focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 whitespace-nowrap`}
                                                >
                                                    {value.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};



export const newBannerSchema: TinaTemplate = {
    name: "newbanner",
    label: "newBanner",
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
        {
            label: "Buttons",
            name: "buttons",
            type: "object",
            list: true,
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
    ],
};

