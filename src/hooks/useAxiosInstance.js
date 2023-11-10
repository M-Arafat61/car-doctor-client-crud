import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const instance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const useAxiosInstance = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    instance.interceptors.response.use(
      function (response) {
        console.log("from axios", response);
        return response;
      },
      function (error) {
        console.log("from axios error", error);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("logout the user");
          logout()
            .then(() => {
              navigate("/login");
            })
            .catch(error => console.log(error));
        }
      }
    );
  }, [logout, navigate]);

  return instance;
};

export default useAxiosInstance;
