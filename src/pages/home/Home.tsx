import styled from "@emotion/styled";
import Share from "./Share";
import Spinner from "ui/Spinner";
import About from "./About";
import { useEffect } from "react";
import { useShareStore } from "common/share.hooks";

const Layout = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto max-content;
  grid-gap: 0em 2em;
  position: relative;

  @media (max-width: 820px) {
    grid-template-columns: auto;
  }
`;

const ShareGrid = styled.div`
  display: grid;
  padding-bottom: 48px;
  grid-gap: 2em;
`;

const Home = () => {
  const fetch = useShareStore((s) => s.fetch);
  const shares = useShareStore((s) => s.shares);

  useEffect(() => {
    fetch();
  }, []);

  if (!shares) {
    return <Spinner message="Getting bookmarks from great teams" />;
  }

  return (
    <Layout>
      <ShareGrid>
        {shares?.map((share) => (
          <Share key={share.id} share={share} />
        ))}
      </ShareGrid>
      <About />
    </Layout>
  );
};

export default Home;
