import { User, Vehicle } from "@types";
import Link from "next/link";
import router from "next/router";
import { useEffect, useState } from "react";

type Props = {
    vehicles: Vehicle[];
    selectVehicle: (vehicle: Vehicle) => void;
};

const VehicleForBookingOverviewTable: React.FC<Props> = ({ vehicles,selectVehicle }: Props) => {
    const [loggedInUser, setLoggedInUser] = useState<User>(null);

    useEffect(() => {
        setLoggedInUser(JSON.parse(localStorage.getItem("loggedInUser")));
        console.log(loggedInUser);
    }, []);

    return (
        <>
            {vehicles && (
                <table className="mt-4">
                    <thead>
                        <tr>
                            <th scope="col">Brand</th>
                            <th scope="col">License Plate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehicles.map((vehicle, index) => (
                            <tr key={index}
                            onClick={()=> {
                                selectVehicle(vehicle);
                                setTimeout(() => router.push(`/rides/create/${vehicle.id}`));
                            }}>
                                <td>
                                <Link
                                 href={{
                                    pathname: "/drivers", // Next step route
                                    query: { vehicleId: vehicle.id, customerId: loggedInUser?.id }, // Pass vehicle ID and customer ID
                                    }}
                                >
                                {vehicle.brand}
                                </Link>
                                </td>
                                <td>{vehicle.licenseplate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default VehicleForBookingOverviewTable;
