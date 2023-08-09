

export function solution(A: number[], B: number[]): number {
  // console.log(`aa`)
  // return 0
  const sizes = A
  const dirs = B

  const sizesUpstream = []
  const sizesDownstream = []
  console.log(`sizesDownstream`, sizesDownstream.length)

  let fishEatenCount = 0

  for ( let i = 0; i< A.length; ++i ) {
    const dir = dirs[i]
    const size = sizes[i]

    if ( dir === 0 ) { // upstream
      const sizeUpstream = sizes[i]
      while ( sizesDownstream.length ) {
        console.log(`sizesDownstream`, sizesDownstream.length)
        // 2 fish meet
        const sizeDownstream = sizesDownstream[sizesDownstream.length - 1]
        fishEatenCount ++
        if (sizeUpstream > sizeDownstream ) {
          sizesDownstream.pop()
        } else { // downstream wins, we go further with `i`
          break;
        }
      }
      sizesUpstream.push(size)
    } else { // downstream
      sizesDownstream.push(size)
    }

  }
  // Implement your solution here
  return A.length - fishEatenCount
}
