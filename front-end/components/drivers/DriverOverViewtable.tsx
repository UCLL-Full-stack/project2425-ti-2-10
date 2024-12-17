import { Driver } from "@types";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
    drivers: Array<Driver>;
    selectDriver: (driver: Driver) => void;
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
                            <th scope="col">E-mail</th>
                            <th scope="col">Expertise</th>
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default DriverOverviewTable;