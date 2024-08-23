"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { format, isToday, isAfter } from "date-fns";

type EventData = {
  eventTitle: string;
  eventDescription: string;
  eventDate: string;
};

type ApiResponse = {
  result: EventData[];
};

const TopNavbar: React.FC = () => {
  const [latestEvent, setLatestEvent] = useState<EventData | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://f5zttlgq.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22event%22%5D%7B%0A++eventTitle%2C%0A++eventDescription++%2C%0A++++eventDate%0A%7D"
        );
        const events = response.data.result;

        // Parse and filter events to include only today or future dates
        const upcomingEvents = events
          .map((event) => ({
            ...event,
            date: new Date(event.eventDate),
          }))
          .filter(
            (event) => isToday(event.date) || isAfter(event.date, new Date())
          );

        // Get the latest event from the filtered list
        const latestEvent =
          upcomingEvents.length > 0
            ? upcomingEvents.sort(
                (a, b) => b.date.getTime() - a.date.getTime()
              )[0]
            : null;

        if (latestEvent) {
          setLatestEvent(latestEvent);
        }
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEventData();
  }, []);

  if (!isVisible) {
    return null; // Don't render anything if the nav bar is not visible
  }

  return (
    <nav className="bg-[#03a4ed] z-30 text-white py-2 px-4 relative shadow-md">
      <div className="container mx-auto flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="text-lg md:text-xl font-bold">Upcoming Events</h1>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white bg-[#ff7067] p-1 rounded-full ml-4"
            aria-label="Close navigation bar"
          >
            &times;
          </button>
        </div>
        <div className="mt-1 overflow-x-auto">
          {latestEvent ? (
            <div className="space-y-1">
              <h2 className="text-md md:text-lg">{latestEvent.eventTitle}</h2>
              <p className="text-xs md:text-sm">
                {format(new Date(latestEvent.eventDate), "MMMM d, yyyy")}
              </p>
              <p className="text-xs md:text-sm">
                {latestEvent.eventDescription}
              </p>
            </div>
          ) : (
            <p className="text-xs md:text-sm">No upcoming events</p>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
