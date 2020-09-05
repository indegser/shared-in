import styled from "@emotion/styled";
import { FC, useMemo } from "react";
import { Typography } from "ui/typography";

interface Props {
  share: IShare;
}
const Layout = styled.div`
  font-size: 15px;
  line-height: 1.48;
  padding: 0.6em 1em;
  display: grid;
  justify-content: flex-start;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  letter-spacing: ${Typography.getTracking(16)};
  font-variation-settings: "wght" 640;
  margin: 2px 0;
  line-height: 1.24;
  color: #24292e;
`;

const Desc = styled.div`
  color: #69727d;
  font-size: 13px;
  letter-spacing: ${Typography.getTracking(13)};
  line-height: 21 / 16;
`;

const ShareLink = styled.a`
  text-decoration: none;
  color: #0039bf;
`;

const Site: FC<Props> = ({ share }) => {
  const { title, url } = share;

  const sitename = useMemo(() => {
    return new URL(url).hostname;
  }, [url]);

  return (
    <ShareLink href={url} title={title}>
      <Layout>
        <Title className="site-title">{title}</Title>
        <Desc>{sitename}</Desc>
      </Layout>
    </ShareLink>
  );
};

export default Site;
