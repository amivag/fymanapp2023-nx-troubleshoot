import { render } from '@testing-library/react';

import ManagerAssets2023 from './manager-assets2023';

describe('ManagerAssets2023', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ManagerAssets2023 />);
    expect(baseElement).toBeTruthy();
  });
});
