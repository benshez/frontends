export interface AuthToken {
  access_token: string;
  id_token: string;
  scope: string;
  expires_in: number;
  token_type: string;
}