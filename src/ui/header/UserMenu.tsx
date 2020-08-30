import styled from "@emotion/styled";
import { useAuthStore } from "common/store";
import Link from "next/link";
import { Dropdown, Menu, message } from "antd";
import { ComponentProps } from "react";
import api from "common/api";

const Layout = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, max-content);
  grid-gap: 0 1em;
`;

const MenuLink = styled.a`
  color: #555;
  padding: 0.25em 0.5em;
  display: flex;
  align-items: center;

  &:hover {
    color: #111;
  }

  svg {
    display: block;
    fill: none;
  }
`;

const UserAvatar = styled.img`
  width: 36px;
  height: 36px;
  background: #dadada;
  border-radius: 999rem;
  object-fit: cover;
  object-position: center;
`;

const UserMenu = () => {
  const user = useAuthStore((s) => s.user!);

  const plus = (
    <svg width={20} height={20} viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
      />
    </svg>
  );

  const handleMenuClick: ComponentProps<typeof Menu>["onClick"] = async ({
    key,
  }) => {
    switch (key) {
      case "0": {
        try {
          await api.signOut();
        } catch (err) {
          message.error(`Failed to sign out, ${err.message}`, 1.5);
        }
        break;
      }
    }
  };

  const menu = (
    <Menu style={{ minWidth: 180 }} onClick={handleMenuClick}>
      <Menu.Item key="0">Sign Out</Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Link href="/new-bookmark" passHref>
        <MenuLink>{plus}</MenuLink>
      </Link>
      <Dropdown
        placement="bottomRight"
        arrow
        overlay={menu}
        trigger={["click"]}
      >
        <a onClick={(e) => e.preventDefault()}>
          {user.photoURL ? <UserAvatar src={user.photoURL} /> : <UserAvatar />}
        </a>
      </Dropdown>
    </Layout>
  );
};

export default UserMenu;
