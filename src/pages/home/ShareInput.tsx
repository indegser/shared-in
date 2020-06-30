import { forwardRef, HTMLProps } from "react";
import styled from "@emotion/styled";

interface Props extends HTMLProps<HTMLInputElement> {
  label: string;
}

const Layout = styled.div``;

const Input = styled.input`
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
  width: 100%;
  box-shadow: inset 0 1px 0 rgba(225, 228, 232, 0.2);
  box-sizing: border-box;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

const ShareInput = forwardRef<HTMLInputElement, Props>((passedProps, ref) => {
  const { label, ...props } = passedProps;
  return (
    <Layout>
      <Label>{label}</Label>
      <Input ref={ref} {...props} />
    </Layout>
  );
});

export default ShareInput;
