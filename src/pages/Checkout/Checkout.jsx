import { useLoaderData } from "react-router-dom";
import banner from "../../assets/images/checkout/checkout.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const Checkout = () => {
  const serviceData = useLoaderData();
  const { _id, price, title, img } = serviceData;
  const { user } = useContext(AuthContext);

  const handleOrderConfirmation = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;

    const booking = {
      customerName: name,
      email,
      img,
      phone,
      date,
      service: title,
      service_id: _id,
      price: price,
    };
    console.log(booking);

    axios
      .post("http://localhost:5000/bookings", booking)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  console.log(serviceData);
  return (
    <div>
      <div className='relative mb-20'>
        <img className='h-[270px] w-full object-cover' src={banner} alt='' />
        <div className='absolute top-0 left-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-1/2 h-full flex  items-center'>
          <div>
            <h3 className='text-4xl font-bold text-white ml-12'>Check Out</h3>
          </div>
        </div>
      </div>
      <h2 className='text-center text-3xl font-semibold text-color-main'>
        Book Service - {title}
      </h2>
      <form onSubmit={handleOrderConfirmation}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:p-10'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              type='text'
              name='name'
              defaultValue={user?.displayName}
              className='input input-bordered'
              placeholder='name'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Date</span>
            </label>
            <input
              type='date'
              name='date'
              required
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='text'
              name='email'
              defaultValue={user?.email}
              placeholder='email'
              className='input input-bordered'
              readOnly
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Phone</span>
            </label>

            <input
              type='number'
              name='phone'
              required
              placeholder='phone'
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Due amount</span>
            </label>
            <input
              type='text'
              defaultValue={"$" + price}
              className='input input-bordered'
              readOnly
            />
          </div>
        </div>
        <div className='form-control mt-6'>
          <input
            className='w-full btn px-4 py-2  bg-gradient-to-r from-color-main to-color-main text-white text-xl rounded-lg '
            type='submit'
            value='Order Confirm'
          />
        </div>
      </form>
      <div className='card-body'></div>
    </div>
  );
};

export default Checkout;
