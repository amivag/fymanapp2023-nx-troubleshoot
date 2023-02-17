import styles from './manager-ui-asset-prices.module.css';

/* eslint-disable-next-line */
export interface ManagerUiAssetPricesProps {}

export function ManagerUiAssetPrices(props: ManagerUiAssetPricesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ManagerUiAssetPrices!</h1>
    </div>
  );
}

export default ManagerUiAssetPrices;
