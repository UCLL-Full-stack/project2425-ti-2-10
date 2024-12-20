import { Driver } from "@types";
import Link from "next/link";
import { format } from 'date-fns';
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import router from "next/router";

type Props = {
    drivers: Array<Driver>;
    selectDriver: (driver: Driver) => void;
    vehicleId: string;
};

const DriverForBookingOverviewTable: React.FC<Props> = ({
    
    drivers,
    selectDriver,
    vehicleId,
}: Props) => {
    return (
        <>
            {drivers && (
                <table className="text-left">
                    <thead>
                        <tr>
                            <th scope="col">Firstname</th>
                            <th scope="col">Lastname</th>
                        </tr>
                    </thead>
                    <tbody>
                        {drivers.map((driver, index) => (
                            <tr
                                key={index}
                                onClick={() => {selectDriver(driver); router.push(`/rides/create/${vehicleId}/${driver.id}`)}
                                    
                                }
                                role="button">
                                <td>{driver.user?.firstName}</td>
                                <td>{driver.user?.lastName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default DriverForBookingOverviewTable;