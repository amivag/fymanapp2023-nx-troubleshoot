import { render } from '@testing-library/react';

import AssetPricesManager from './asset-prices-manager';

describe('AssetPricesManager', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AssetPricesManager />);
    expect(baseElement).toBeTruthy();
  });
});
