import React from 'react';
import { IDUMMY_EVENTS } from '../../dummy-data';
import EventItem from './EventItem';
import classes from './EventList.module.css';

interface IEventList {
  items: IDUMMY_EVENTS[];
}
const EventList: React.FC<IEventList> = (props) => {
  return <ul className={classes.list}>
    {props.items.map(item => <EventItem key={item.id} {...item} />)}
  </ul>
}

export default EventList;