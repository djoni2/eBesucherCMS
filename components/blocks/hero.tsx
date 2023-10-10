import * as React from "react";
import { Actions } from "../util/actions";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import { PageBlocksHero } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import background from "../../assets/img/scores/backgroundHero.png";

export const Hero = ({ data }: { data: PageBlocksHero }) => {
  const theme = useTheme();
  const headlineColorClasses = {
    blue: "from-blue-400 to-blue-600",
    teal: "from-teal-400 to-teal-600",
    green: "from-green-400 to-green-600",
    red: "from-red-400 to-red-600",
    pink: "from-pink-400 to-pink-600",
    purple: "from-purple-400 to-purple-600",
    orange: "from-orange-300 to-orange-600",
    yellow: "from-yellow-400 to-yellow-600",
  };

  return (
    <Section color={data.color}>
      <div className="h-full w-full bg-center bg-cover" style={{ backgroundImage: `url(${background})` }}>
        <Container
          size="large"
          className=""
        >
          {/* <div style={{transform: "rotate(-8.88deg)"}} className={`${data.color==='tint'&&" bg-gradient-to-t w-1440 from-blue-100 to-transparent p-0.5 h-461 w-1873"}`}>
        </div> */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-14 items-center justify-center">
            {(data.sides === null || data.sides === 'left') &&
              <>
                <div className=" row-start-1 sm:col-span-3 text-center md:text-left">
                  {data.headline && (
                    <h3
                      data-tina-field={tinaField(data, "headline")}
                      className={`w-full text-left relative mb-4 md:mb-6 text-xl md:text-3xl lg:text-4xl font-bold tracking-normal leading-tight title-font`}
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
                        {data.headline}
                      </span>
                    </h3>
                  )}
                  {data.text && (
                    <div
                      data-tina-field={tinaField(data, "text")}
                      className={`prose text-left mx-auto mb-6 md:mx-0 md:mb-7`}
                    >
                      <TinaMarkdown content={data.text} />
                    </div>
                  )}
                  {/* Sign Up Button */}
                  {data.Button && (
                    <button
                      // data-tina-field={tinaField(data,"signup")}
                      className={` relative bg-blue-500 rounded-3xl px-4 py-2 text-white flex items-center font-medium text-lg transition duration-150 ease-out transform focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 whitespace-nowrap 
            `}
                    >
                      {data.Button.label}
                    </button>
                  )}
                </div>
                <>
                  {data.image && (
                    <div
                      data-tina-field={tinaField(data.image, "src")}
                      className="relative row-start-2 sm:row-start-1 md:col-span-2 flex justify-center w-281 h-233 md:w-342 md:h-183 lg:w-449 lg:h-371"
                    >
                      <img
                        className="absolute w-full rounded-lg max-w-xs 
              md:max-w-none h-auto blur-2xl brightness-150 contrast-[0.9] 
              dark:brightness-150 saturate-200 opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-hard-light"
                        src={data.image.src}
                        aria-hidden="true"
                      />
                      <img
                        className="relative  w-full max-w-xs rounded-lg md:max-w-none h-auto"
                        alt={data.image.alt}
                        src={data.image.src}
                      />
                    </div>
                  )}
                </>
              </>
            }
            {(data.sides === 'right') &&
              <>
                {data.image && (
                  <div
                    data-tina-field={tinaField(data.image, "src")}
                    className="relative row-start-2 sm:row-start-1 col-span-1 md:col-span-2  flex justify-center w-281 h-233 md:w-342 md:h-183 lg:w-449 lg:h-371"
                  >
                    <img
                      className="absolute w-full rounded-lg max-w-xs 
              md:max-w-none h-auto blur-2xl brightness-150 contrast-[0.9] 
              dark:brightness-150 saturate-200 opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-hard-light"
                      src={data.image.src}
                      aria-hidden="true"
                    />
                    <img
                      className="relative  w-full max-w-xs rounded-lg md:max-w-none h-auto"
                      alt={data.image.alt}
                      src={data.image.src}
                    />
                  </div>
                )}
                <>
                  <div className="row-start-1 col-span-2 md:col-span-3 text-center md:text-left">
                    {data.headline && (
                      <h3
                        data-tina-field={tinaField(data, "headline")}
                        className={`w-full text-left relative mb-4 md:mb-6 text-xl md:text-3xl lg:text-4xl font-bold tracking-normal leading-tight title-font`}
                      >
                        <span
                          className={`bg-clip-text text-transparent bg-black`
                          }
                        >
                          {data.headline}
                        </span>
                      </h3>
                    )}
                    {data.text && (
                      <div
                        data-tina-field={tinaField(data, "text")}
                        className={`prose text-left mx-auto mb-6 md:mx-0 md:mb-7`}
                      >
                        <TinaMarkdown content={data.text} />
                      </div>
                    )}
                    {/* Sign Up Button */}
                    {data.Button && (
                      <button
                        className={` relative bg-blue-500 rounded-3xl px-4 py-2 text-white flex items-center font-medium text-lg transition duration-150 ease-out transform focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 whitespace-nowrap 
            `}
                      >
                        {data.Button.label}
                      </button>
                    )}
                  </div>
                </>
              </>
            }
          </div>
        </Container>
        </div>
    </Section>
  );
};

export const heroBlockSchema: TinaTemplate = {
  name: "hero",
  label: "Hero",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      tagline: "Here's some text above the other text",
      headline: "This Big Text is Totally Awesome",
      text: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
    },
  },
  fields: [
    {
      type: "string",
      label: "Headline",
      name: "headline",
    },
    {
      label: "Text",
      name: "text",
      type: "rich-text",
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
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
    {
      type: "string",
      label: "Change Side",
      name: "sides",
      options: [
        { label: "Text Left Side - Image Right Side", value: "left" },
        { label: "Text Right Side - Image Left Side", value: "right" },
      ],
    },
  ],
};
