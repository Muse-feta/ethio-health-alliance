"use client";
import React, { useState, useEffect, useCallback } from "react";
import img from "@/assets/images/avater.jpeg"; // Replace with the actual image path

interface Department {
  name: string;
  description: string;
  image: any;
  objectives?: string;
}

const Departments: React.FC = () => {
  const departments: Department[] = [
    {
      name: "NCD Department",
      description:
        "Our NCD Department is dedicated to combating non-communicable diseases (NCDs) through proactive community awareness and screening initiatives. We organize regular NCD screening campaigns to aid in the early detection of these conditions. By establishing a well-organized linkage system, we ensure that patients are seamlessly connected to health centers, hospitals, and clinics for effective management and control of their cases. Our goal is to empower communities with knowledge and access, paving the way for better health outcomes and a more robust response to NCDs.",
      image: img, // Replace with the actual image path
    },
    {
      name: "Mental Health Department",
      description:
        "At our Mental Health Department, we recognize that mental health is a cornerstone of overall wellbeing and productivity. Despite often being overlooked or misunderstood, addressing mental health is crucial for enabling individuals to lead fulfilling lives. Our mission is to shine a spotlight on mental health issues, ensuring they receive the attention they deserve within the healthcare system. We are dedicated to increasing awareness among health professionals, students, and the broader community about the prevalence and impact of mental health problems. Our focus extends to providing effective interventions, advocating for those in need, and connecting individuals with the right resources for support and treatment. By fostering a comprehensive understanding and creating a supportive environment, we aim to enhance mental health care and ensure that everyone has access to the help they need.",
      image: img, // Replace with the actual image path
      objectives: "N/A", // Add specific objectives if available
    },
    {
      name: "Infectious Disease Department",
      description:
        "Our Infectious Disease Department is dedicated to tackling the challenges posed by diseases caused by infectious agents, which can be transmitted through various means, including person-to-person contact, insects, contaminated food, and environmental exposure. These diseases are particularly prevalent in developing countries like Ethiopia, where they often lead to complex health issues. We focus on a proactive approach to prevent and manage infectious diseases by enhancing community awareness and education. Our efforts include promoting effective prevention methods, such as maintaining a clean environment and understanding seasonal variations in disease patterns. By emphasizing early diagnosis and treatment, and advocating for adherence to appropriate treatments, we aim to reduce the impact of these diseases and improve overall public health. Our goal is to empower communities with the knowledge and tools needed to prevent, identify, and manage infectious diseases effectively.",
      image: img, // Replace with the actual image path
      objectives: "N/A", // Add specific objectives if available
    },
    {
      name: "Nutrition Department",
      description:
        "At our Nutrition Department, we recognize that nutrition is a cornerstone of optimal health and well-being. We are dedicated to addressing one of the most pressing public health issues: malnutrition, which affects millions globally and is a major contributor to child morbidity and mortality, particularly in underdeveloped nations. Malnutrition encompasses both undernutrition and overnutrition, manifesting as deficiencies, imbalances, or excesses in nutrient intake. This double burden includes conditions such as underweight, overweight, obesity, and diet-related noncommunicable diseases. With approximately 1.9 billion adults experiencing overweight or obesity and 462 million underweight, the challenge is significant. Additionally, nearly 45% of child deaths under five in low- and middle-income countries are linked to undernutrition, a statistic that underscores the urgency of our mission. Our department is committed to promoting the critical importance of good nutrition within communities. We focus on improving food security, supporting healthy eating habits, and fostering overall health and well-being. By coordinating efforts with health professionals and community members, we aim to combat malnutrition effectively, ensuring that every individual has the opportunity to thrive through proper nutrition.",
      image: img, // Replace with the actual image path
      objectives: "N/A", // Add specific objectives if available
    },
    {
      name: "Sexual and Reproductive Health Department",
      description:
        "Our Sexual and Reproductive Health (SRH) Department is committed to enhancing physical, emotional, mental, and social well-being and reproductive health. Our focus extends to the prevention and management of sexually transmitted infections (STIs), including HIV, and addressing complications during pregnancy and childbirth. Recognizing that good sexual and reproductive health is a fundamental human right, we work to overcome the barriers of social, cultural, economic, and political factors that limit access to these essential services. By ensuring universal access, we aim to contribute to global health goals such as reducing maternal and child mortality, eliminating new HIV infections, and promoting gender equality and women’s empowerment. Our efforts are designed to improve population health, foster economic growth, and support sustainable development, making a significant impact on communities everywhere.",
      image: img, // Replace with the actual image path
      objectives: "N/A", // Add specific objectives if available
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 1;

  const handleNext = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + itemsPerPage) % departments.length
    );
  }, [itemsPerPage]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - itemsPerPage + departments.length) % departments.length
    );
  }, [itemsPerPage]);

  const displayedDepartments = departments.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div id="departments" className="container mx-auto px-4 py-8 mt-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          <span className="text-[#03a4ed]">Our</span>{" "}
          <span className="text-[#ff7067]">Departments</span>
        </h2>
        <p className="text-gray-600 text-xl mb-10">
          Explore the different departments and their leaders.
        </p>
      </div>
      <div className="relative">
        <div className="flex overflow-hidden">
          {displayedDepartments.map((department, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden w-full px-2"
            >
              {/* <Image
                src={department.image}
                alt={`${department.name} Leader`}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              /> */}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {department.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {department.description}
                </p>
                <div className="text-gray-800 font-medium">
                  {/* <p className="mb-2">Objectives:</p>
                  {department.objectives} */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute top-3/4 left-[-15px] transform -translate-y-1/2 bg-[#ff7067] text-white p-2 rounded-full mr-12"
          onClick={handlePrev}
        >
          &#8249;
        </button>
        <button
          className="absolute top-3/4 right-[-15px] transform -translate-y-1/2 bg-[#ff7067] text-white p-2 rounded-full"
          onClick={handleNext}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Departments;
