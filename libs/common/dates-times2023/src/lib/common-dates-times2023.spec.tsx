import { render } from '@testing-library/react';

import CommonDatesTimes2023 from './common-dates-times2023';

describe('CommonDatesTimes2023', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonDatesTimes2023 />);
    expect(baseElement).toBeTruthy();
  });
});
