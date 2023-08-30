import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { PageBlocksInterests } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import prevArrowIcon from '../../assets/img/scores/next2.png'
import nextArrowIcon from '../../assets/img/scores/next1.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";

export const Interests = ({ data }: { data: PageBlocksInterests }) => {
    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
            >
                <Image src={prevArrowIcon}
                    style={{ cursor: 'pointer', borderRadius: "50%", width: "30px", height: "30px", position: 'absolute', top: -12, zIndex: 700 }}
                    alt="Next" width={100} height={100} />
                {/* <img 
            src={prevArrowIcon} alt="Next" /> */}
            </div>
        );
    }

    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
            >
                <Image
                    style={{ cursor: 'pointer', borderRadius: "50%", width: "30px", height: "30px", position: 'absolute', top: -12, zIndex: 700 }}
                    src={nextArrowIcon} alt="Previous" />
            </div>
        );
    }
    const settings = {
        dots:true,
        appendDots: dots => (
            <div>
              <ul style={{ position: 'relative', bottom: '-20px' }}>{dots}</ul>
            </div>
          ),
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        speed: 500,
        // nextArrow: <SampleNextArrow className={'next-ar row-gallery'} />,
        // prevArrow: <SamplePrevArrow className={'prev-arrow-gallery'} />,
        autoplaySpeed: 5000,
        cssEase: "linear",
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ]
    };

    return (
        <Section>
            <Container size="large">
                <div>
                    <div className="relative">

                        {data && <h3 className="text-lg sm:text-3xl md:text-4xl font-bold flex items-center justify-center">{data.headline}</h3>}

                        {/* <div className="grid grid-cols-4 gap-5 mt-5"> */}
                            {/* <Slider {...settings}>
                                {data && data.Interests.length > 0 && data.Interests.map((interest, index) => (
                                    <div key={index} style={{
                                        boxShadow: "16px 16px 80px 0px rgba(184, 184, 184, 0.25)", border: "1px solid #E6E6E6", flexDirection: 'column', alignItems: 'center'
                                    }}
                                        className="py-9 px-2 md:px-16 rounded-xl gap-6 hidden sm:flex" >
                                        <div className="flex justify-center text-center ">
                                            {interest?.image && <img
                                                style={{ background: '#E0EDFF' }}
                                                className="p-5 rounded-full"
                                                src={interest.image.src}
                                                alt={interest.image.alt}
                                                aria-hidden="true"
                                            />}
                                        </div>
                                        <div className="text-center font-bold text-xs md:text-base lg:text-lg text-black">
                                            {interest.label}
                                        </div>
                                    </div>
                                ))}
                            </Slider> */}
                        {/* </div> */}

                        <div className="gallery-card-container" >
                            <Slider {...settings}>
                                {data && data.Interests.length > 0 && data.Interests.map((interest, index) => (
                                    <div key={index} style={{
                                        boxShadow: "16px 16px 80px 0px rgba(184, 184, 184, 0.25)", border: "1px solid #E6E6E6", flexDirection: 'column', alignItems: 'center'
                                    }}
                                        className="py-9 px-2 md:px-16 rounded-xl gap-6 hidden sm:flex" >
                                        <div className="flex justify-center text-center ">
                                            {interest?.image && <img
                                                style={{ background: '#E0EDFF' }}
                                                className="p-5 rounded-full"
                                                src={interest.image.src}
                                                alt={interest.image.alt}
                                                aria-hidden="true"
                                            />}
                                        </div>
                                        <div className="text-center font-bold text-xs md:text-base lg:text-lg text-black">
                                            {interest.label}
                                        </div>
                                    </div>
                                ))}
                            </Slider>
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

