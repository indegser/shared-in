import styled from "@emotion/styled";
import { useAuthStore } from "common/store";

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
  return (
    <div>
      <Layout>
        <MenuLink>{plus}</MenuLink>
        {user.photoURL ? <UserAvatar src={user.photoURL} /> : <UserAvatar />}
      </Layout>
    </div>
  );
};

export default UserMenu;
