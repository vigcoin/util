import * as index from '../src/index';

test('Should have IP available', () => {
  expect(index.IP).toBeTruthy();
  expect(index.unixNow).toBeTruthy();
  expect(index.fromUnixTimeStamp).toBeTruthy();
  expect(index.toUnixTimeStamp).toBeTruthy();
});
