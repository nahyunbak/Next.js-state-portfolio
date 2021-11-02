import {
  CounterLoader,
  CounterWrapper,
  CurrentValue,
  MinusIcon,
  PlusIcon,
  StateDetail,
  StateSubTitle,
  StateTitle,
  StateWrapper,
} from "../GlobalStyled";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  SetterOrUpdater,
} from "recoil";
import {
  asyncCounter,
  counterCombine,
  counterStateOne,
  counterStateTwo,
} from "./RecoilContainer";
import { useEffect, useState } from "react";

export const RecoilState = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [valueOne, setValueOne] = useRecoilState(counterStateOne);
  const [valueTwo, setValueTwo] = useRecoilState(counterStateTwo);
  const [valueAsync, setValueAsync] = useRecoilState(asyncCounter);
  const [combineValue, setCombineValue] = useRecoilState(counterCombine);
  const [asyncCounterValue, setAsyncCounter] = useRecoilState(asyncCounter);

  let loading = false;

  useEffect(() => {
    (async () => {
      setLoadingState(true);
      setTimeout(() => setAsyncCounter(valueOne + valueTwo), 1000);
      // 다음과 같이 컴포넌트에서 직접 비동기 처리를 해주고, api 통신 결과로 받아온 data를 직접 atom에 set 해줍니다.
    })();
    setLoadingState(false);
  }, [setAsyncCounter, valueOne, valueTwo]);

  const increaseNum = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    setter: SetterOrUpdater<number>
  ) => {
    setter((oldState) => oldState + 1);
  };
  const decreaseNum = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    setter: SetterOrUpdater<number>
  ) => setter((oldState) => oldState - 1);

  return (
    <>
      <RecoilRoot>
        <StateWrapper>
          <StateTitle>Recoil</StateTitle>
          <StateSubTitle>on-time 상태관리</StateSubTitle>
          <CounterWrapper>
            <MinusIcon onClick={(e) => decreaseNum(e, setValueOne)} />
            <CurrentValue>{valueOne}</CurrentValue>
            <PlusIcon onClick={(e) => increaseNum(e, setValueOne)} />
          </CounterWrapper>
          <CounterWrapper>
            <MinusIcon onClick={(e) => decreaseNum(e, setValueTwo)} />
            <CurrentValue>{valueTwo}</CurrentValue>
            <PlusIcon onClick={(e) => increaseNum(e, setValueTwo)} />
          </CounterWrapper>
          <CounterWrapper>
            <CurrentValue>
              {combineValue}, {asyncCounterValue}
            </CurrentValue>
          </CounterWrapper>
          <StateSubTitle>비동기 상태관리</StateSubTitle>
          <CounterLoader
            loading={loading}
            type="Oval"
            color="#7a1139"
            width="30"
            height="30"
          />
          <StateDetail>Recoil의 장점은 ~~가 있습니다. </StateDetail>
        </StateWrapper>
      </RecoilRoot>
    </>
  );
};
