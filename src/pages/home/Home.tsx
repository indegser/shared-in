import styled from "@emotion/styled";
import Share from "./Share";
import useSWR from "swr";
import api from "common/api";
import Spinner from "ui/Spinner";
import About from "./About";

const Layout = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto max-content;
  grid-gap: 0 2em;
  position: relative;
`;

const ShareGrid = styled.div`
  display: grid;
  padding-bottom: 48px;
`;

const Home = () => {
  const { data } = useSWR("shares", api.fetchShares);

  if (!data) {
    return <Spinner message="Getting bookmarks from great teams" />;
  }

  return (
    <Layout>
      <ShareGrid>
        {data?.map((share) => (
          <Share key={share.id} share={share} />
        ))}
      </ShareGrid>
      <About />
    </Layout>
  );
};

export default Home;
