import Head from "next/head";
import Header from "@components/header";
import UserLoginForm from "@components/users/UserLoginForm";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Login: React.FC = () => {

    
    const { t } = useTranslation();
    return (
        <>
            <Head>
                <title>User Signup</title>
            </Head>
            <Header />
            <main>
                <section className="p-6 min-h-screen flex flex-col items-center">
                    <UserLoginForm />
                </section>
                <p>{t("app.title")}</p>
            </main>
        </>
    );
};


export const getServerSideProps = async ({ locale }) => {
    return {
      props: {
        ...(await serverSideTranslations(locale || "en", ["common"])),
      },
    };
  };
  
export default Login;
