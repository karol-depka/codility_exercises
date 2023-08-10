// import {radixSort, radixSort2} from "../../utils/radixSort";


/**

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


