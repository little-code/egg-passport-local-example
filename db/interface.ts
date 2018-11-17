export interface UserIdentity {
  id: number;
  username: string;
  password: string;
  displayName: string;
  emails: Array<{ value: string }>;
}
