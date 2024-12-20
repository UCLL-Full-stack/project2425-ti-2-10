import { Ride } from "@types";


const getAllRides = () => {
    const token = JSON.parse(localStorage.getItem("loggedInUser"))?.token;
    console.log(process.env.NEXT_PUBLIC_API_URL + '/rides')
    return fetch(process.env.NEXT_PUBLIC_API_URL + "/rides", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization : `Bearer ${token}`,
      },
    });
  };

  const createRide = (ride: Ride) => {
    const token = JSON.parse(localStorage.getItem("loggedInUser"))?.token;
    return fetch(process.env.NEXT_PUBLIC_API_URL + "/rides", {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
            Authorization : `Bearer ${token}`,
        },
        body: JSON.stringify(ride),
    });
};



  const RideService = {
    getAllRides,createRide
  };
  
  export default RideService;