"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { client, urlFor } from "@/lib/sanityClient"; // Adjust the import path as needed
import Event from "@/components/Event";
import Image from "next/image";

interface Blog {
  id: string;
  title: string;
  date: string;
  image: string;
  body: string;
}

type Params = { id: string };

const SingleBlog = ({ params }: { params: Params }) => {
  const blogId = params.id;
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    if (blogId) {
      const query = `*[_type == "post" && _id == "${blogId}"][0] {
        title,
        publishedAt,
        _id,
        body,
        "img": mainImage.asset._ref
      }`;

      axios
        .get(
          `https://${
            client.config().projectId
          }.api.sanity.io/v2022-03-07/data/query/${
            client.config().dataset
          }?query=${encodeURIComponent(query)}`
        )
        .then((response) => {
          const item = response.data.result;
          if (item) {
            const fetchedBlog = {
              id: item._id,
              title: item.title,
              date: new Date(item.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
              image: urlFor(item.img).url(),
              body: item.body,
            };
            setBlog(fetchedBlog);
          }
        })
        .catch((error) => {
          console.error("Error fetching blog:", error);
        });
    }
  }, [blogId]); // Fetch data when `id` changes

  if (!blog) return <p>Loading...</p>;

  return (
    <div>
      <Event />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center mt-9">
          <div className="w-full max-w-4xl mx-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-16">
                {blog.title}
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="relative w-full h-[300px]">
            {" "}
            {/* Control the height here */}
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover" // Ensures the image covers the area
            />
          </div>
          <div className="p-4">
            <p className="text-gray-600 text-sm mb-4">{blog.date}</p>
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: blog.body }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
