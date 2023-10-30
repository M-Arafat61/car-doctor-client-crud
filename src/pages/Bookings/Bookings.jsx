import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import BookingRow from "./BookingRow";
import cartImage from "../../assets/images/team/2.jpg";
import Swal from "sweetalert2";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        // console.log(res.data);
        setBookings(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [url]);

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/bookings/${id}`)
          .then(response => {
            console.log(response.data);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            const remaining = bookings.filter(booking => booking._id !== id);
            setBookings(remaining);
          })
          .catch(error => {
            console.error(error);
            Swal.fire(
              "Error",
              "There was an error deleting the file.",
              "error"
            );
          });
      }
    });
  };

  const handleBookingConfirm = id => {
    axios
      .patch(`http://localhost:5000/bookings/${id}`, {
        status: "confirm",
      })
      .then(response => {
        console.log(response.data);
        if (response.data.modifiedCount > 0) {
          const remaining = bookings.filter(booking => booking._id !== id);
          const updated = bookings.find(bookings => bookings._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className='overflow-x-auto min-h-screen mt-10'>
      <div className='relative mb-20'>
        <img className='h-[270px] w-full object-cover' src={cartImage} alt='' />
        <div className='absolute top-0 left-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-1/2 h-full flex  items-center'>
          <div>
            <h3 className='text-4xl font-bold text-white ml-12'>
              Cart Details
            </h3>
          </div>
        </div>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th></th>
            <th className='text-center'>Service Name</th>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <BookingRow
              key={booking._id}
              booking={booking}
              handleDelete={handleDelete}
              handleBookingConfirm={handleBookingConfirm}
            ></BookingRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
