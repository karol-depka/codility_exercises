
export function solution(A: number[]): number {
  const existing = new Set<number>()
  for ( const a of A) {
    if ( a>0 ) {
      existing.add(a)
    }
  }

  for ( let i = 1;
        i <= /* <= not < !!! */ 100_001 /* not 100_000 !!!*/; ++i ) {
    if (!existing.has(i)) {
      return i
    }
  }
  return -1
  // Implement your solution here
}
