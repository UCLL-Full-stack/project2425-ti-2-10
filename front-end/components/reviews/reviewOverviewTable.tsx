import { Driver, User } from "@types";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
    driver: Driver;
};
const ReviewOverviewTable: React.FC<Props> = ({ driver }: Props) => {
    const [loggedInUser, setLoggedInUser] = useState<User>(null);

    useEffect(() => {
        setLoggedInUser(JSON.parse(localStorage.getItem("loggedInUser")));
        console.log(loggedInUser);
    }, []);

    return (
        <>
            {driver.reviews && (
                <table className="mt-4">
                    <thead>
                        <tr>
                            <th scope="col">text</th>
                            <th scope="col">rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {driver.reviews.map((review, index) => (
                            <tr key={index}>
                                <td>{review.text}</td>
                                <td>{review.rating}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default ReviewOverviewTable;
