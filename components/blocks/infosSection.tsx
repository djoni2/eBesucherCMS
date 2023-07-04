import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import { PageBlocksInfo } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export const InfoSection = ({ data }: { data: PageBlocksInfo }) => {
    return (
        <Section>
            {data && data.Info.map((value, index) => (
                <div key={index} className={`py-10 ${index !== data.Info.length - 1 ? 'border-b border-gray-300' : ''}`}>
                    <div className="flex flex-col sm:flex-row  justify-between ">
                        {/* Texts Section */}
                        <div className="flex flex-col">
                            {/* headline */}
                            <div>
                        { value.headline&& <span className="text-[24px] font-semibold">{value.headline}</span>}
                            </div>


                            {/* subheadline */}
                            <div className="my-8 sm:my-4  sm:w-[80%]">
                                {value.text && <TinaMarkdown content={value.text} />}
                            </div>

                        </div>

                        {/* Buttons Section  */}
                        <div className="flex flex-row gap-10">
                            {
                                value.buttons&&value.buttons.map((button, index) => (
                                    // button component
                                    <div className="flex   sm:flex-col items-center gap-3">

                                        {/* button icon container */}
                                        
                                        {
                                            button.Icon&& button.Icon.src&&
                                            <div className="p-5 rounded-[50%] bg-[#1677FF] cursor-pointer">
                                                <img style={{height:24,width:24, maxWidth:"unset"}} src={button.Icon.src} alt="..."/>
                                            </div>}

                                        {/* Button Text */}
                                        {button.icon_headline&& <span className="w-[max-content]">{button.icon_headline}</span>}
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                    
                </div>
            ))}
        </Section>
    );
};

export const infosSchema: TinaTemplate = {
    name: "Info",
    label: "Info's Detail Section",
    fields: [
        {
            label: "Info",
            name: "Info",
            type: "object",
            list: true,
            fields: [
                {
                    type: "string",
                    label: "HeadLine",
                    name: "headline",
                },
                {
                    label: "Text",
                    name: "text",
                    type: "rich-text",
                },
                {
                    label: "Buttons",
                    name: "buttons",
                    type: "object",
                    list: true,
                    fields: [
                        {
                            type: "object",
                            label: "Icon",
                            name: "Icon",
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
                            label: "Icon Hedline",
                            name: "icon_headline",
                            type: "string",
                        }
                        , {
                            label: "Link",
                            name: "link",
                            type: "string",
                        },
                    ]
                },
            ],
        },
    ],
};
