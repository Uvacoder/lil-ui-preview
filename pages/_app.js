import Head from "next/head";
import {useRouter} from "next/router";
import { DefaultSeo } from "next-seo";
import "styles/app.scss";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const siteURL = process.env.NODE_ENV == "production" ? "https://lil.rishimohan.me" : "http://localhost:3000";
  const canonicalUrl = (
    siteURL + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  return (
    <>
      <DefaultSeo
        title="lil – ui components"
        description="minimalistic style it yourself UI components for your React project"
        canonical={canonicalUrl}
        openGraph={{
          site_name: "lil – ui components",
          title: "lil – ui components",
          description:
            "minimalistic style it yourself UI components for your React project",
          images: [
            {
              url: `${siteURL}/meta-image.jpg`,
              width: 800,
              height: 600,
              alt: "lil – ui components",
            },
          ],
        }}
        twitter={{
          handle: "@thelifeofrishi",
          site: "@thelifeofrishi",
          cardType: "summary_large_image",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: `${siteURL}/icons/web-icons/favicon.ico`,
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
