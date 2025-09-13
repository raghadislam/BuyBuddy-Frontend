export interface User {
  id: string;
  email: string;
  userName: string;
  name?: string;
  avatarUrl?: string;
  role?: 'USER' | 'ADMIN' | 'BRAND' | 'MANAGER' | 'GUEST';
}

export interface LoginResponse {
  token: string;
  accessToken: string;
  data: {
    accessToken: string;
    tokens: any;
    account: {
      user: User;
    };
  };
}
