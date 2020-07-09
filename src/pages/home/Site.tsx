import styled from "@emotion/styled";
import { FC, useMemo } from "react";

interface Props {
  share: IShare;
}
const Layout = styled.div`
  margin-top: 4px;
  font-size: 16px;
  line-height: 1.48;
`;

const Title = styled.div`
  font-weight: 600;
`;

const Desc = styled.div`
  color: #69727d;
  font-size: 14px;
`;

const Site: FC<Props> = ({ share }) => {
  const { title, url } = share;
  const sitename = useMemo(() => {
    return new URL(url).hostname;
  }, [url]);

  return (
    <Layout>
      <Title className="site-title">{title}</Title>
      <Desc>{sitename}</Desc>
    </Layout>
  );
};

export default Site;
