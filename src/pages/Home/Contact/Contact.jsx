import { AiOutlineCalendar } from "react-icons/ai";
import { BsMegaphone } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className='p-20 flex items-center justify-between text-white bg-black'>
      <div className='flex items-center'>
        <AiOutlineCalendar className='text-5xl mr-4' />
        <div className='space-y-2'>
          <p>We are open monday-friday</p>
          <p className='text-xl font-bold'>7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className='flex items-center'>
        <BsMegaphone className='text-5xl mr-4' />
        <div className='space-y-2'>
          <p>Have a question?</p>
          <p className='text-xl font-bold'>+2546 251 2658</p>
        </div>
      </div>
      <div className='flex items-center'>
        <FaMapLocationDot className='text-5xl mr-4' />
        <div className='space-y-2'>
          <p>Need a repair? our address</p>
          <p className='text-xl font-bold'>Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
