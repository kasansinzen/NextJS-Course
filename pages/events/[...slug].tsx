import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultTitle";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/ErrorAlert";
import { getFilteredEvents } from "../../dummy-data";

const FilterdEventsPage: NextPage = () => {
  const router = useRouter();

  const filterData = router.query.slug as any[];
  if(!filterData) return <p className="center">Loading...</p>;

  const [filteredYear, filteredMonth] = filterData;
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  if(
    (isNaN(numYear) || isNaN(numMonth)) ||
    (numYear > 2030 || numYear < 2021) ||
    (numMonth < 1 || numMonth > 12)
  ) return (
    <React.Fragment>
      <ErrorAlert>
        <p>Invalid filter. Please adjust your value.</p>
      </ErrorAlert>
      <div className="center">
        <Button link="/events">Show All Events</Button>
      </div>
    </React.Fragment>
  );

  const filteredEvents = getFilteredEvents({year: numYear, month: numMonth});
  if(!filteredEvents || filteredEvents.length <= 0) return (
    <React.Fragment>
      <ErrorAlert>
        <p>No events found for the chosen filter.</p>
      </ErrorAlert>
      <div className="center">
        <Button link="/events">Show All Events</Button>
      </div>
    </React.Fragment>
  );

  const date = new Date(numYear, numMonth - 1);

  return <div>
    <ResultsTitle date={date} />
    <EventList items={filteredEvents} />
  </div>
}

export default FilterdEventsPage;