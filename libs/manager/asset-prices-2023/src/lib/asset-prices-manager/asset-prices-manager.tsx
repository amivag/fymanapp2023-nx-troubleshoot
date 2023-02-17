import styles from './asset-prices-manager.module.css';

/* eslint-disable-next-line */
export interface AssetPricesManagerProps {}

export function AssetPricesManager(props: AssetPricesManagerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AssetPricesManager!</h1>
    </div>
  );
}

export default AssetPricesManager;
