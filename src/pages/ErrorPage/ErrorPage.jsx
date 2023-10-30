import { useRouteError } from "react-router-dom";
import SecondNavbar from "../Shared/Navbar/SecondNavbar";
import errorImage from "../../assets/images/error.jpg";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <SecondNavbar></SecondNavbar>
      <div className='flex items-center justify-center min-h-screen'>
        <img src={errorImage} alt='' />
      </div>
    </div>
  );
};

export default ErrorPage;
