"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { urlFor, client } from "@/lib/sanityClient"; // Adjust the path as necessary

// Define the type of your event data
interface Event {
  _id: string;
  eventTitle: string;
  img: {
    asset: {
      _ref: string;
    };
  };
  eventDescription: string;
  eventDate: string;
}

export default function Home() {
  const [eventData, setEventData] = useState<Event[] | null>(null);

  useEffect(() => {
    fetch(
      "https://nukb0ao7.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type%3D%3D%22event%22%5D%7B%0A++_id%2C%0A++eventTitle%2C%0A++++%22img%22%3AeventImage%2Easset%2E%5Fref%2C%0A++++eventDescription%2C%0A++++eventDate%0A%7D"
    )
      .then((res) => res.json())
      .then((data) => {
        setEventData(data.result);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Events</h1>
      {eventData ? (
        eventData.map((event) => (
          <div key={event._id}>
            <h2>{event.eventTitle}</h2>
            {event.img && (
              <Image
                src={urlFor(event.img).url()}
                alt={event.eventTitle}
                width={500}
                height={300}
              />
            )}
            <p>{event.eventDescription}</p>
            <p>{new Date(event.eventDate).toLocaleDateString()}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
