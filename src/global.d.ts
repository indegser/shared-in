interface IOpenGraph {
  title: string;
  url: string;
  description?: string;
  image?: string;
}

interface IShare {
  id: string;
  team: string;
  company: string;
  url: string;
  title: string;
  image: string;
  description: string;
  uid: string;
}

interface IUser {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
}
