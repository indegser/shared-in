import styled from "@emotion/styled";

const Layout = styled.article`
  padding: 1em 0;

  & + & {
    border-top: 1px solid #e5e5e5;
  }
`;

const Attr = styled.h5`
  margin: 0;
  font-size: 0.825rem;
  font-weight: 700;
  margin-bottom: 0.25em;
  font-family: "Noto Serif KR", serif;
  color: #514c4c;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  font-family: "Noto Serif KR", serif;
`;

const Share = () => {
  return (
    <Layout>
      <Attr>네이버랩스. 플랫폼 엔지니어링. 프론트엔드</Attr>
      <Title>Mocking API Requests with Jest</Title>
    </Layout>
  );
};

export default Share;
