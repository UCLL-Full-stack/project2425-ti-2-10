


const getCustomerById = (customerId: string) => {
    const token = JSON.parse(localStorage.getItem("loggedInUser"))?.token;

    return fetch(process.env.NEXT_PUBLIC_API_URL + `/customer/${customerId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
  }

  const getCustomerByEmail = (email: string) => {
    const token = JSON.parse(localStorage.getItem("loggedInUser"))?.token;

    return fetch(process.env.NEXT_PUBLIC_API_URL + `/customer/${email}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
  }
  const CustomerService = {
    getCustomerById,getCustomerByEmail
  };
  
  export default CustomerService;