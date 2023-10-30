import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";
import login from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SecondNavbar from "../Shared/Navbar/SecondNavbar";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const user = { name, email, password };
    console.log(user);
    createUser(email, password)
      .then(res => {
        console.log(res.user);
      })
      .catch(err => {
        console.log(err.message);
      });
  };
  return (
    <>
      <SecondNavbar></SecondNavbar>
      <div className='hero min-h-screen '>
        <div className='hero-content flex-col lg:flex-row'>
          <div className='lg:w-1/2 mr-12'>
            <img src={login} alt='' />
          </div>
          <div className='card flex-shrink-0 lg:w-1/2 max-w-sm border bg-base-100'>
            <div className='card-body'>
              <h1 className='text-5xl font-bold text-center'>Register</h1>
              <form onSubmit={handleSignUp}>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Full Name</span>
                  </label>
                  <input
                    type='text'
                    name='name'
                    placeholder='name'
                    className='input input-bordered'
                    required
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Email</span>
                  </label>
                  <input
                    type='email'
                    name='email'
                    placeholder='email'
                    className='input input-bordered'
                    required
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Confirm Password</span>
                  </label>
                  <input
                    type='password'
                    name='password'
                    placeholder='password'
                    className='input input-bordered'
                    required
                  />
                  {/* <label className='label'>
                    <a href='#' className='label-text-alt link link-hover'>
                      Forgot password?
                    </a>
                  </label> */}
                </div>
                <div className='form-control mt-6'>
                  <button className='bg-color-main text-white py-2 px-3 rounded-lg font-semibold text-lg'>
                    Sign up
                  </button>
                  <p className='my-6 text-center'>or Sign up with</p>
                  <div className='flex items-center justify-center gap-5 '>
                    <FaFacebookF className='btn btn-circle' />
                    <FcGoogle className='btn btn-circle' />
                    <FiGithub className='btn btn-circle' />
                  </div>
                  <p className='text-center  my-6 '>
                    Already have an account?
                    <Link to='/login'>
                      <button className='text-color-main font-bold ml-2'>
                        Sign in
                      </button>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
