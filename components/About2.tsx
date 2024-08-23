import Image from "next/image";
import img from "@/assets/images/customAbout.jpg";

const About2 = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 md:py-20  "
    >
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          <span className="text-[#03a4ed]">Discover</span>{" "}
          <span className="text-[#ff7067]">Our Story</span>
        </h2>

        <p className="text-sm md:text-lg leading-relaxed">
          Welcome to Ethio Health Alliance, where passion meets purpose in the
          heart of community health. Our story began with a simple yet powerful
          vision: to unite dedicated health professionals and students in a
          shared mission to uplift and transform community health. As a
          registered nonprofit organization, we’ve channeled our expertise and
          enthusiasm into a series of impactful health screenings and
          educational events, each one a step towards a healthier, more informed
          community. Our journey is driven by a commitment to not only enhance
          the wellbeing of those we serve but also to empower our members. We
          believe in building capacity from within, fostering skills and
          knowledge that enable our team to lead community-based outreach
          programs with confidence and compassion. Through this collaborative
          effort, we aim to give back to the community that inspires us,
          creating ripples of positive change and paving the way for a brighter,
          healthier future for all.
        </p>
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
