import styled, { css, ThemedStyledProps } from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Loader, { LoaderProps } from "react-loader-spinner";
import { RefAttributes } from "react";
import { LoaderType } from "../dto";
//정중앙
export const CenterCenterStyle = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

//새로 중앙정렬
export const verticalCenterStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

//가로 중앙정렬

export const horizontalCenterStyle = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

// 전체 wrapper
export const HomeWrapper = styled.div`
  width: 100vw;
  height: 1500px;
  ${CenterCenterStyle}
`;

export const HomeArea = styled.div`
  ${horizontalCenterStyle}
  flex-wrap: wrap;
  width: 1300px;
  height: 1300px;
`;

export const StateWrapper = styled.div`
  width: 400px;
  height: 500px;
  ${verticalCenterStyle};
`;

export const StateTitle = styled.div`
  margin-bottom: 30px;
  width: 300px;
  height: 30px;
  ${CenterCenterStyle};
  font-size: 2rem;
  font-weight: 500;
`;

export const StateSubTitle = styled.div`
  width: 300px;
  height: 30px;
  ${CenterCenterStyle};
  font-size: 1.1rem;
`;

export const StateDetail = styled.div`
  width: 250px;
  height: 70px;
  ${CenterCenterStyle};
  text-align: center;
`;

export const CounterWrapper = styled.div`
  ${horizontalCenterStyle}
  width: 200px;
  height: 60px;
`;

export const CurrentValue = styled.p`
  font-size: 2rem;
  color: black;
`;

export const PlusIcon = styled(AiOutlinePlus)`
  font-size: 1.3rem;
  color: black;
`;

export const MinusIcon = styled(AiOutlineMinus)`
  font-size: 1.3rem;
  color: black;
`;

export const CounterLoader = styled(Loader)<LoaderType>`
  display: ${({ loading }: any) => (loading === true ? "flex" : "none")};
`;
