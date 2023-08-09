
/* 72% score; Performance 40% */
export function solution(A: number[]): number {
  let count = 0;
  for ( let P = 0; P< A.length; ++P ) {
    for ( let Q = P+1; Q< A.length; ++Q ) {
      if (A[Q] < A[P]) {
        count ++
      }
    }
  }
  return count

}
