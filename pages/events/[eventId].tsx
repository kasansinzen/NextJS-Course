import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import EventContent from "../../components/event-detail/EventContent";
import EventLogistics from "../../components/event-detail/EventLogistics";
import EventSummary from "../../components/event-detail/EventSummary";
import ErrorAlert from "../../components/ui/ErrorAlert";
import { getEventById } from "../../dummy-data";

const EventDetailPage: NextPage = () => {
  const router = useRouter();

  const eventId = router.query.eventId as any;
  const event = getEventById(eventId);

  if(!event) return (
    <React.Fragment>
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    </React.Fragment>
  );
  return <React.Fragment>
    <EventSummary title={event.title} />
    <EventLogistics {...event} address={event.location} imageAlt={event.title} />
    <EventContent>
      <p>{event.description}</p>
    </EventContent>
  </React.Fragment>
}

export default EventDetailPage;