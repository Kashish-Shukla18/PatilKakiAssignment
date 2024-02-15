import React from 'react';
import AboutImg from "../assets/About.png";

const About = () => {
  return (
    <section section id="about" class="about" className='about flex flex-col min-h-screen w-full sm:w-9/10'>
      <div className="w-full sm:max-w-screen mx-auto">
        <div className='grid justify-items-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl m-3'>
          <span className="text-transparent bg-clip-text bg-gradient-to-r p-3 to-yellow-500 from-violet-200">About Founder</span>
        </div>
        <p className='w-full sm:w-4/5 m-auto text-lg font-semibold text-white  ssm:p-4 lg:px-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum sapien id ipsum faucibus, sit amet volutpat neque laoreet. Phasellus sit amet neque id risus vehicula facilisis. Aliquam erat volutpat. Sed quis ante et justo fermentum laoreet. Vivamus ultricies, mauris eu dictum faucibus, tortor felis vestibulum lectus, sed viverra est neque nec dolor. Integer vitae tellus ac lorem laoreet finibus. Quisque ac velit a quam tempor mattis nec nec neque.</p>
      </div>
      <div className='flex flex-col sm:flex-row w-full sm:max-w-4xl mx-auto mt-8'>
        <div className='w-full sm:w-1/2'>
          <img className='p-4 w-full animate-bounce 5s ' src={AboutImg} alt="Founder Image" class="rounded-lg mb-6" />
        </div>
        <div className='w-full sm:w-1/2 p-4 text-white shadow-2xl'>
          <ul className="list-disc p-6 text-lg">
            <li className="custom-list-item">Lorem ipsum dolor sit amet</li>
            <li className="custom-list-item">Consectetur adipiscing elit</li>
            <li className="custom-list-item">Sed do eiusmod tempor incididunt</li>
            <li className="custom-list-item">Lorem ipsum dolor sit amet</li>
            <li className="custom-list-item">Consectetur adipiscing elit</li>
            <li className="custom-list-item">Sed do eiusmod tempor incididunt</li>
            <li className="custom-list-item">Lorem ipsum dolor sit amet</li>
            <li className="custom-list-item">Consectetur adipiscing elit</li>
            <li className="custom-list-item">Sed do eiusmod tempor incididunt</li>
            <li className="custom-list-item">Lorem ipsum dolor sit amet</li>
            <li className="custom-list-item">Consectetur adipiscing elit</li>
            <li className="custom-list-item">Sed do eiusmod tempor incididunt</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
