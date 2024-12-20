import { User, Vehicle } from "@types";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
    vehicles: Vehicle[];
};

const VehicleOverviewTable: React.FC<Props> = ({ vehicles }: Props) => {
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
                            <th scope="col">Chassisnumber</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehicles.map((vehicle, index) => (
                            <tr key={index}>
                                <td>{vehicle.brand}</td>
                                <td>{vehicle.licenseplate}</td>
                                <td>{vehicle.chassisnumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default VehicleOverviewTable;
