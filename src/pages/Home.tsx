import styled from "@emotion/styled";
import Share from "./home/Share";

const Layout = styled.div`
  display: grid;
  padding: 0 16px;
`;

const Home = () => {
  const items = new Array(20).fill(true);
  return (
    <Layout>
      {items.map((_, i) => (
        <Share key={i} />
      ))}
    </Layout>
  );
};

export default Home;
