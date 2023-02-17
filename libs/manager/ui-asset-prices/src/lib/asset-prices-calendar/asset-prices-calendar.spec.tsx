import { render } from '@testing-library/react';

import AssetPricesCalendar from './asset-prices-calendar';

describe('AssetPricesCalendar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AssetPricesCalendar />);
    expect(baseElement).toBeTruthy();
  });
});
