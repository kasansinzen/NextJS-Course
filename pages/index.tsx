import type { NextPage } from 'next';
import { getFeaturedEvents } from '../dummy-data';

const HomePage: NextPage = () => {
  const featuredEvents = getFeaturedEvents();

  return <div>
    <h1>The Home Page</h1>
  </div>
}

export default HomePage
