import styles from './asset-prices-calendar.module.css';

/* eslint-disable-next-line */
export interface AssetPricesCalendarProps {}

export function AssetPricesCalendar(props: AssetPricesCalendarProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AssetPricesCalendar!</h1>
    </div>
  );
}

export default AssetPricesCalendar;
