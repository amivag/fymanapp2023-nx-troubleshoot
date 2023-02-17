import { render } from '@testing-library/react';

import ManagerAssetPrices2023 from './manager-asset-prices-2023';

describe('ManagerAssetPrices2023', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ManagerAssetPrices2023 />);
    expect(baseElement).toBeTruthy();
  });
});
