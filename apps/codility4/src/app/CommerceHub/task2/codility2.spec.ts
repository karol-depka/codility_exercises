import {solution} from "./solution";

describe('solution', () => {

  it(`codility example 1`, () => {
    expect(solution(5, 0, 2)).toEqual('AABBAABBAA');
  });

  it(`codility example 2`, () => {
    expect(solution(1, 2, 1)).toEqual('AABBABAB');
  });

  it(`codility example 3`, () => {
    expect(solution(0, 2, 0)).toEqual('ABAB');
  });

  it(`codility example 3 + => ABABAB`, () => {
    expect(solution(0, 3, 0)).toEqual('ABABAB');
  });

  it(`codility example 3`, () => {
    expect(solution(0, 0, 10)).toEqual('BB');
  });

  it(`empty zeros`, () => {
    expect(solution(0, 0, 0)).toEqual('');
  });

  it(`1 AA`, () => {
    expect(solution(1, 0, 0)).toEqual('AA');
  });

  it(`1 AB`, () => {
    expect(solution(0, 1, 0)).toEqual('AB');
  });

  it(`ABAB`, () => {
    expect(solution(0, 2, 0)).toEqual('ABAB');
  });

  it(`BBAA -> AABB`, () => {
    expect(solution(1, 0, 1)).toEqual('AABB');
  });
  it(`AABBAA`, () => {
    expect(solution(2, 0, 1)).toEqual('AABBAA');
  });
  it(`AABBAABB`, () => {
    expect(solution(2, 0, 2)).toEqual('AABBAABB');
  });
  it(`BBAABBAABB`, () => {
    expect(solution(2, 0, 3)).toEqual('BBAABBAABB'); // forces it to start with BB, even though normally it starts with AA
  });
  // it(`BBAA(AA)`, () => {
  //   expect(solution(0, 1, 0)).toEqual('BBAA');
  // });
  it(`AABB`, () => {
    expect(solution(1, 0, 1)).toEqual('AABB');
  });
  it(`AABB`, () => {
    expect(solution(1, 0, 1)).toEqual('AABB');
  });

  it(`1 BB`, () => {
    expect(solution(0, 0, 1)).toEqual('BB');
  });

  it(`10 10 10`, () => {
    expect(solution(10, 10, 10)).toEqual('AABBAABBAABBAABBAABBAABBAABBAABBAABBAABBABABABABABABABABABAB');
  });


});
