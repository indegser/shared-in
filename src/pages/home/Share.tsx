import styled from "@emotion/styled";
import { FC } from "react";
import Site from "./Site";

interface Props {
  share: IShare;
}

const Layout = styled.article`
  padding: 1em 0;

  & + & {
    border-top: 1px solid #e5e5e5;
  }
`;

const ShareLink = styled.a`
  text-decoration: none;
  color: #0039bf;

  &:visited {
    color: #609;
  }
`;

const Attr = styled.h5`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: #111;
`;

const Share: FC<Props> = ({ share }) => {
  const attr = [share.company, share.team]
    .filter((item) => item?.length > 0)
    .join(" › ");

  if (attr.length === 0) return null;

  return (
    <ShareLink href={share.url} title={share.title}>
      <Layout>
        <Attr>{attr}</Attr>
        <Site share={share} />
      </Layout>
    </ShareLink>
  );
};

export default Share;
