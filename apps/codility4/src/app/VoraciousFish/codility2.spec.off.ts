import {solution} from "./codility2";

describe('fut', () => {
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     imports: [AppComponent, NxWelcomeComponent, RouterTestingModule],
  //   }).compileComponents();
  // });

  it(`codility example`, () => {
    expect(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])).toEqual(2);
  });
  it(`no fish`, () => {
    expect(solution([], [])).toEqual(0);
  });
  it(`only 1 fish upstream`, () => {
    expect(solution([99], [0])).toEqual(1);
  });
  it(`only 1 fish downstream`, () => {
    expect(solution([99], [1])).toEqual(1);
  });
  it(`2 fish, all 2 stay alive`, () => {
    expect(solution([9, 8], [0, 1])).toEqual(2);
  });
  it(`2 fish, 1 upstream stays alive`, () => {
    expect(solution([10, 9], [1, 0])).toEqual(1);
  });
  it(`2 fish, 1 downstream stays alive`, () => {
    expect(solution([9, 10], [1, 0])).toEqual(1);
  });
  it(`4 fish, all 4 stay alive coz opposite directions`, () => {
    expect(solution([3,4,5,6], [0,0, 1,1])).toEqual(4);
  });
  it(`4 fish, all 4 stay alive coz all downstream`, () => {
    expect(solution([3,4,5,6], [1,1, 1,1])).toEqual(4);
  });
  it(`4 fish, all 4 stay alive coz all upstream`, () => {
    expect(solution([3,4,5,6], [0,0, 0,0])).toEqual(4);
  });
  it(`4 fish, 1 downstream stays alive`, () => {
    expect(solution([10, 9, 8, 7], [1, 0, 0, 0 ])).toEqual(1);
  });
  it(`4 fish, 1 upstream stays alive`, () => {
    expect(solution([7, 8, 9, 10], [1, 1, 1, 0])).toEqual(1);
  });

});
