

const getAllDrivers = () => {
    const token = JSON.parse(localStorage.getItem("loggedInUser"))?.token;
    console.log("Token:", token);
    return fetch(process.env.NEXT_PUBLIC_API_URL + "/drivers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization : `Bearer ${token}`,
      },
    });
  };

  const getDriverById = (driverId: string) => {
    const token = JSON.parse(localStorage.getItem("loggedInUser"))?.token;

    return fetch(process.env.NEXT_PUBLIC_API_URL + `/drivers/${driverId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
  }
  




  const DriverService = {
    getAllDrivers,getDriverById
  };
  
  export default DriverService;