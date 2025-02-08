import React from 'react';

const About = () => {
  return (
    <section className="about h-screen flex items-center justify-center bg-cover bg-center text-white px-10" style={{ backgroundImage: "url('/product8.jpg')" }}>
      <div className="bg-yellow-200 shadow-md  p-8 rounded-md max-w-lg bg-opacity-60 text-center ">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">About Us</h2>
        <p>
          Welcome to Furniture World, where craftsmanship meets elegance. Our mission is to bring you a wide range of high-quality furniture that enhances your living space with both style and comfort. From modern designs to classic pieces, we carefully select our collection to suit diverse tastes and needs. Whether you are furnishing a new home or upgrading your interiors, we are here to help you find the perfect furniture to reflect your personality and lifestyle.
        </p>
      </div>
    </section>
  );
};

export default About;
