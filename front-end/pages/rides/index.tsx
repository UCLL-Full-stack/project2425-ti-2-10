
import Header from "@components/header";
import RideOverviewTable from "@components/ride/rideOverviewTable";
import RideService from "@services/RideService";
import { Ride } from "@types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import router from "next/router";
import { useEffect, useState } from "react";


const Rides: React.FC = () => {
    const [rides, setRides] = useState<Array<Ride>>();
    const [error, setError] = useState<string>();
    const [selectedRide, setSelectedRide] = useState<Ride>(null);

    const getRides = async () => {
        setError("");
        const response = await RideService.getAllRides();

        if (!response.ok) {
            if(response.status === 401){
                setError("You are not authorized to use this page.");
            }
            setError(response.statusText);
        } else {
            const rides = await response.json();
            setRides(rides);
        }
    };

    useEffect(() => {
        getRides();
    }, []);

    return (
        <>
            <Head>
                <title>Rides</title>
            </Head>
            <Header />
            <main className="p-6 min-h-screen flex flex-col items-center">
                <h1>Rides</h1>
                <section>
                    {error && <div className="text-red-800">{error}</div>}
                    {rides && (
                        <RideOverviewTable
                            rides={rides}
                        />
                    )}
                </section>
                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mt-4"
                    onClick={() => router.push("/rides/vehicles")}>
                    Book ride
                </button>

                
                
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

export default Rides;