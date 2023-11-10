import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import { Link } from "react-router-dom";
import useAxiosInstance from "../../../hooks/useAxiosInstance";

const Services = () => {
  const [services, setServices] = useState([]);
  const axiosInstance = useAxiosInstance();

  useEffect(() => {
    axiosInstance
      .get("/services")
      .then(res => {
        console.log(res.data);
        setServices(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [axiosInstance]);

  return (
    <div className='space-y-5 my-10'>
      <div className='text-center space-y-5'>
        <h4 className='text-color-main font-bold text-2xl'>Service</h4>
        <h2 className='text-5xl font-bold'>Our Service Area</h2>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {services.map(service => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>

      <div className='mx-auto  text-center'>
        <Link>
          <button className='btn btn-outline text-color-main  font-bold '>
            More Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
