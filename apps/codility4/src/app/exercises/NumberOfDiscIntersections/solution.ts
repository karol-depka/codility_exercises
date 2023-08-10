// import {radixSort, radixSort2} from "../../utils/radixSort";


/**
 https://app.codility.com/programmers/lessons/15-caterpillar_method/min_abs_sum_of_two/start/

 * */
export function solution(A: number[]): number {

  let intersections = 0

  for ( let P = 0; P<A.length - 1; ++P ) {
    for ( let Q = P+1; Q<A.length; ++Q ) {
      const distance = Q - P
      const sumRadiuses = A[P] + A[Q]
      if ( distance <= sumRadiuses ) {
        ++intersections
      }
    }

  }


  return intersections
}


