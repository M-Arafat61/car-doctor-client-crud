import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className='hero bg-white my-10'>
      <div className='hero-content flex-col lg:flex-row'>
        <div className='lg:w-1/2 relative'>
          <img src={person} className=' w-3/4 rounded-lg shadow-2xl' />
          <img
            className='absolute w-1/2 top-1/2 right-5 border-8 border-white rounded-lg'
            src={parts}
            alt=''
          />
        </div>
        <div className='lg:w-1/2 space-y-5 p-4'>
          <h3 className='text-3xl text-orange-500 font-bold'>About Us</h3>
          <h1 className='text-5xl font-bold'>
            We are qualified & of experience in this field
          </h1>
          <p className=''>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p className=''>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <button
            className='middle text-white btn none btn-ghost center mr-5 rounded-lg bg-gradient-to-tr from-[#FF3811] to-orange-400 py-3 px-6 font-sans text-xs font-bold uppercase  shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
            data-ripple-light='true'
          >
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
