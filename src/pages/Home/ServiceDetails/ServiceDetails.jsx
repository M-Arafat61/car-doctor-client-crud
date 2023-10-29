import { useLoaderData } from "react-router-dom";
import banner from "../../../assets/images/banner/4.jpg";
import ServiceDetailsCard from "./ServiceDetailsCard";

const ServiceDetails = () => {
  const serviceData = useLoaderData();
  return (
    <>
      <div className='relative mb-20'>
        <img className='h-[270px] w-full object-cover' src={banner} alt='' />
        <div className='absolute top-0 left-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-1/2 h-full flex  items-center'>
          <div>
            <h3 className='text-4xl font-bold text-white ml-12'>
              {serviceData.title}
            </h3>
          </div>
        </div>
      </div>

      {<ServiceDetailsCard serviceDetails={serviceData}></ServiceDetailsCard>}
    </>
  );
};

export default ServiceDetails;
