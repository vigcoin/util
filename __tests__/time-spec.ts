import * as assert from 'assert';
import { fromUnixTimeStamp, toUnixTimeStamp, unixNow } from '../src/time';

describe('test time', () => {
  it('should get now ', async () => {

    const now = unixNow();
    const date = fromUnixTimeStamp(now);

    const last = toUnixTimeStamp(date);
    assert(last === now);

  });
});
