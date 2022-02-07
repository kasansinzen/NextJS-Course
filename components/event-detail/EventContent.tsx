import React from 'react';
import classes from './EventContent.module.css';

const EventContent: React.FC = (props) => {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default EventContent;
