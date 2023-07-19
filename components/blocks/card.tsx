import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { PageBlocksCard } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Card = ({ data }: { data: PageBlocksCard }) => {
    return (
        <Section>
            <Container size="large">
                <div className={`grid grid-cols-2 md:grid-cols-3 gap-4`}>
                    {data && data.card.map((value, index) => (
                        <div key={index} style={{
                            boxShadow: "16px 16px 80px 0px rgba(184, 184, 184, 0.25)", border: "1px solid #E6E6E6", flexDirection: 'column', alignItems: 'center'
                        }}
                            className="py-9 px-2 md:px-16 rounded-xl gap-6 flex" >
                            <div className="flex justify-center text-center ">
                                {value?.image && <img
                                    style={{ background: '#E0EDFF' }}
                                    className="p-5 rounded-full"
                                    src={value.image.src}
                                    alt={value.image.alt}
                                    aria-hidden="true"
                                />}
                            </div>
                            <div className="text-center font-bold text-sm md:text-lg">
                                {value.label}
                            </div>
                            <div className="flex justify-center">
                                <button
                                    style={{ borderRadius: "30px" }}
                                    // data-tina-field={tinaField(data,"signup")}
                                    className={` bg-blue-500 text-white flex items-center px-4 py-1 text-xs text-center focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 whitespace-nowrap`}
                                >
                                    {value.Button.label}
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export const cardSchema: TinaTemplate = {
    name: "card",
    label: "Card",
    fields: [
        {
            label: "Card",
            name: "card",
            type: "object",
            list: true,
            fields: [
                {
                    label: "Label",
                    name: "label",
                    type: "string",
                },
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
                    label: "Button",
                    name: "Button",
                    type: "object",
                    fields: [
                        {
                            label: "Label",
                            name: "label",
                            type: "string",
                        },
                        {
                            label: "Link",
                            name: "link",
                            type: "string",
                        },
                    ],
                },
            ],
        },
    ],
};

