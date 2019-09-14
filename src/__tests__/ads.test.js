import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Ad from '../Components/Ad/Ad';

afterEach(cleanup);

describe('Ads component', () => {
  const onAddsCreate = jest.fn();
  it('renders correctly', () => {
    const { container } = render(
      <Ad lastAddsNumber={0} onAddsCreate={onAddsCreate} />
    );
    const divImg = container.querySelector('.ad-div')
    const img = container.querySelector('.ad');

    expect(onAddsCreate).toHaveBeenCalled();
    expect(divImg.firstChild).toEqual(img);
  });
});
