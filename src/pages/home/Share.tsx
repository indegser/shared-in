import styled from "@emotion/styled";
import { FC, useMemo } from "react";
import format from "date-fns/format";
import Site from "./Site";
import ShareAction from "./share/ShareAction";
import { Typography } from "ui/typography";

interface Props {
  share: IShare;
}

const Layout = styled.article`
  position: relative;
  border: 1px solid #e9ecf0;
  border-radius: 6px;
`;

const Attr = styled.h5`
  margin: 0;
  font-size: 14px;
  letter-spacing: ${Typography.getTracking(14)};
  font-variation-settings: "wght" 540;
  color: #24292e;
  padding: 6px 0;
`;

const Date = styled.span`
  color: #666;
  font-variation-settings: "wght" 400;
`;

const Comment = styled.p`
  font-size: 14px;
  letter-spacing: ${Typography.getTracking(14)};
  margin: 0;
  padding: 0.6em 1em;
  color: #24292e;
  border-top: 1px solid #e9ecf0;
`;

const ShareHeader = styled.div`
  padding: 0 1em;
  background: #f6f8fa;
  border-bottom: 1px solid #e9ecf0;
`;

const Share: FC<Props> = ({ share }) => {
  const date = useMemo(() => {
    return format(share.createdAt, "MM/dd/yyyy");
  }, [share.createdAt]);

  return (
    <Layout>
      <ShareHeader>
        <ShareAction share={share} />
        <Attr>
          {share.team}
          {` (${share.company})`}
          <Date>{` · ${date}`}</Date>
        </Attr>
      </ShareHeader>
      <Site share={share} />
      {share.comment && <Comment>{share.comment}</Comment>}
    </Layout>
  );
};

export default Share;
