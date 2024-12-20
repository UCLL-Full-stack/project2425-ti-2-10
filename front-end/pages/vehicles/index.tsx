import DriverOverviewTable from "@components/drivers/DriverOverViewtable";
import Header from "@components/header";
import VehicleOverviewTable from "@components/vehicles/vehicleOverviewTable";
import DriverService from "@services/DriverService";
import VehicleService from "@services/VehicleService";
import { Driver, Vehicle } from "@types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useEffect, useState } from "react";


const Vehicles: React.FC = () => {
    const [vehicles, setVehicles] = useState<Array<Vehicle>>();
    const [error, setError] = useState<string>();

    const getVehicles = async () => {
        setError("");
        const response = await VehicleService.getAllVehicles();

        if (!response.ok) {
            if(response.status === 401){
                setError("You are not authorized to use this page.");
            }
            setError(response.statusText);
        } else {
            const vehicles = await response.json();
            setVehicles(vehicles);
        }
    };

    useEffect(() => {
        getVehicles();
    }, []);

    return (
        <>
            <Head>
                <title>Vehicles</title>
            </Head>
            <Header />
            <main className="p-6 min-h-screen flex flex-col items-center">
                <h1>Vehicles</h1>
                <section>
                    {error && <div className="text-red-800">{error}</div>}
                    {vehicles && (
                        <VehicleOverviewTable
                            vehicles={vehicles}
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

export default Vehicles;