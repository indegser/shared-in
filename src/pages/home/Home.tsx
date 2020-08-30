import styled from "@emotion/styled";
import Share from "./Share";
import useSWR from "swr";
import api from "common/api";
import Spinner from "ui/Spinner";

const Layout = styled.div`
  max-width: 640px;
  margin: 0 auto;
`;

const ShareGrid = styled.div`
  display: grid;
  padding: 0 16px;
  padding-bottom: 48px;
`;

const Home = () => {
  const { data } = useSWR("shares", api.fetchShares);

  return (
    <Layout>
      {data ? (
        <ShareGrid>
          {data?.map((share) => (
            <Share key={share.id} share={share} />
          ))}
        </ShareGrid>
      ) : (
        <Spinner message="Getting bookmarks from great teams" />
      )}
    </Layout>
  );
};

export default Home;
