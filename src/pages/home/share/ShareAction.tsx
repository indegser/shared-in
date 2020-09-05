import { FC } from "react";
import { Dropdown, Menu, message } from "antd";
import styled from "@emotion/styled";
import { useAuthStore } from "common/store";
import { MenuProps } from "antd/lib/menu";
import api from "common/api";

interface Props {
  share: IShare;
}

const Dots = styled.div`
  top: 1rem;
  right: 1rem;
  position: absolute;
  width: 18px;
  height: 18px;
  color: #8d8d8d;
`;

const MenuItem = styled(Menu.Item)`
  display: flex;
  align-items: center;
  color: #111;

  svg {
    width: 16px;
    height: 16px;
    display: block;
    margin-right: 8px;
  }
`;

const ShareAction: FC<Props> = ({ share }) => {
  const isOwned = useAuthStore((s) => s.user?.uid === share.uid);

  const handleDelete = () => {
    api.deleteShare(share.id);
    location.reload();
  };

  const handleClick: MenuProps["onClick"] = async ({ key }) => {
    switch (key) {
      case "delete": {
        return handleDelete();
      }
      case "report": {
        await api.reportContent(share.id);
        message.success("Reported content. We will review it.");
      }
    }
  };

  const deleteAction = <MenuItem key="delete">Delete</MenuItem>;

  const overlay = (
    <Menu onClick={handleClick} style={{ minWidth: 180 }}>
      {isOwned && deleteAction}
      {isOwned && <Menu.Divider />}
      <MenuItem key="report">Report content</MenuItem>
    </Menu>
  );

  return (
    <Dropdown overlay={overlay} placement="bottomRight" trigger={["click"]}>
      <Dots>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      </Dots>
    </Dropdown>
  );
};

export default ShareAction;
