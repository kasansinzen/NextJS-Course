import type { NextPage } from 'next';
import Link from 'next/link';
import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../dummy-data';

const HomePage: NextPage = () => {
  const featuredEvents = getFeaturedEvents();

  return <div>
    <EventList items={featuredEvents} />
  </div>
}

export default HomePage
