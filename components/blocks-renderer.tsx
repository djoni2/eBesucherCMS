import type { Page, PageBlocks } from "../tina/__generated__/types";
import { Banner } from "./blocks/banner";
import { Card } from "./blocks/card";
import { WebsiteTrafficExchange } from "./blocks/component";
import { Content } from "./blocks/content";
import { EarnMoney } from "./blocks/earn_money";
import { Features } from "./blocks/features";
import { Hero } from "./blocks/hero";
import { ImprintView } from "./blocks/imprintView";
import { InfoSection } from "./blocks/infosSection";
import { Interests } from "./blocks/interests";
import { Testimonial } from "./blocks/testimonial";
import { tinaField } from "tinacms/dist/react";

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
          return (
            <div key={i} data-tina-field={tinaField(block)}>
              <Block {...block} />
            </div>
          );
        })
        : null}
    </>
  );
};

const Block = (block: PageBlocks) => {
  switch (block.__typename) {
    case "PageBlocksBanner":
      return <Banner data={block} />;
    case "PageBlocksInterests":
      return <Interests data={block} />;
    case "PageBlocksInfo":
      return <InfoSection data={block} />;
    case "PageBlocksCard":
      return <Card data={block} />;
    case "PageBlocksContent":
      return <Content data={block} />;
    case "PageBlocksHero":
      return <Hero data={block} />;
    case "PageBlocksFeatures":
      return <Features data={block} />;
    case "PageBlocksTestimonial":
      return <Testimonial data={block} />;
    case "PageBlocksImprint":
      return <ImprintView data={block} />;
    case "PageBlocksTrafficExchange":
      return <WebsiteTrafficExchange data={block} />;
    case "PageBlocksEarnMoney":
      return <EarnMoney data={block} />;
    default:
      return null;
  }
};
