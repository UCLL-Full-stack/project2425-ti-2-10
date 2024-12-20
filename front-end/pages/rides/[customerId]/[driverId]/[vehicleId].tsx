import { useRouter } from "next/router";
import useSWR from "swr";
import RideForm from "@components/ride/rideForm"; 
import Head from "next/head";
import Header from "@components/header";
import DriverService from "@services/DriverService";
import VehicleService from "@services/VehicleService";
import CustomerService from "@services/CustomerService";

const CreateRide = () => {
    const router = useRouter();
    const { driverId, vehicleId, customerId } = router.query;

    const fetcher = async (key: string) => {
        const [driverResponse, vehicleResponse, customerResponse] = await Promise.all([
            DriverService.getDriverById(driverId as string),
            VehicleService.getVehicleById(vehicleId as string),
            CustomerService.getCustomerById(customerId as string)
        ]);

        if (driverResponse.ok && vehicleResponse.ok && customerResponse.ok) {
            const [driver, vehicle, customer] = await Promise.all([
                driverResponse.json(),
                vehicleResponse.json(),
                customerResponse.json(),
            ]);
            return {driver, vehicle, customer};
        }
    };

    const { data, isLoading, error } = useSWR("ride", fetcher);

    return (
        <>
            <Head>
                <title>Book Ride</title>
            </Head>
            <Header />
            <main className="p-6 min-h-screen flex flex-col items-center">
                <h1>Book Ride</h1>
                <section className="w-50">
                    {error && <p className="text-danger">{error}</p>}
                    {isLoading && <p className="text-green-800">Loading...</p>}
                    {data && (
                        <RideForm
                            driver={data.driver}
                            vehicle={data.vehicle}
                            customer = {data.customer}
                        />
                    )}
                </section>
            </main>
        </>
    );
};

export default CreateRide;
