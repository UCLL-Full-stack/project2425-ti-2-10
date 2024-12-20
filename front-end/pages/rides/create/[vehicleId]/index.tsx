import DriverForBookingOverviewTable from "@components/drivers/DriverForBookingOverviewTable";
import VehicleForBookingOverviewTable from "@components/vehicles/vehicleForBookingOverviewTable";
import DriverService from "@services/DriverService";
import VehicleService from "@services/VehicleService";
import { Driver, Vehicle } from "@types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DriversPage = () => {
  const [drivers, setDrivers] = useState([]);
  const [error, setError] = useState<string>();
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);

  
  const router = useRouter();
  const { vehicleId } = router.query; 
  
  useEffect(() => {
    const fetchDrivers = async () => {
      const response = await DriverService.getAllDrivers();
      if (!response.ok) {
        setError(response.statusText);
      } else {
        const data = await response.json();
        setDrivers(data);
      }
    };
    fetchDrivers();
  }, []);

  return (
    <div className="p-6">
      <h1>Select a Vehicle</h1>
      {error && <p className="text-red-600">{error}</p>}
      <DriverForBookingOverviewTable drivers={drivers} selectDriver = {setSelectedDriver} vehicleId={vehicleId as string}/>
    </div>
  );
};

export default DriversPage;