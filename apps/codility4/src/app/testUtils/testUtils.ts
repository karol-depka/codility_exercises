
export function getRandomIntMaxEcl(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// TODO: random chars from range / set (eg. genomic range query)

export function fillRandomInts(len: number, min: number, maxExcl: number): number[] {
    return Array(len).fill(null).map(() => Math.round(getRandomIntMaxEcl(min, maxExcl)))
}

export function* generateRandomRandom(min: number, maxEcl: number) {
  const set = new Set()
  for  ( let i = 0; i<1005 ;  ) {
    const arr = fillRandomInts(getRandomIntMaxEcl(min, maxEcl), getRandomIntMaxEcl(min, maxEcl), getRandomIntMaxEcl(min, maxEcl));
    if ( ! set.has(''+arr) ) {
      set.add(''+arr)
      yield arr
      ++i
    }
  }
}
