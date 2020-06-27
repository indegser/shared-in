import styled from "@emotion/styled";
import { FC, useMemo } from "react";

interface Props {
  share: IShare;
}
const Layout = styled.div`
  margin-top: 4px;
  font-size: 14px;
  line-height: 1.48;
`;

const Title = styled.div``;

const Desc = styled.div`
  color: #69727d;
`;

const Site: FC<Props> = ({ share }) => {
  const { title, url } = share;
  const sitename = useMemo(() => {
    return new URL(url).hostname;
  }, [url]);

  return (
    <Layout>
      <Title>{title}</Title>
      <Desc>{sitename}</Desc>
    </Layout>
  );
};

export default Site;
