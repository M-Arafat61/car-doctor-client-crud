const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  console.log(booking);
  const { _id, customerName, date, img, price, service, status } = booking;

  return (
    <tr>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className='btn btn-circle btn-sm'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </td>
      <td>
        <div className='flex items-center space-x-3'>
          <div className='avatar'>
            <div className='rounded w-24 h-16'>
              <img src={img} alt='customer image' />
            </div>
          </div>
          <div>
            <div className='font-bold'>{service}</div>
          </div>
        </div>
      </td>
      <td>
        {customerName}
        <br />
      </td>
      <td>{date}</td>
      <td>${price}</td>
      <th>
        {status ? (
          <button
            className='middle btn btn-ghost btn-sm center rounded-lg bg-gradient-to-tr from-color-main to-color-main font-bold uppercase  shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
            data-ripple-light='true'
          >
            Confirmed
          </button>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className='btn btn-warning btn-sm font-bold'
          >
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
