"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import img from "@/assets/images/avater.jpeg";

interface Department {
  name: string;
  description: string;
  image: any;
  leaderName: string; // Add leaderName field
}

const Departments: React.FC = () => {
  const departments: Department[] = [
    {
      name: "SRH Department",
      description:
        "The Sexual and Reproductive Health (SRH) department focuses on providing comprehensive care and services to ensure the well-being of individuals in matters related to sexual and reproductive health.",
      image: img, // replace with the actual image path
      leaderName: "Dr. Sarah Johnson", // Add leader's name
    },
    {
      name: "Mental Health Department",
      description:
        "The Mental Health department is dedicated to supporting the psychological well-being of individuals through counseling, therapy, and various mental health services.",
      image: img, // replace with the actual image path
      leaderName: "Dr. Michael Brown", // Add leader's name
    },
    {
      name: "NCD Department",
      description:
        "The Non-Communicable Diseases (NCD) department addresses chronic diseases such as diabetes, heart disease, and more, focusing on prevention and management.",
      image: img, // replace with the actual image path
      leaderName: "Dr. Emily Davis", // Add leader's name
    },
    {
      name: "Nutrition Department",
      description:
        "The Nutrition department provides guidance on proper diet and nutrition, helping individuals maintain a balanced diet to promote overall health.",
      image: img, // replace with the actual image path
      leaderName: "Dr. Daniel Lee", // Add leader's name
    },
    {
      name: "Infections Department",
      description:
        "The Infections department specializes in the prevention, diagnosis, and treatment of infectious diseases, ensuring a healthy community.",
      image: img, // replace with the actual image path
      leaderName: "Dr. Ava Martinez", // Add leader's name
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 1;

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + itemsPerPage) % departments.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - itemsPerPage + departments.length) % departments.length
    );
  };

  const displayedDepartments = departments.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="container mx-auto px-4 py-8 mt-32">
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
              <Image
                src={department.image}
                alt={`${department.name} Leader`}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {department.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {department.description}
                </p>
                <p className="text-gray-800 font-medium">
                  Leader: {department.leaderName} {/* Display leader's name */}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-[#ff7067] text-white p-2 rounded-full mr-6"
          onClick={handlePrev}
        >
          &#8249;
        </button>
        <button
          className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-[#ff7067] text-white p-2 rounded-full ml-6"
          onClick={handleNext}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Departments;
