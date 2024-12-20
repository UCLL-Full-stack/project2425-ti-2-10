

const getAllVehicles = () => {
    const token = JSON.parse(localStorage.getItem("loggedInUser"))?.token;
    console.log(process.env.NEXT_PUBLIC_API_URL + '/vehicles')
    return fetch(process.env.NEXT_PUBLIC_API_URL + "/vehicles", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const getVehicleById = (vehicleId: string) => {
    const token = JSON.parse(localStorage.getItem("loggedInUser"))?.token;

    return fetch(process.env.NEXT_PUBLIC_API_URL + `/vehicles/${vehicleId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
  }




  const VehicleService = {
    getAllVehicles,getVehicleById,
  };
  
  export default VehicleService;