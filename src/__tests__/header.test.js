import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SortIcon from '../Components/Header/SortIcons/SortIcon/SortIcon';
import { exportAllDeclaration } from '@babel/types';

describe('Header', () => {
  describe('SortIcons', () => {
    it('changes icon type on click', () => {
      const handleSort = jest.fn();
      const { container } = render(
        <SortIcon name="Price" onSortHandler={handleSort} />
      );

      const button = container.querySelector('.ant-btn');
      const icon = container.querySelector('.anticon');

      expect(container).toHaveTextContent('Price');

      fireEvent.click(button);

      expect(icon).toHaveClass('anticon-up');
      fireEvent.click(button);
      expect(icon).toHaveClass('anticon-down');
    });
  });
});
