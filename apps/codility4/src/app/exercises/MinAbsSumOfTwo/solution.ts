// import {radixSort, radixSort2} from "../../utils/radixSort";


/**
 * Task Score
 * 54%
 * Correctness
 * 100%
 * Performance
 * 28%
 *
 * https://app.codility.com/demo/results/trainingUZ9B43-M8B/
 *
 * 12 min
 *
 * Detected time complexity:
 * O(N * N)
 *
 * */
export function solution(A: number[]): number {

  let min = Math.abs(A[0] + A[0])

  for ( let P = 0; P<A.length; ++P ) {
    for ( let Q = P; Q<A.length; ++Q ) {
      min = Math.min(min, Math.abs(A[P] + A[Q]))
    }

  }


  return min
}


