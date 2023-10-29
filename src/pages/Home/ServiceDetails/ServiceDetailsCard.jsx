import { Link } from "react-router-dom";
import thumb from "../../../assets/images/banner/2.jpg";
import { BsPlayCircle } from "react-icons/bs";
import { AiOutlineFilePdf } from "react-icons/ai";
import logo from "../../../assets/logo.svg";

const ServiceDetailsCard = ({ serviceDetails }) => {
  console.log(serviceDetails);
  const { _id, img, description, price, title, facility } = serviceDetails;
  return (
    <div className='flex gap-5 mb-20'>
      <div className='w-3/4 space-y-5'>
        <img className='rounded-lg w-full' src={img} alt='' />
        <h2 className='text-3xl font-bold'>{title}</h2>
        <p className='text-start'>{description}</p>
        <div className='grid grid-cols-2 gap-5'>
          {facility.map((facilities, index) => (
            <div
              key={index}
              className='p-6 bg-gray-100 rounded-t-lg border-t-4 border-[#FF3811]'
            >
              <h2 className='text-lg font-bold'>{facilities.name}</h2>
              <p>{facilities.details}</p>
            </div>
          ))}
        </div>
        <p>{description}</p>
        <div className=' space-y-5'>
          <h3 className='text-3xl font-bold'>3 Simple Steps to Process</h3>
          <p>{description}</p>
          <div className='flex p-5 gap-5 justify-around'>
            <div className='flex flex-col items-center text-center space-y-3 border p-5 rounded-lg'>
              {/* <PiNumberCircleOneThin /> */}
              <div className='bg-gray-100 p-3 rounded-full'>
                <p className=' rounded-full p-2 w-10 bg-color-main text-white font-bold'>
                  01
                </p>
              </div>
              <h2 className='text-xl font-bold'>Step One</h2>
              <p>
                It uses a dictionary <br /> of over 200 .
              </p>
            </div>
            <div className='flex flex-col items-center text-center space-y-3 border p-5 rounded-lg'>
              <div className='bg-gray-100 p-3 rounded-full'>
                <p className=' rounded-full p-2 w-10 bg-color-main text-white font-bold'>
                  02
                </p>
              </div>
              <h2 className='text-xl font-bold'>Step Two</h2>
              <p>
                It uses a dictionary <br /> of over 200 .
              </p>
            </div>
            <div className='flex flex-col items-center text-center space-y-3 border p-5 rounded-lg'>
              <div className='bg-gray-100 p-3 rounded-full'>
                <p className=' rounded-full p-2 w-10 bg-color-main text-white font-bold'>
                  03
                </p>
              </div>
              <h2 className='text-xl font-bold'>Step Three</h2>
              <p>
                It uses a dictionary <br /> of over 200 .
              </p>
            </div>
          </div>
        </div>
        <div className='relative flex items-center justify-center'>
          <img className='rounded-lg w-full' src={thumb} alt='' />
          <div className='absolute '>
            <BsPlayCircle className='text-7xl text-color-main' />
          </div>
        </div>
      </div>
      <div className='w-1/4'>
        <div className='bg-black p-10 space-y-5'>
          <h2 className='text-white text-xl font-bold '>Download</h2>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <AiOutlineFilePdf className='text-2xl text-white' />
              <div>
                <h4 className='font-bold text-white'>Our Brochure</h4>
                <p className='text-gray-300'>Download</p>
              </div>
            </div>
            <div className='bg-color-main'>
              <Link className=' text-white'>
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
          <div className='flex items-center justify-between'>
            <div className='flex items-center  gap-3'>
              <AiOutlineFilePdf className='text-2xl text-white' />
              <div>
                <h4 className='font-bold text-white'>Company Details</h4>
                <p className='text-gray-300'>Download</p>
              </div>
            </div>
            <div className='bg-color-main'>
              <Link className=' text-white'>
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
        </div>
        <div className='bg-black text-white pt-10 pb-10  mt-10 mb-10 flex flex-col mx-auto items-center space-y-5'>
          <img src={logo} alt='' />
          <h2 className='font-bold text-center text-lg'>
            Need Help? We Are Here <br /> To Help You
          </h2>
          <div className='bg-white text-black relative flex flex-col w-3/4 pt-14 pb-16 items-center justify-center'>
            <h2 className='font-bold text-lg'>
              <span className='text-color-main'>Car Doctor</span> Special
            </h2>
            <p>
              Save up to
              <span className='text-color-main font-bold'> 60% off</span>
            </p>

            <div className='absolute -bottom-5 bg-color-main p-2 rounded-lg text-white font-bold text-lg'>
              <p>Get A Quote</p>
            </div>
          </div>
        </div>
        <h4 className='text-3xl font-bold mb-3'>Price ${price}</h4>
        <Link to={`checkout/${_id}`}>
          <button className='w-full px-4 py-2  bg-gradient-to-r from-color-main to-color-main hover:from-pink-600 hover:to-yellow-500 text-white text-xl rounded-lg '>
            Proceed Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetailsCard;
