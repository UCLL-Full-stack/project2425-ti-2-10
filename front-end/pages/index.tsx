import Head from "next/head";
import Image from "next/image";
import Header from "@components/header";
import styles from "@styles/home.module.css";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: React.FC = () => {

    
    const { t } = useTranslation();

    return (
        <>
            <Head>
                <title>{t("app.title")}</title>
                <meta name="description" content="ComfortRide App" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <main className="text-center md:p-24 p-6 min-h-screen">
                <span className="flex flex-row justify-center items-center">
                    
                    <h1 className="pl-6 text-4xl text-gray-800">{t("header.welcome")}</h1>
                </span>

                <div className="pt-6">
                    <p>
                       
                    </p>
                </div>
            </main>
        </>
    );
};

export default Home;

export const getServerSideProps = async (context) => {
    const {locale} = context;
    return{
        props: {
            ...(await serverSideTranslations(locale ?? "en", ["common"])), //als er geen locale wordt gekozen gebruik dan engels
        }
    }
}

