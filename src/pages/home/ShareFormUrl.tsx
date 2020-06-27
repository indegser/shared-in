import { forwardRef } from "react";
import styled from "@emotion/styled";

interface Props {}

const Layout = styled.div``;

const Preview = styled.div``;

const Textarea = styled.textarea`
  padding: 5px 12px;
  font-size: 14px;
  line-height: 20px;
  color: #24292e;
  vertical-align: middle;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: right 8px center;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  outline: none;
  box-shadow: inset 0 1px 0 rgba(225, 228, 232, 0.2);
  resize: none;
`;

const ShareFormUrl = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  return (
    <Layout>
      <Textarea rows={3} ref={ref} name="url"></Textarea>
      <Preview></Preview>
    </Layout>
  );
});

export default ShareFormUrl;
