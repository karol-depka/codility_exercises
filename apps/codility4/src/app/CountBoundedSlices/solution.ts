
export function solution(K: number, A: number[]): number {
  let slicesCount = 0;
  // For the interest of time limit, I do a semi-naive version, O(n^2) worst time
  // optimal solution would probably be O(n) or (O(n*log(n)) using caterpillar method
  for ( let startIdx = 0; startIdx< A.length; ++startIdx ) {
    let maxInSlice = A[startIdx]
    let minInSlice = A[startIdx]
    // potential optimization: check min and max values from this position, and include all remaining, without iterating, using a combinatorial formula N^2/2 + N/2
    for (let endIdx = startIdx; endIdx< A.length; ++ endIdx ) {
      const cur = A[endIdx]
      maxInSlice = Math.max(maxInSlice, cur)
      minInSlice = Math.min(minInSlice, cur)
      if ( maxInSlice - minInSlice <= K ) {
        slicesCount ++
      } else {
        break
      }
    }
  }


  return slicesCount
  // Implement your solution here
}
