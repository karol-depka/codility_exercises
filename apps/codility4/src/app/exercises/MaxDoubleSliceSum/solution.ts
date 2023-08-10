// import {radixSort, radixSort2} from "../../utils/radixSort";


/**
 https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_double_slice_sum/start/


 * */
export function solution(A: number[]): number {

  let min = Math.abs(A[0] + A[0])

  for ( let X = 0; X<A.length - 2; ++X ) {
    for ( let Y = X+1; Y<A.length - 1; ++Y ) {
      for ( let Z = Y+1; Z<A.length; ++Z ) {

      }

    }

  }


  return min
}


