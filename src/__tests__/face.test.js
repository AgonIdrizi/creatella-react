import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Face from '../Components/ProductsGrid/Product/Face/Face';
import coolFaces from 'cool-ascii-faces';

describe('Face Component', () => {
  it('renders with correct font-size', () => {
    const { container } = render(<Face size="29" face={coolFaces()} />);
    const faceParagraph = container.querySelector('.faceParagraph');

    expect(faceParagraph.style['font-size']).toBe('29px');
  });
});
