import DriverOverviewTable from "@components/drivers/DriverOverViewtable";
import Header from "@components/header";
import DriverService from "@services/DriverService";
import { Driver } from "@types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useEffect, useState } from "react";


const Drivers: React.FC = () => {
    const [drivers, setDrivers] = useState<Array<Driver>>();
    const [error, setError] = useState<string>();
    const [selectedDriver, setSelectedDriver] = useState<Driver>(null);

    const getDrivers = async () => {
        setError("");
        const response = await DriverService.getAllDrivers();

        if (!response.ok) {
            if(response.status === 401){
                setError("You are not authorized to use this page.");
            }
            setError(response.statusText);
        } else {
            const drivers = await response.json();
            setDrivers(drivers);
        }
    };

    useEffect(() => {
        getDrivers();
    }, []);

    return (
        <>
            <Head>
                <title>Drivers</title>
            </Head>
            <Header />
            <main className="p-6 min-h-screen flex flex-col items-center">
                <h1>Drivers</h1>
                <section>
                    {error && <div className="text-red-800">{error}</div>}
                    {drivers && (
                        <DriverOverviewTable
                            drivers={drivers}
                            selectDriver={setSelectedDriver}
                        />
                    )}
                </section>

                
                
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

export default Drivers;