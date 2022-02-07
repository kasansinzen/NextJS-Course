import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../dummy-data";

const EventsPage: NextPage = (props) => {
  const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year?: string, month?: string) => {
    const fullPath: string = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return <React.Fragment>
    <EventSearch onSearch={findEventsHandler} />
    <EventList items={events} />
  </React.Fragment>
}

export default EventsPage;