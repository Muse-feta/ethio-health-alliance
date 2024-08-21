import Image from "next/image";
import img from "@/assets/images/about3.png"

const About2 = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 md:py-20  ">
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          <span className="text-[#03a4ed]">Discover</span>{" "}
          <span className="text-[#ff7067]">Our Story</span>
        </h2>
        
        <p className="text-sm md:text-lg leading-relaxed">
          We are more than just a company; we are a team of passionate
          professionals dedicated to bringing you the best. Our commitment to
          excellence and innovation sets us apart in the industry, and we are
          constantly evolving to meet the needs of our clients. Join us on our
          journey to make a lasting impact.
        </p>
        <button className="mt-8 px-6 py-3 bg-[#1d71a5] text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          Our Blogs
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src={img} // replace with your image path
          alt="About Us"
          width={600}
          height={600}
          className="rounded-xl transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default About2;
