import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  //   console.log(services);
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
