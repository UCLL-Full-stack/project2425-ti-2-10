import { Ride, User } from "@types";
import { log } from "console";
import dayjs from "dayjs";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
    rides: Ride[];
};

const RideOverviewTable: React.FC<Props> = ({ rides }: Props) => {
    const [loggedInUser, setLoggedInUser] = useState<User>(null);

    useEffect(() => {
        setLoggedInUser(JSON.parse(localStorage.getItem("loggedInUser")));
        console.log(loggedInUser);
    }, []);

    return (
        <>
            {rides && (
                <table className="mt-4">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Startlocation</th>
                            <th scope="col">Destination</th>
                            <th scope="col">Driver</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Vehicle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rides.map((ride, index) => (
                            <tr key={index}>
                                <td>{dayjs(ride.date).format("DD-MM-YYYY HH:mm") }</td>
                                <td>{ride.startLocation}</td>
                                <td>{ride.destination}</td>
                                <td>{ride.driver.user.firstName + ' '+ ride.driver.user.lastName}</td>
                                <td>{ride.customer.user.firstName + ' '+ ride.customer.user.lastName}</td>
                                <td>{ride.vehicle.brand +' ' +ride.vehicle.licenseplate}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default RideOverviewTable;
