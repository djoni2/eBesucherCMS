import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { PageBlocksBanner } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export const Banner = ({ data }: { data: PageBlocksBanner }) => {

    return (
        <Section>
            <Container width="100%" style={{padding:'unset'}}>
                <div>
                    <div className="relative">
                        {data.image && (
                            <img className="w-full h-auto" src={data && data.image.src} alt={data && data.image.alt} />

                        )}
                        <div className="absolute inset-0 flex items-center px-16">
                            <div className="row-start-1 col-span-2 md:col-span-3 text-center md:text-left">
                                {data.headline && (
                                    <h3
                                        data-tina-field={tinaField(data, "headline")}
                                        className={`w-full text-left relative mb-4 md:mb-6 text-xl md:text-4xl lg:text-5xl font-bold tracking-normal leading-tight title-font`}
                                    >
                                        <span
                                            className={`bg-clip-text text-transparent bg-black`
                                            }
                                        >
                                            {data.headline}
                                        </span>
                                    </h3>
                                )}
                                {data.tagline && (
                                    <h5
                                        data-tina-field={tinaField(data, "tagline")}
                                        className={`w-full text-left relative mb-3 md:mb-4  text-xs lg:text-sm font-bold tracking-normal leading-tight title-font`}
                                    >
                                        <span
                                        style={{color:'#000000BF'}}
                                            className={`bg-clip-text text-transparent`
                                            }
                                        >
                                            {data.tagline}
                                        </span>
                                    </h5>
                                )}
                                {/* Sign Up Button */}
                                {data.buttons && (
                                    <div className="flex gap-2">
                                        {data.buttons.map((value, index) => (
                                            <button
                                            key={index}
                                            style={{borderRadius:'30px'}}
                                                className={` relative bg-blue-500 px-4 py-2 text-xs lg:text-sm text-white flex items-center font-medium transition duration-150 ease-out transform focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 whitespace-nowrap`}
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
            </Container>
        </Section>
    );
};



export const bannerSchema: TinaTemplate = {
    name: "banner",
    label: "Banner",
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

