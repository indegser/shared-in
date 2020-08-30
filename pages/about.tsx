import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";

const styles = css`
  @font-face {
    font-family: "InterVF";
    src: url("/fonts/Inter-VF.ttf");
  }
`;

const Headline = styled.h1`
  padding: 2rem 0;
  margin: 0;
  font-size: 98px;
  line-height: calc(100 / 98);
  font-family: "InterVF";
  font-variation-settings: "wght" 760;
  letter-spacing: -2px;
  margin: 0;

  @media (max-width: 500px) {
    font-size: 54px;
    font-variation-settings: "wght" 820;
    letter-spacing: -1px;
  }
`;

const SubHeadline = styled.h3`
  font-size: 21px;
  line-height: 32px;
  font-family: "InterVF";
  font-variation-settings: "wght" 600;
  max-width: 560px;
  color: #778;
  letter-spacing: -0.3px;
`;

const Highlighted = styled.span`
  color: rgba(0, 0, 0, 0.85);
`;

const Page = () => {
  return (
    <>
      <Global styles={styles} />
      <div>
        <Headline>
          Great teams
          <br />
          share great
          <br />
          articles.
        </Headline>
        <SubHeadline>
          <Highlighted>
            People want to know what top teams and companies are sharing inside.{" "}
          </Highlighted>
          The fact that those URLs survived top team's curation level to get
          shared inside guarantees the quality of the information.
        </SubHeadline>
      </div>
    </>
  );
};

export default Page;
