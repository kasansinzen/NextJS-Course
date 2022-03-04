import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../helpers/api-util.helper';

const HomePage: NextPage<any> = (props) => {
  return <div>
    <Head>
      <title>NextJS Events</title>
      <meta name='description' content='Find a lot of great events taha allow you to evolve...' />
    </Head>
    <EventList items={props.events} />
  </div>
}

export const getStaticProps: GetStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {events: featuredEvents},
    revalidate: 1800
  }
}

export default HomePage
