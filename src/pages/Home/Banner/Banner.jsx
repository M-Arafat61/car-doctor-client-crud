import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000}
      >
        <div className='relative'>
          <img className='md:h-[650px] object-cover' src={img1} alt='Slide 1' />
          <div className='absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
            <div className='text-white space-y-7 pl-12 w-1/2'>
              <h2 className='text-6xl font-bold'>
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button
                  className='middle btn none btn-ghost center mr-5 rounded-lg bg-gradient-to-tr from-[#FF3811] to-orange-500 py-3 px-6 font-sans text-xs font-bold uppercase  shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                  data-ripple-light='true'
                >
                  Discover More
                </button>

                <button className='btn btn-outline btn-secondary'>
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='relative'>
          <img className='md:h-[650px] object-cover' src={img2} alt='Slide 2' />
          <div className='absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
            <div className='text-white space-y-7 pl-12 w-1/2'>
              <h2 className='text-6xl font-bold'>
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button
                  className='middle btn none btn-ghost center mr-5 rounded-lg bg-gradient-to-tr from-[#FF3811] to-orange-500 py-3 px-6 font-sans text-xs font-bold uppercase  shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                  data-ripple-light='true'
                >
                  Discover More
                </button>
                <button className='btn btn-outline btn-secondary'>
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='relative'>
          <img className='md:h-[650px] object-cover' src={img3} alt='Slide 3' />
          <div className='absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
            <div className='text-white space-y-7 pl-12 w-1/2'>
              <h2 className='text-6xl font-bold'>
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button
                  className='middle btn none btn-ghost center mr-5 rounded-lg bg-gradient-to-tr from-[#FF3811] to-orange-500 py-3 px-6 font-sans text-xs font-bold uppercase  shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                  data-ripple-light='true'
                >
                  Discover More
                </button>
                <button className='btn btn-outline btn-secondary'>
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='relative'>
          <img className='md:h-[650px] object-cover' src={img4} alt='Slide 4' />
          <div className='absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
            <div className='text-white space-y-7 pl-12 w-1/2'>
              <h2 className='text-6xl font-bold'>
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button
                  className='middle btn none btn-ghost center mr-5 rounded-lg bg-gradient-to-tr from-[#FF3811] to-orange-500 py-3 px-6 font-sans text-xs font-bold uppercase  shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                  data-ripple-light='true'
                >
                  Discover More
                </button>
                <button className='btn btn-outline btn-secondary'>
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='relative'>
          <img className='md:h-[650px] object-cover' src={img5} alt='Slide 5' />
          <div className='absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
            <div className='text-white space-y-7 pl-12 w-1/2'>
              <h2 className='text-6xl font-bold'>
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button
                  className='middle btn none btn-ghost center mr-5 rounded-lg bg-gradient-to-tr from-[#FF3811] to-orange-500 py-3 px-6 font-sans text-xs font-bold uppercase  shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                  data-ripple-light='true'
                >
                  Discover More
                </button>
                <button className='btn btn-outline btn-secondary'>
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
