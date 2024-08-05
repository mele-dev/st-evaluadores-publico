export interface User {
  email: string;
  username: string;
  id: number;
  isAdmin: boolean;
}

export interface UserWithToken {
  token: string,
  user: User,
}

export function isUser(obj: object): obj is User {
  return obj
    && 'email' in obj && typeof obj.email === 'string'
    && 'username' in obj && typeof obj.username === 'string'
    && 'id' in obj && typeof obj.id === 'number'
    && 'isAdmin' in obj && typeof obj.isAdmin === 'boolean';
}

// FIX: Esto lo hago temporalmente para hacer el mock de la base de datos.
export interface UserAndPassword extends User {
  password: string;
}

export interface UserCreationInfo {
  username: string;
  isAdmin: boolean;
  password: string;
  email: string;
}
