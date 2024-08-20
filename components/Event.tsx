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

const Event: React.FC = () => {
  const [latestEvent, setLatestEvent] = useState<EventData | null>(null);

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

  return (
    <div id="subscribe" className="subscribe mx-8">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner-content">
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  {latestEvent ? (
                    <div>
                      <h2>{latestEvent.eventTitle}</h2>
                      <p className=" text-white text-xl text-center">
                        {latestEvent.eventDescription}
                      </p>
                      <p className=" text-white text-xl text-center mt-3">
                        Event Date: {" "}
                        {format(
                          new Date(latestEvent.eventDate),
                          "yyyy-MM-dd HH:mm:ss"
                        )}
                      </p>
                    </div>
                  ) : (
                    <h2>No upcoming event</h2>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
