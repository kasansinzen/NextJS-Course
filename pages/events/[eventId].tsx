import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import EventContent from "../../components/event-detail/EventContent";
import EventLogistics from "../../components/event-detail/EventLogistics";
import EventSummary from "../../components/event-detail/EventSummary";
import ErrorAlert from "../../components/ui/ErrorAlert";
import { getAllEvents, getEventById, getFeaturedEvents } from "../../helpers/api-util.helper";

interface IProps {
  selectedEvent: any;
}
const EventDetailPage: NextPage<IProps> = (props) => {
  const event = props.selectedEvent;

  if(!event) return <p className="center">Loading...</p>;
  return <React.Fragment>
    <EventSummary title={event.title} />
    <EventLogistics {...event} address={event.location} imageAlt={event.title} />
    <EventContent>
      <p>{event.description}</p>
    </EventContent>
  </React.Fragment>
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.eventId as any;
  const event = await getEventById(id);

  return {
    props: {
      selectedEvent: event
    },
    revalidate: 30
  }
}

export const getStaticPaths: GetStaticPaths = async() => {
  const events = await getFeaturedEvents();
  const paths = events.map(event => ({params: {eventId: event.id}}));

  return {
    paths,
    fallback: 'blocking',
  };
}

export default EventDetailPage;