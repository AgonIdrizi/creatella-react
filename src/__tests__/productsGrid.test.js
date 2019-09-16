import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
  waitForDomChange,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from '../../src/__mocks__/axios';
import { data } from '../__mocks__/fakeData/testData';
import ProductsGrid from './../Components/ProductsGrid/ProductsGrid';
import { act } from 'react-dom/test-utils';

describe('ProductsGrid', () => {
  afterEach(cleanup);
  it('renders correctly', async () => {
    axiosMock.get
      .mockResolvedValueOnce({ data: data.slice(0, 16) })
      .mockResolvedValueOnce({ data: data.slice(16, 31) })
      .mockResolvedValueOnce({ data: data.slice(32, 47) });

    const { container } = render(<ProductsGrid sortBy="" />);

    const productsSection = await waitForElement(() =>
      container.querySelector('.ProductsGrid')
    );

    act(() => {
      fireEvent.scroll(window, { target: { scrollY: 400 } });
    });

    await waitForDomChange({ container }).then(() => {
      act(() => {
        fireEvent.scroll(window, { target: { scrollY: 400 } });
      });
    });

    const adImageNodes = container.querySelectorAll('.ad');

    expect(productsSection.childElementCount).toBe(48);
    expect(adImageNodes.length).toBe(2);
    expect(productsSection).toHaveTextContent('~ end of catalogue ~');
  });

  it('shows Spinner', async () => {
    axiosMock.get;

    const { container } = render(<ProductsGrid sortBy="" />);
    const productsSection = container.querySelector('.ProductsGrid');
    const spinner = productsSection.childNodes[0];

    expect(spinner).toHaveClass('ant-spin');
  });
});
