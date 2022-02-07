import AddressIcon from '../icons/AddressIcon';
import DateIcon from '../icons/DateIcon';
import LogisticsItem from './LogisticsItem';
import classes from './EventLogistics.module.css';
import { IDUMMY_EVENTS } from '../../dummy-data';

interface IEventLogistics extends IDUMMY_EVENTS {
  imageAlt: string;
  address: string;
}
const EventLogistics: React.FC<IEventLogistics> = (props) => {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
