import styled from "@emotion/styled";
import { FC, useMemo } from "react";

interface Props {
  share: IShare;
}
const Layout = styled.div`
  font-size: 15px;
  line-height: 1.48;
  display: inline-grid;
  justify-content: flex-start;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.1px;
  margin: 1px 0;
`;

const Desc = styled.div`
  color: #69727d;
  font-size: 13px;
  /* margin-top: 2px; */
`;

const ShareLink = styled.a`
  text-decoration: none;
  color: #0039bf;

  &:visited {
    color: #609;
  }

  &:hover .site-title {
    text-decoration: underline;
  }

  &:hover {
    color: #0039bf;
  }
`;

const Site: FC<Props> = ({ share }) => {
  const { title, url } = share;

  const sitename = useMemo(() => {
    return new URL(url).hostname;
  }, [url]);

  return (
    <ShareLink>
      <Layout>
        <Title className="site-title">{title}</Title>
        <Desc>{sitename}</Desc>
      </Layout>
    </ShareLink>
  );
};

export default Site;
