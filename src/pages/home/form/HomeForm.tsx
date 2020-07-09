import { useAuthStore, AuthState } from "common/store";
import ShareForm from "./ShareForm";
import ConnectGithub from "./ConnectGithub";

const HomeForm = () => {
  const status = useAuthStore((s) => s.status);

  switch (status) {
    case AuthState.Authenticated:
      return <ShareForm />;
    case AuthState.Anonymous:
      return <ConnectGithub />;
    default:
      return <div>Loading ...</div>;
  }
};

export default HomeForm;
