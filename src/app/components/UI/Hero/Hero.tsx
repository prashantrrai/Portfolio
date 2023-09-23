// components/Hero.js

import React from 'react';
import Image from 'next/image';

const Hero = () => {
    const phoneNumber = '7359030960';
    const message = encodeURIComponent("Hi there! I'm eager to connect and explore exciting opportunities with your organization. Let's chat about how I can bring my passion, skills, and enthusiasm to your team. 😄🚀");
    const whatsappLink = `https://wa.me/${phoneNumber}/?text=${message}`;

  return (
    <section className="text-white py-16">
      <div className="container mx-auto text-center p-2">
        <Image
          src="/Passport copy 50kb-min.jpeg" 
          alt="profile-photo"
          className="mx-auto w-40 h-40 rounded-full mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">Hello, I&apos;m Prashant Rai</h1>
        <p className="text-lg mb-4">MERN Stack Developer</p>
        <p className="text-md mb-8 px-2">
          Hi there! My name is Piyush Garg and I&apos;m a software engineer with over 5 years of experience in the industry. I love all things tech and coding, and on my channel, I share my knowledge and experience with others.
        </p>
        <div>
          <a href={whatsappLink} target='_blank' className="bg-white text-blue-500 hover:bg-blue-200 px-4 py-2 rounded-full mr-4">Contact Me</a>
          <a href="/resume.pdf" target='_blank' download="Prashant_Rai_Resume.pdf" className="bg-white text-blue-500 hover:bg-blue-200 px-4 py-2 rounded-full">Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
