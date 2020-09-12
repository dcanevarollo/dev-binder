export default class User {
  id?: string;

  name: string;

  username: string;

  avatar_url?: string;

  company?: string;

  location?: string;

  bio?: string;

  constructor(name: string, username: string) {
    this.name = name;
    this.username = username;
  }
}
