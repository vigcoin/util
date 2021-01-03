export function toUnixTimeStamp(date: Date): number {
  return Math.floor(date.getTime() / 1000);
}

export function fromUnixTimeStamp(timestamp: number): Date {
  return new Date(timestamp * 1000);
}

export function unixNow(): number {
  return toUnixTimeStamp(new Date());
}
