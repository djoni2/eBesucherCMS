import { Container } from "../components/util/container";
import { Section } from "../components/util/section";
import { client } from "../tina/__generated__/client";
import { Layout } from "../components/layout";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { Banner } from "../components/blocks/banner";
import { InfoSection } from "../components/blocks/infosSection";
import { Card } from "../components/blocks/card";

export default function ToolPage(
    props: InferGetStaticPropsType<typeof getStaticProps>
) {
    const tools = props.data.page;

    return (
        <>
            <Layout>
                <Section className="flex-1">
                    {tools && <Banner data={tools.blocks[0]} />}
                    <Container size="medium" width="medium">
                        <Card data={tools.blocks[1]} />
                    </Container>
                </Section>
            </Layout>
        </>
    );
}

export const getStaticProps = async () => {

    const tinaProps = await client.queries.contentQuery({
        relativePath: `tools.md`,
    });
    return {
        props: {
            ...tinaProps,
            enableVisualEditing: process.env.VERCEL_ENV === "preview",
        },
    };
};

export type PostsType = InferGetStaticPropsType<
    typeof getStaticProps
>["data"]['page'];
