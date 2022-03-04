import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../helpers/api-util.helper";

const EventsPage: NextPage<{events: any[]}> = (props) => {
  const events = props.events
  const router = useRouter();

  const findEventsHandler = (year?: string, month?: string) => {
    const fullPath: string = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return <React.Fragment>
    <Head>
      <title>All Events</title>
      <meta name='description' content='Find a lot of great events taha allow you to evolve...' />
    </Head>

    <EventSearch onSearch={findEventsHandler} />
    <EventList items={events} />
  </React.Fragment>
}

export const getStaticProps: GetStaticProps = async () => {
  const events = await getAllEvents();

  return {
    props: {events},
    revalidate: 60
  }
}

export default EventsPage;