import type { TinaTemplate } from "tinacms";


export const footerSchema: TinaTemplate =
{
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    type: "object",
    label: "Footer",
    name: "footer",
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
                {
                    name: "url",
                    label: "Url",
                    type: "string",
                },
            ],
        },
        {
            label: "Copy Right",
            name: "copy_right",
            type: "string",
        },
        {
            type: "string",
            label: "TagLine",
            name: "tagline",
        },
        {
            label: "Language List",
            name: "language_list",
            type: "object",
            list: true,
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
                        }
                    ],
                },
            ]
        },
        {
            type: "object",
            label: "Social Links",
            name: "social",
            fields: [
                {
                    type: "string",
                    label: "Facebook",
                    name: "facebook",
                },
                {
                    type: "string",
                    label: "Twitter",
                    name: "twitter",
                },
                {
                    type: "string",
                    label: "Instagram",
                    name: "instagram",
                },
                {
                    type: "string",
                    label: "Youtube",
                    name: "youtube",
                },
            ],
        },
        {
            label: "Footer Links",
            name: "footer_links",
            type: "object",
            list: true,
            fields: [
                {
                    label: "Column Head Line",
                    name: "headLine",
                    type: "string",
                },
                {
                    label: "Footer Links",
                    name: "footer_links",
                    type: "object",
                    list: true,
                    fields: [
                        {
                            label: "Sub links",
                            name: "sub_links",
                            type: "string",
                        },
                        {
                            label: "URL",
                            name: "url",
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
}
//     name: "banner",
//     label: "Banner",
//     fields: [
//         {
//             type: "object",
//             label: "Image",
//             name: "image",
//             fields: [
//                 {
//                     name: "src",
//                     label: "Image Source",
//                     type: "image",
//                 },
//                 {
//                     name: "alt",
//                     label: "Alt Text",
//                     type: "string",
//                 },
//             ],
//         },
//         {
//             type: "string",
//             label: "HeadLine",
//             name: "headline",
//         },
//         {
//             type: "string",
//             label: "TagLine",
//             name: "tagline",
//         },
//         {
//             label: "Buttons",
//             name: "buttons",
//             type: "object",
//             list: true,
//             fields: [
//                 {
//                     label: "Label",
//                     name: "label",
//                     type: "string",
//                 },
//                 {
//                     label: "Type",
//                     name: "type",
//                     type: "string",
//                     options: [
//                         { label: "Button", value: "button" },
//                         { label: "Link", value: "link" },
//                     ],
//                 },
//                 {
//                     label: "Link",
//                     name: "link",
//                     type: "string",
//                 },
//             ],
//         },
//     ],
// };