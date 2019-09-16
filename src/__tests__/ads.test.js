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
    const divImg = container.querySelector('.ad-div');
    const img = container.querySelector('.ad');

    expect(onAddsCreate).toHaveBeenCalled();
    expect(divImg.firstChild).toEqual(img);
  });

  it('doesnt show 2 ads twice in a row',() => {
    const { container } = render(
      [<Ad lastAddsNumber={0} key={0} onAddsCreate={onAddsCreate} />,
      <Ad lastAddsNumber={1} key={1} onAddsCreate={onAddsCreate} />,
      <Ad lastAddsNumber={2} key={2} onAddsCreate={onAddsCreate} />,
      <Ad lastAddsNumber={3} key={3} onAddsCreate={onAddsCreate} />,
      <Ad lastAddsNumber={4} key={4} onAddsCreate={onAddsCreate} />,
      <Ad lastAddsNumber={5} key={5} onAddsCreate={onAddsCreate} />,
      <Ad lastAddsNumber={6} key={6} onAddsCreate={onAddsCreate} />,
      <Ad lastAddsNumber={7} key={7} onAddsCreate={onAddsCreate} />]
    );

    const adsNodes = document.querySelectorAll('.ad')
    
    const arrayOfSrc = Array.from(adsNodes).map((node) => node.src.substr(-1))
    //we check that every number generated in arrayOfSrc, is different than lastAddsNumber-prop givent to that Ad-component
    Array.from(adsNodes).forEach((elem, index) => {
      expect(arrayOfSrc[index]).not.toEqual(index)
    })
    
  })
});
