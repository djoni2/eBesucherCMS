import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { PageBlocksInterests } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export const Interests = ({ data }: { data: PageBlocksInterests }) => {

    return (
        <Section>
            <Container size="large">
                <div>
                    {console.log(data.Interests)}
                    <div className="relative">
                        {data && <h3 className=" text-lg sm:text-3xl md:text-4xl font-bold flex items-center justify-center">{data.headline}</h3>}
                        <div className="grid grid-cols-4 gap-5 mt-5">
                            {data && data.Interests.length > 0 && data.Interests.map((interest, index) => (
                                <div key={index} style={{
                                    boxShadow: "16px 16px 80px 0px rgba(184, 184, 184, 0.25)", border: "1px solid #E6E6E6",
                                    display: "flex", flexDirection: 'column', alignItems: 'centre'
                                }}
                                    className="border border-gray-300 py-9 px-16 rounded-xl gap-6" >
                                    <div className="flex justify-center text-center ">
                                        <img
                                            style={{ background: '#E0EDFF' }}
                                            className="p-5 rounded-full"
                                            src={interest.image.src}
                                            alt={interest.image.alt}
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div className="text-center">
                                        {interest.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};



export const interestsSchema: TinaTemplate = {
    name: "interests",
    label: "Interests",
    fields: [
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
            label: "interests",
            name: "Interests",
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
                    label: "Link",
                    name: "link",
                    type: "string",
                },
            ],
        },
    ],
};

