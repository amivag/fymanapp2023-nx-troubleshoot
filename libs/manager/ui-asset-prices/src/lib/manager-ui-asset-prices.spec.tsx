import { render } from '@testing-library/react';

import ManagerUiAssetPrices from './manager-ui-asset-prices';

describe('ManagerUiAssetPrices', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ManagerUiAssetPrices />);
    expect(baseElement).toBeTruthy();
  });
});
