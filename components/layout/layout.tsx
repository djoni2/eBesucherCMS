import React from "react";
import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
import { Theme } from "./theme";
import layoutData from "../../content/global/index.json";
import { Global } from "../../tina/__generated__/types";
import { useRouter } from 'next/router';

export const Layout = ({
  rawData = {},
  data = layoutData,
  children,
}: {
  rawData?: object;
  data?: Omit<Global, "id" | "_sys" | "_values">;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const currentUrl = router.asPath;
  return (
    <>
      <Head>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/*@ts-ignore*/}
        <title>{rawData?.page.meta_title ? rawData.page.meta_title : data.global_seo.meta_title ? data.global_seo.meta_title: ''}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-  width" />
        <link rel="canonical" href={`https://www.ebesucher.com${currentUrl}`} />
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/*@ts-ignore*/}
        <meta name="robots" content={`${rawData?.page.meta_robots ? rawData.page.meta_robots : "NO INDEX, NO FOLLOW"}`} />
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/*@ts-ignore*/}
        <meta name="description" content={`${rawData?.page.meta_description ? rawData.page.meta_description : data.global_seo.meta_description?data.global_seo.meta_description: 'Tell us your interests, discover amazing websites and get paid for it - or get free visitors to your website, blog or video!'}`} />

        {/* types use for sharing */}
        <meta name="og:type" property="og:type" content="website" />
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/*@ts-ignore*/}
        <meta name="og:title" property="og:title" content={`${rawData?.page.meta_title ? rawData.page.meta_title : data.global_seo.meta_title?data.global_seo.meta_title: ""}`} />
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/*@ts-ignore*/}
        <meta name="og:description" property="og:description" content={`${rawData?.page.meta_description ? rawData.page.meta_description :data?.global_seo.meta_description?data?.global_seo.meta_description: ''}`} />
        <meta name="og:site_name" property="og:site_name" content="eBesucher.com" />
        <meta name="og:image" property="og:image" content={`${data?.global_seo.socialImage?data?.global_seo.socialImage:"https://www.ebesucher.com/images/open-graph/ebesucher-open-graph-en.png"}`} />
        <meta name="og:phone_number" property="og:phone_number" content="+49-30-5557-99911" />
        <meta name="og:fax_number" property="og:fax_number" content="+49-30-5557-99917" />

        {/* Use for sharing in twitter */}

        <meta name="twitter:card" property="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" property="twitter:domain" content="https://www.ebesucher.com" />
        <meta name="twitter:url" property="twitter:url" content={`https://www.ebesucher.com${currentUrl}`} />
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/*@ts-ignore*/}
        <meta name="twitter:title" property="twitter:title" content={`${rawData?.page.meta_title ? rawData?.page.meta_title : data?.global_seo.meta_title?data?.global_seo.meta_title: ""}`} />
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/*@ts-ignore*/}
        <meta name="twitter:description" property="twitter:description" content={`${rawData?.page.meta_description ? rawData?.page.meta_description :data?.global_seo.meta_description?data?.global_seo.meta_description: ''}`} />
        <meta name="twitter:image" property="twitter:image" content={`${data?.global_seo.socialImage?data?.global_seo.socialImage:"https://www.ebesucher.com/images/open-graph/ebesucher-open-graph-en.png"}`} />
      </Head>
      <Theme data={``}>
        <div
          className={`min-h-screen flex flex-col`}
        >
          <Header data={data?.header} />
          <div className="flex-1 text-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-1000 flex flex-col">
            {children}
          </div>
          <Footer
            rawData={rawData}
            data={data?.footer}
            icon={data?.header}
          />
        </div>
      </Theme>
    </>
  );
};
