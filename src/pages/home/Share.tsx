import styled from "@emotion/styled";
import { FC, useMemo } from "react";
import format from "date-fns/format";
import Site from "./Site";
import ShareAction from "./share/ShareAction";

interface Props {
  share: IShare;
}

const Layout = styled.article`
  padding: 1em 0;
  position: relative;

  & + & {
    border-top: 1px solid #e5e5e5;
  }
`;

const Attr = styled.h5`
  margin: 0;
  font-size: 13px;
  color: #111;
  font-weight: 600;
`;

const Date = styled.span`
  color: #666;
  font-weight: 500;
`;

const Comment = styled.p`
  color: #111;
  font-size: 14px;
  margin: 0;
  margin: 0.5em 0;
`;

const Share: FC<Props> = ({ share }) => {
  const date = useMemo(() => {
    return format(share.createdAt, "MM/dd/yyyy");
  }, [share.createdAt]);

  return (
    <Layout>
      <ShareAction share={share} />
      <Attr>
        {share.team}
        {` @${share.company}`}
        <Date>{` · ${date}`}</Date>
      </Attr>
      <Site share={share} />
      {share.comment && <Comment>{share.comment}</Comment>}
    </Layout>
  );
};

export default Share;
