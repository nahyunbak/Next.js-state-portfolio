import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { RecoilRoot } from "recoil";
import { HomeArea, HomeWrapper } from "../Components/GlobalStyled";
import { RecoilState } from "../Components/RecoilState";
import { RecoilStateWrapper } from "../Components/RecoilState/StyledRecoilState";

import styles from "../styles/Home.module.css";

// 각 컴포넌트를 상태관리 컨테이너로 감쌈.
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>State containers with Next.js</title>
        <meta name="description" content="state containers with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeWrapper>
        <HomeArea>
          <RecoilRoot>
            <RecoilState />
          </RecoilRoot>
        </HomeArea>
      </HomeWrapper>
    </>
  );
};

export default Home;
