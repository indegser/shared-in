import { forwardRef } from "react";
import styled from "@emotion/styled";
import ShareInput from "./ShareInput";

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
  width: 100%;
  box-sizing: border-box;
`;

const ShareFormUrl = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <Layout>
      <ShareInput label="URL" name="url" ref={ref} />
    </Layout>
  );
});

export default ShareFormUrl;
