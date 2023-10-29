import check from "../../../assets/icons/check.svg";
// import Group from "../../../assets/icons/logo.eps";
import Wrench from "../../../assets/icons/Wrench.svg";
import person from "../../../assets/icons/person.svg";
import group from "../../../assets/icons/group.svg";
import deliveryt from "../../../assets/icons/deliveryt.svg";

const Features = () => {
  return (
    <div className='my-10'>
      <div className='text-center space-y-5'>
        <h4 className='text-color-main font-bold text-2xl'>Core Features</h4>
        <h2 className='text-5xl font-bold'>Why Choose Us</h2>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>

      <div className='flex items-center justify-between p-16'>
        <div className='shadow-md p-5 flex flex-col justify-center font-bold gap-2'>
          <img className='w-22 h-16' src={group} alt='' />
          <p>Expert Team</p>
        </div>
        <div className='shadow-md p-5 flex flex-col justify-center font-bold gap-2'>
          <img className='w-22 h-16' src={deliveryt} alt='' />
          <p>Timely Delivery</p>
        </div>
        <div className='shadow-md p-5 flex flex-col justify-center font-bold gap-2'>
          <img className='w-22 h-16' src={person} alt='' />
          <p>24/7 Support</p>
        </div>
        <div className='shadow-md p-5 flex flex-col justify-center font-bold gap-2'>
          <img className='w-22 h-16' src={Wrench} alt='' />
          <p>Best Equipment</p>
        </div>
        <div className='shadow-md p-5 flex flex-col justify-center font-bold gap-2'>
          <img className='w-22 h-16' src={check} alt='' />
          <p>100% Guranty</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
