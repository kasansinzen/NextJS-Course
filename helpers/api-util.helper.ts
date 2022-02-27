import { IDUMMY_EVENTS } from "../dummy-data";

export const getAllEvents = async () => {
  const response = await fetch("https://nextjs-course-2f95f-default-rtdb.asia-southeast1.firebasedatabase.app/events.json");
  const data = await response.json();

  const events: IDUMMY_EVENTS[] = [];
  Object.entries(data).forEach(([key, value]) => {
    events.push({id: key, ...value as any});
  });

  return events;
}

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export const getEventById = async (id: string) => {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}

export const getFilteredEvents = async (dateFilter: {year: number, month: number}) => {
  const { year, month } = dateFilter;
  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}