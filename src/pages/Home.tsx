import styled from "@emotion/styled";
import Share from "./home/Share";
import ShareForm from "./home/ShareForm";
import useSWR from "swr";
import api from "common/api";

const Layout = styled.div`
  max-width: 640px;
  margin: 0 auto;
`;

const ShareGrid = styled.div`
  display: grid;
  padding: 0 16px;
`;

const Home = () => {
  const { data } = useSWR("shares", api.fetchShares);

  return (
    <Layout>
      <ShareForm />
      <ShareGrid>
        {data?.map((share) => (
          <Share key={share.id} share={share} />
        ))}
      </ShareGrid>
    </Layout>
  );
};

export default Home;
