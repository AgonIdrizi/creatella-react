import {
  formatDate,
  formatCentsToDollars,
} from '../utilFunctions/formaterUtils';

describe('Format utility functions', () => {
  describe('formatDate', () => {
    it('formates date in words, for input less than 7 days', () => {
      const aDay = 24 * 60 * 60 * 1000;

      const justNow = formatDate(new Date(Date.now()));
      expect(justNow).toEqual('Just now');

      const oneDayAgo = formatDate(new Date(Date.now() - aDay));
      expect(oneDayAgo).toEqual('1 day ago');

      const twoDaysAgo = formatDate(new Date(Date.now() - aDay * 2));
      expect(twoDaysAgo).toEqual('2 days ago');

      const sevenDaysAgo = formatDate(new Date(Date.now() - aDay * 7));
      const dateRegexp = new RegExp(/\d{4}\-\d{2}\-\d{2}/);
      expect(sevenDaysAgo).toMatch(dateRegexp);
    });
    it("handels singularity e.g '1 day ago'", () => {});
  });
  describe('format cents to dollars', () => {
    it('converts cents to dollars', () => {
      expect(formatCentsToDollars(200)).toEqual('$2.00');
      expect(formatCentsToDollars(1223)).toEqual('$12.23');
      expect(formatCentsToDollars(0)).toEqual('$0.00');
      expect(formatCentsToDollars(566223)).toEqual('$5,662.23');
    });
  });
});
