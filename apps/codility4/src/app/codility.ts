// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

export function solution(X: number, A: number[]): number {
  const missing = new Set<number>()
  for ( let i = 1; i<=X; ++i ) {
    missing.add(i)
  }
  let idx = 0;
  for (const el of A) {
    missing.delete(el)
    if ( missing.size === 0 ) {
      return idx;
    }
    idx++
  }
  return -1
  // Implement your solution here
}
