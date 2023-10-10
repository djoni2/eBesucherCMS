import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Hero } from "../components/blocks/hero";
import { Layout } from "../components/layout";
import { Container } from "../components/util/container";
import { Section } from "../components/util/section";
import { Actions } from "../components/util/actions";

export default function FourOhFour() {
  return (
    // <Layout rawData={""} data={""}>
    <Section>
      <Container
        size="large"
        className="grid grid-cols-1 md:grid-cols-5 gap-14 items-center justify-center"
      >
        <div className="row-start-2 md:row-start-1 md:col-span-3 text-center md:text-left">
            <h3
              className={`w-full relative	mb-10 text-5xl font-extrabold tracking-normal leading-tight title-font`}
            >
              <span
                className={`bg-clip-text text-transparent`}
              >
                404 – Page Not Found
              </span>
            </h3>
            <div
              className={`prose prose-lg mx-auto md:mx-0 mb-10`}
            >
              <TinaMarkdown content={"Oops! It seems there's nothing here, how embarrassing."} />
            </div>
          <Actions
              className="justify-center md:justify-start py-2"
              // parentColor={data.color}
              // actions={data.actions}
            /> 
        </div>
      </Container>
    </Section>
    // </Layout>
  );
}
