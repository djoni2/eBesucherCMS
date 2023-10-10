import { defineConfig } from "tinacms";
import { contentBlockSchema } from "../components/blocks/content";
import { featureBlockSchema } from "../components/blocks/features";
import { heroBlockSchema } from "../components/blocks/hero";
import { testimonialBlockSchema } from "../components/blocks/testimonial";
import { bannerSchema } from "../components/blocks/banner";
import { interestsSchema } from "../components/blocks/interests"
import { ColorPickerInput } from "./fields/color";
import { iconSchema } from "../components/util/icon";
import { footerSchema } from "../components/layout/footer/footerSchema";
import { infosSchema } from "../components/blocks/infosSection";
import { cardSchema } from "../components/blocks/card";
import { imprintSchema } from "../components/blocks/imprintView";
import { WebsiteTrafficExchangeSchema } from "../components/blocks/component";
import { earnMoneySchema } from "../components/blocks/earn_money";
import { newBannerSchema } from "../components/blocks/newBanner";


const config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  branch: "main",
    // process.env.NEXT_PUBLIC_TINA_BRANCH! || // custom branch env override
    // process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF! || // Vercel branch env
    // process.env.HEAD!, // Netlify branch env
  token: process.env.TINA_TOKEN!,
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema: {
    collections: [
      {
        label: "Global",
        name: "global",
        path: "content/global",
        format: "json",
        ui: {
          global: true,
        },
        fields: [
          {
            type: "object",
            label: "Global SEO",
            name: "global_seo",
            fields: [
              {
                type: "string",
                label: "Meta Title",
                name: "meta_title",
              },
              {
                type: "string",
                label: "Meta Description",
                name: "meta_description",
              },
              {
                type: "image",
                label: "Social Media Share Image",
                name: "socialImage",
              }
            ],
          },
          {
            type: "object",
            label: "Header",
            name: "header",
            fields: [
              {
                type: "string",
                label: "Header Background Color",
                name: "color",
                options: [
                  { label: "Default", value: "default" },
                  { label: "Primary", value: "primary" },
                ],
              },
              {
                type: "image",
                label: "Logo",
                name: "LogoImage",
              },
              {
                type: "object",
                label: "Nav Links",
                name: "nav",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.label };
                  },
                  defaultItem: {
                    href: "home",
                    label: "Home",
                  },
                },
                fields: [
                  {
                    type: "string",
                    label: "Link",
                    name: "href",
                  },
                  {
                    type: "string",
                    label: "Label",
                    name: "label",
                  },
                  {
                    type: "object",
                    label: "Sub menu",
                    name: "subs",
                    list: true,
                    fields: [
                      {
                        type: "string",
                        label: "Link",
                        name: "href",
                      },
                      {
                        type: "string",
                        label: "Label",
                        name: "label",
                      },
                    ]
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
          },
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          footerSchema,
          {
            type: "object",
            label: "Theme",
            name: "theme",
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            fields: [
              {
                type: "string",
                label: "Primary Color",
                name: "color",
                ui: {
                  component: ColorPickerInput,
                },
              },
              {
                type: "string",
                name: "font",
                label: "Font Family",
                options: [
                  {
                    label: "System Sans",
                    value: "sans",
                  },
                  {
                    label: "Nunito",
                    value: "nunito",
                  },
                  {
                    label: "Lato",
                    value: "lato",
                  },
                ],
              },
              {
                type: "string",
                name: "darkMode",
                label: "Dark Mode",
                options: [
                  {
                    label: "System",
                    value: "system",
                  },
                  {
                    label: "Light",
                    value: "light",
                  },
                  {
                    label: "Dark",
                    value: "dark",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: "Pages",
        name: "page",
        path: "content/pages",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return `/`;
            }
            return undefined;
          },
        },
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            description:
              "The title of the page. This is used to display the title in the CMS",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            label: "Meta Title",
            name: "meta_title",
          },
          {
            type: "string",
            label: "Meta Description",
            name: "meta_description",
          },
          {
            type: "string",
            label: "Indexing",
            name: "meta_robots",
            options:
              [
                { label: "Index", value: "INDEX, FOLLOW" },
                { label: "Not Index", value: "NO INDEX, NO FOLLOW" },
              ],
          },
          {
            type: "object",
            list: true,
            name: "blocks",
            label: "Sections",
            ui: {
              visualSelector: true,
            },
            templates: [

              heroBlockSchema,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              bannerSchema,
              newBannerSchema,
              infosSchema,
              cardSchema,
              interestsSchema,
              imprintSchema,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              featureBlockSchema,
              contentBlockSchema,
              testimonialBlockSchema,
              WebsiteTrafficExchangeSchema,
              earnMoneySchema
            ],
          },
        ],
      },
    ],
  },
});

export default config;
