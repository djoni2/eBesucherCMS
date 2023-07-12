import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { PageBlocksTestimonial } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export const Testimonial = ({ data }: { data: PageBlocksTestimonial }) => {
  return (
    <Section>
      <Container width="100%" style={{ padding: 'unset' }}>
        <div style={{ backgroundImage: `url(${data && data.image.src})` }} className="bg-cover bg-center h-[265px] sm:h-[280px] md:h-[350px]">
          <div className="py-10">
            {/* {data.image && (
                            <img className="w-full h-auto" src={} alt={data && data.image.alt} />

                        )} */}
            <div className={`flex items-center justify-center`}>
              <div className="px-6 sm:px-8 max-w-7xl">
                <div className="row-start-1 col-span-2 md:col-span-3 text-center md:text-left">
                  {data.headline && <div
                    className={`relative  max-w-3xl mx-auto text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-normal text-center title-font`}
                  >

                    <p
                      data-tina-field={tinaField(data, `headline`)}
                      className="relative opacity-95 text-white"
                    >
                      {data.headline}
                    </p>
                  </div>}
                  {/* {data.headline && (
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
                  )} */}
                  {data.tagline && (
                    <h5
                      data-tina-field={tinaField(data, "tagline")}
                      className={`w-full text-left relative mb-3 md:mb-4  text-xs lg:text-sm font-bold tracking-normal leading-tight title-font`}
                    >
                      <span
                        style={{ color: '#000000BF' }}
                        className={`bg-clip-text text-transparent`
                        }
                      >
                        {data.tagline}
                      </span>
                    </h5>
                  )}
                  {/* Sign Up Button */}
                  {data.buttons && (
                    <div className="flex flex-col sm:flex-row  justify-center mt-2 gap-2">
                      {data.buttons.map((value, index) => (
                        <button
                          key={index}
                          style={{ borderRadius: '30px' }}
                          className={`flex justify-center px-4 py-2 text-xs lg:text-sm ${index===0?"text-white bg-[#001D47]":" border-2 text-white bg-transparent"}  flex items-center font-medium transition duration-150 ease-out transform focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 whitespace-nowrap`}
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

export const testimonialBlockSchema: TinaTemplate = {
  name: "testimonial",
  label: "Testimonial",
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
