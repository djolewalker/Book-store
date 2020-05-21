import { Filter } from './filter';

describe('Filter', () => {
  it('should create an instance', () => {
    expect(new Filter()).toBeTruthy();
  });

  it('should create an instance with empty arrays', () => {
    expect(new Filter().languages).toEqual([]);
    expect(new Filter().categories).toEqual([]);
  });
});
