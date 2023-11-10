import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  // console.log(service);
  const { img, title, price, _id } = service;
  return (
    <div className='relative flex flex-col mt-6 text-gray-700 bg-white shadow-md rounded-xl bg-clip-border'>
      <div className='p-6'>
        <img src={img} alt='' />
      </div>
      <h5 className='pl-6 block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal '>
        {title}
      </h5>
      <div className='p-6 pt-0 flex items-center justify-between'>
        <div>
          <p className='block font-sans text-lg antialiased text-color-main leading-relaxed font-semibold'>
            Price: ${price}
          </p>
        </div>
        <Link
          to={`/service/${_id} `}
          className=' text-[#FF3811] !transition-colors hover:!text-pink-500'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            aria-hidden='true'
            className='w-7 h-7'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
