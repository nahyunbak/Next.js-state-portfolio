import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  GetRecoilValue,
} from "recoil";

export const counterStateOne = atom({
  key: "countertStateOne",
  default: 0,
});

export const counterStateTwo = atom({
  key: "counterStateTwo",
  default: 0,
});

export const counterStateThree = atom({
  key: "counterStateThree",
  default: 0,
});

export const asyncCounter = atom({
  key: "asyncCounter",
  default: 0,
});

// selector를 사용하면, 캐싱이 지원된다.

export const counterCombine = selector({
  key: "counterCombine",
  get: ({ get }) => {
    return get(counterStateOne) + get(counterStateTwo);
  },
  set: ({ set }, newValue) => {
    set(asyncCounter, newValue);
  },
});
