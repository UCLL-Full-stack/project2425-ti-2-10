import { useRouter } from "next/router";
import useSWR from "swr";
import RideForm from "@components/ride/rideForm";
import DriverService from "@services/DriverService";
import VehicleService from "@services/VehicleService";
import { useEffect, useState } from "react";
import { Customer, Driver, Vehicle } from "@types";
import CustomerService from "@services/CustomerService";

const CreateRidePage = () => {
  const router = useRouter();
  const { vehicleId, driverId } = router.query;
  const customerObj = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
  const fetcher = async () => {
    if (!router.isReady || !vehicleId || !driverId) return null;

    const [vehicleResponse, driverResponse, customerResponse] = await Promise.all([
      VehicleService.getVehicleById(vehicleId as string),
      DriverService.getDriverById(driverId as string),
      CustomerService.getCustomerByEmail(customerObj.email as string),
    ]);

    if (!vehicleResponse.ok || !driverResponse.ok || !customerResponse.ok) {
      throw new Error("Failed to fetch data.");
    }

    const [vehicle, driver, customer] = await Promise.all([
      vehicleResponse.json(),
      driverResponse.json(),
      customerResponse.json()
    ]);

    

    return { vehicle, driver, customer };
  };

  const { data, error, isLoading } = useSWR(
    router.isReady && vehicleId && driverId ? "rideDetails" : null,
    fetcher
  );

  if (!router.isReady) return <p>Loading...</p>; //blijft eindeloos laden ..
  if (error) return <p>Error loading data: {error.message}</p>;
  if (isLoading || !data) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1>Book a Ride</h1>
      <RideForm driver={data.driver} vehicle={data.vehicle} customer={data.customer} />
    </div>
  );
};

export default CreateRidePage;
