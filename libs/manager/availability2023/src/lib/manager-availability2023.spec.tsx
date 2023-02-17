import { render } from '@testing-library/react';

import ManagerAvailability2023 from './manager-availability2023';

describe('ManagerAvailability2023', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ManagerAvailability2023 />);
    expect(baseElement).toBeTruthy();
  });
});
