import {solution} from "./solution";

describe('fut', () => {

  it(`codility example 1`, () => {
    expect(solution( 'ACCAABBC')).toEqual('AC');
  });


  it(`codility example 2`, () => {
    expect(solution( 'ABCBBCBA')).toEqual('');
  });

  it(`codility example 3`, () => {
    expect(solution( 'BABABA')).toEqual('BABABA');
  });

  it(`AA`, () => {
    expect(solution( 'AA')).toEqual('');
  });

  it(`AAB`, () => {
    expect(solution( 'AAB')).toEqual('B');
  });
  it(`ABB`, () => {
    expect(solution( 'ABB')).toEqual('A');
  });

  it(`AAA`, () => {
    expect(solution( 'AAA')).toEqual('A');
  });
  it(`BAABC`, () => {
    expect(solution( 'BAABC')).toEqual('C');
  });
  it(`BAAB`, () => {
    expect(solution( 'BAAB')).toEqual('');
  });
  it(`CBAAB`, () => {
    expect(solution( 'CBAAB')).toEqual('C');
  });
  it(`CBAABC`, () => {
    expect(solution( 'CBAABC')).toEqual('');
  });
  it(`CBACABC`, () => {
    expect(solution( 'CBACABC')).toEqual('CBACABC');
  });
  it(`ACBACABC`, () => {
    expect(solution( 'ACBACABC')).toEqual('ACBACABC');
  });

  it(`BB`, () => {
    expect(solution( 'BB')).toEqual('');
  });

  it(`CC`, () => {
    expect(solution( 'CC')).toEqual('');
  });


});
