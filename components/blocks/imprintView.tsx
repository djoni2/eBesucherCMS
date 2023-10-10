import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { PageBlocksImprint } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const ImprintView = ({ data }: { data: PageBlocksImprint }) => {
    return (
        <Section>
            <Container size="medium" width="small">
                <div>
                    <div className="w-[20px] h-[20px] relative origin-top-left rotate-180" />
                    {data.head && <div className="text-black text-[20px] font-medium capitalize leading-8">{data.head}</div>}
                    {data.tag && <div className="text-green-800 text-[16px] font-medium capitalize leading-8 mt-3">{data.tag}</div>}
                    {data.address && <div className="text-black text-opacity-90 text-[14px] font-normal leading-snug mt-3">{data.address}</div>}
                    {data.list &&
                        data.list.map((list, index) => (
                            <div key={index} className="w-[424px] flex gap-2 mt-2">
                                {list.icon?.src &&
                                    <span className="text-black text-opacity-90 text-[14px] font-bold leading-snug">
                                        <img style={{ height: 16, width: 16, maxWidth: "unset" }} src={list.icon.src} alt={list.icon.alt} />
                                    </span>}
                                <span className="text-black text-opacity-90 text-[14px] font-bold leading-snug">{list.name}:</span>
                                <span className="text-black text-opacity-90 text-[14px] font-normal leading-snug">{list.description}<br /></span>
                            </div>
                        ))
                    }
                    {
                        data.text&&
                        <div className="mt-5">
                        <TinaMarkdown content={data.text}/>
                        </div>
                    }
                </div>
            </Container>
        </Section>
    );
};

export const imprintSchema: TinaTemplate = {
    name: "imprint",
    label: "Imprint",
    fields: [
        {
            label: "Head Line",
            name: "head",
            type: "string",
        },
        {
            label: "Tag Line",
            name: "tag",
            type: "string",
        },
        {
            label: "Address",
            name: "address",
            type: "string",
        },
        {
            label: "List",
            name: "list",
            type: "object",
            list: true,
            fields: [
                {
                    label: "Name",
                    name: "name",
                    type: "string",
                },
                {
                    type: "object",
                    label: "Icon",
                    name: "icon",
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
                    label: "Description",
                    name: "description",
                    type: "string",
                },
            ],
        },
        {
            label: "Text",
            name: "text",
            type: "rich-text",
        },
    ],
};