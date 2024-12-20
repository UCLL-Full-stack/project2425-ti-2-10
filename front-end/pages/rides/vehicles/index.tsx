// list vehicles
import VehicleForBookingOverviewTable from "@components/vehicles/vehicleForBookingOverviewTable";
import VehicleService from "@services/VehicleService";
import { Vehicle } from "@types";
import { useEffect, useState } from "react";

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [error, setError] = useState<string>();
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  useEffect(() => {
    const fetchVehicles = async () => {
      const response = await VehicleService.getAllVehicles();
      if (!response.ok) {
        setError(response.statusText);
      } else {
        const data = await response.json();
        setVehicles(data);
      }
    };
    fetchVehicles();
  }, []);

  return (
    <div className="p-6">
      <h1>Select a Vehicle</h1>
      {error && <p className="text-red-600">{error}</p>}
      <VehicleForBookingOverviewTable vehicles={vehicles} selectVehicle = {setSelectedVehicle}/>
    </div>
  );
};

export default VehiclesPage;
