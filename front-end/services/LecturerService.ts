import { User } from "@types";

const getAllLecturers = () => {
  const token = JSON.parse(localStorage.getItem("loggedInUser"))?.token;
  console.log(process.env.NEXT_PUBLIC_API_URL + '/probeersel')
  return fetch(process.env.NEXT_PUBLIC_API_URL + "/lecturers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorisation: `Bearer ${token}`,
    },
  });
};

const getLecturerById = (lecturerId: string) => {
  return fetch(process.env.NEXT_PUBLIC_API_URL + `/lecturers/${lecturerId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const LecturerService = {
  getAllLecturers,
  getLecturerById,
};

export default LecturerService;
