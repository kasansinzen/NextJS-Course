import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../helpers/api-util.helper';

const HomePage: NextPage<any> = (props) => {
  return <div>
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
