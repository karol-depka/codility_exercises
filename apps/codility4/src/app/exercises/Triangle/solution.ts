// import {radixSort, radixSort2} from "../../utils/radixSort";

/** 70-something %
 * 33% performance
 * */
export function solution(A: number[]): number {

  // let max = A[0] * A[1] * A[2]

  for ( let P = 0; P<A.length - 2; ++P ) {
    for ( let Q = P+1; Q<A.length - 1; ++Q ) {
      for ( let R = Q+1; R<A.length; ++R ) {
        if (
          A[P] + A[Q] > A[R] &&
          A[Q] + A[R] > A[P] &&
          A[R] + A[P] > A[Q]
        ) {
          return 1
        }
      }

    }

  }


  return 0
}


