import { Driver } from "@types";
import Link from "next/link";
import { format } from 'date-fns';
import { useEffect, useState } from "react";
import dayjs from "dayjs";

type Props = {
    drivers: Array<Driver>;
    selectDriver: (driver: Driver) => void;
};
const calculateMeanRating = (reviews: Array<{ rating: number }>): number => {
    if (!reviews || reviews.length === 0) return 0;

    let total = 0;
    for (let i = 0; i < reviews.length; i++) {
        total += reviews[i].rating;
    }

    return total / reviews.length;
};

const DriverOverviewTable: React.FC<Props> = ({
    
    drivers,
    selectDriver,
}: Props) => {
    return (
        <>
            {drivers && (
                <table className="text-left">
                    <thead>
                        <tr>
                            <th scope="col">Firstname</th>
                            <th scope="col">Lastname</th>
                            <th scope="col">Birthay</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Phonenumber</th>
                            <th scope="col">Mean rating</th>

                        </tr>
                    </thead>
                    <tbody>
                        {drivers.map((driver, index) => (
                            <tr
                                key={index}
                                onClick={() => selectDriver(driver)}
                                role="button">
                                <td>{driver.user?.firstName}</td>
                                <td>{driver.user?.lastName}</td>
                                <td>{driver.user?.email}</td>
                                <td>{dayjs(driver.user?.birthday).format("DD-MM-YYYY HH:mm") }</td>
                                <td>{driver.user?.phoneNumber}</td>
                                <td>{driver.reviews ? calculateMeanRating(driver.reviews).toFixed(2):'N/A'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default DriverOverviewTable;