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
        <title>{rawData.page.meta_title?rawData.page.meta_title:'Surf the Web | Earn Money | Get New Visitors | eBesucher.com'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="canonical" href={`https://www.ebesucher.com${currentUrl}`} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="robots" content={`${rawData.page.meta_robots?rawData.page.meta_robots:"NO INDEX, NO FOLLOW"}`} />
        <meta name="description" content={`${rawData.page.meta_description?rawData.page.meta_description:'Tell us your interests, discover amazing websites and get paid for it - or get free visitors to your website, blog or video!'}`} />
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
