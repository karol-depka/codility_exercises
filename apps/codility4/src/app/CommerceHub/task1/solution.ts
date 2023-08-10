
export function solution(S: string): string {
  // Complexity O(n)
  // avoiding splicing (and str-comparing) all possibilities, which would be O(n^2)

  for ( let i=0; i<S.length - 1; ++i ) {
    const curChar = S[i]
    const nextChar = S[i+1]
    if ( curChar > nextChar ) {
      // if (and only if :) ) current char is alphabetically higher than next char, we remove it
      return S.slice(0, i) + S.slice(i + 1, S.length)
    }
  }
  return S.slice(0, S.length - 1)

}
