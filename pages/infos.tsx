import { Container } from "../components/util/container";
import { Section } from "../components/util/section";
import { client } from "../tina/__generated__/client";
import { Layout } from "../components/layout";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { Infos } from "../components/infos";
import { Banner } from "../components/blocks/banner";
import { InfoSection } from "../components/blocks/infosSection";

export default function InfoPage(
    props: InferGetStaticPropsType<typeof getStaticProps>
) {
    const infos = props.data.page;

    return (
        <>
            <Layout>
                <Section className="flex-1">
                    {infos && <Banner data={infos.blocks[0]} />}
                    <Container size="medium" width="medium">
                        <InfoSection data={infos.blocks[1]} />
                    </Container>
                </Section>
            </Layout>
        </>
    );
}

export const getStaticProps = async () => {

    const tinaProps = await client.queries.contentQuery({
        relativePath: `infos.md`,
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
