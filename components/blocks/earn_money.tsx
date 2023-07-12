import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { PageBlocksEarnMoney } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const EarnMoney = ({ data }: { data: PageBlocksEarnMoney }) => {
    return (
        <Section>
            <Container width="large" size="large">
                {console.log(data)}
                {
                    data.content && data.content.length > 0 &&
                    data.content.map((content, index) => (
                        <div key={index}>
                            {content.headline && (
                                <h3
                                    className={`w-full text-left relative mb-4 md:mb-6 text-sm md:text-lg lg:text-xl font-bold tracking-normal leading-tight title-font`}
                                >
                                    <span
                                        // className={`bg-clip-text text-transparent 
                                        // bg-gradient-to-r  ${data.color === "primary"
                                        //     ? `from-white to-gray-100`
                                        //     : headlineColorClasses[theme.color]
                                        //   }`
                                        // }
                                        className={`bg-clip-text text-transparent bg-black`
                                        }
                                    >
                                        {content.headline}
                                    </span>
                                </h3>
                            )}
                            {content.paragraph && content.paragraph.length > 0 &&
                                content.paragraph.map((p, index) =>
                                (
                                    <div
                                        key={index}
                                        className={`text-left mx-auto mb-6 md:mx-0 md:mb-7`}
                                    >
                                        <TinaMarkdown content={p.paragraph} />
                                    </div>
                                )
                                )
                            }
                            <div className="mb-4">
                                {
                                    content.list && content.list.length > 0 &&
                                    content.list.map((item, index) => (
                                        <div className="mt-5 flex items-center" key={index}>
                                            <div className="w-[30px] h-[30px] relative">
                                                <div className="w-[30px] h-[30px] left-0 top-0 absolute bg-[#E0EDFF] rounded-full" />
                                                <div className=" p-2 absolute text-center text-blue-600 text-xs font-semibold leading-snug">{index + 1}</div>
                                            </div>
                                            <div className="ml-3">
                                                {item.list && <TinaMarkdown content={item.list} />}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
                {/* {data.page && <TinaMarkdown content={data.page} />} */}
                <div className="w-full py-5 h-[195px] sm:h-[402px] md:h-[650px]">
                    <iframe
                        title="YouTube Video"
                        width={"100%"}
                        height={"100%"}
                        src={`https://www.youtube.com/embed/${data.youtubeId}`}
                        allowFullScreen
                    ></iframe>
                </div>
            </Container>
        </Section>
    );
};



export const earnMoneySchema: TinaTemplate = {
    name: "earnMoney",
    label: "Earn Money",
    fields: [
        {
            label: "Content",
            name: "content",
            type: "object",
            list: true,
            fields: [
                {
                    type: "string",
                    label: "HeadLine",
                    name: "headline",
                },
                {
                    label: "Paragraph",
                    name: "paragraph",
                    type: "object",
                    list: true,
                    fields: [
                        {
                            type: "rich-text",
                            label: "Paragraph",
                            name: "paragraph"
                        }
                    ]
                },
                {
                    type: "object",
                    label: "List",
                    name: "list",
                    list: true,
                    fields: [
                        {
                            type: "rich-text",
                            label: "list",
                            name: "list"
                        }
                    ]
                },
            ]
        },
        {
            type: "string",
            label: "Youtube Id",
            name: "youtubeId"
        },
    ],
};

