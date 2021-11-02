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
import { decreaseNum, increaseNum } from "../GlobalFunction";

export const RecoilState = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [valueOne, setValueOne] = useRecoilState(counterStateOne);
  const [valueTwo, setValueTwo] = useRecoilState(counterStateTwo);
  const [combineValue, setCombineValue] = useRecoilState(counterCombine);
  const [asyncCounterValue, setAsyncCounter] = useRecoilState(asyncCounter);

  let loading = false;

  useEffect(() => {
    (async () => {
      console.log(loadingState);
      setLoadingState(true);
      setTimeout(() => {
        setAsyncCounter(valueOne + valueTwo);
        setLoadingState(false);
      }, 200);

      // 다음과 같이 컴포넌트에서 직접 비동기 처리를 해주고, api 통신 결과로 받아온 data를 직접 atom에 set 해줍니다.
    })();
  }, [asyncCounterValue, valueOne, valueTwo]);

  return (
    <>
      <StateWrapper>
        <StateTitle>Recoil</StateTitle>

        <StateSubTitle>값 입력</StateSubTitle>
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
        <StateSubTitle>on-time 상태관리</StateSubTitle>
        <CounterWrapper>
          <CurrentValue>{combineValue}</CurrentValue>
        </CounterWrapper>
        <StateSubTitle>비동기 상태관리</StateSubTitle>
        <CounterWrapper>
          {loadingState ? (
            <CounterLoader
              loading={loadingState}
              type="Oval"
              color="#7a1139"
              width="30"
              height="30"
            />
          ) : (
            <CurrentValue> {asyncCounterValue}</CurrentValue>
          )}
        </CounterWrapper>

        <StateDetail>atom을 활용한 심플한 상태관리가 장점입니다. </StateDetail>
      </StateWrapper>
    </>
  );
};
