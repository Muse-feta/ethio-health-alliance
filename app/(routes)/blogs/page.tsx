"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { client, urlFor } from "@/lib/sanityClient"; // Adjust the import path as needed
import Event from "@/components/Event";
import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  date: string;
  image: string;
}

type Params = { id: string };
const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://${
          client.config().projectId
        }.api.sanity.io/v2022-03-07/data/query/${
          client.config().dataset
        }?query=*[_type == "post"]{title, publishedAt, _id, body, "img":mainImage.asset._ref}`
      )
      .then((response) => {
        const fetchedBlogs = response.data.result.map((item: any) => ({
          id: item._id,
          title: item.title,
          date: new Date(item.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          image: urlFor(item.img).url(),
        }));
        setBlogs(fetchedBlogs); // Set all fetched blogs
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  return (
    <div>
        <Event/>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center mt-9">
          <div className="w-full max-w-4xl mx-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-16">
                Explore Our Latest Blog Posts <br />
                <span className="text-[#2487ce]">Blog Posts</span>
              </h2>
            </div>
          </div>
        </div>

        <div
          className={`flex justify-center ${
            blogs.length === 1
              ? "flex-col items-center" // Center single blog
              : "flex-row flex-wrap" // Distribute multiple blogs
          }`}
        >
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-xs mx-2 mb-4"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{blog.date}</p>
                <Link href={`/blogs/${blog.id}`} className="bg-[#2487ce] text-white py-2 px-4 rounded-full hover:bg-[#1d70a4] transition-colors duration-300">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
