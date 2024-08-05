import { Injectable } from '@angular/core';
import { User, UserCreationInfo, UserAndPassword, UserWithToken, } from './User';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

const baseRoute = `${environment.apiUrl}/users`

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private tokenPath = "token";
  private userPath = "user_info";
  private _user?: User;
  private _token?: string;

  public _ultimaRuta?: string;

  constructor(private http: HttpClient) { }

  get isUserAuthenticated(): boolean {
    return !!this._user;
  }
  get isUserAdmin() {
    return this._user?.isAdmin;
  }

  get user() {
    return this._user;
  }

  get token() {
    return this._token;
  }

  get ultimaRuta(): string | undefined {
    return this._ultimaRuta;
  }

  set ultimaRuta(ruta: string) {
    this._ultimaRuta = ruta;
  }

  public async doLogout(): Promise<void> {
    localStorage.clear();
    this._user = undefined;
    this._token = undefined;
    this._ultimaRuta = undefined;
  }

  public async doLocalStorageLogin() {
    if (!localStorage.getItem(this.tokenPath)) {
      throw new Error("No hay usuario previamente logueado en localstorage.");
    }
    try {
      const user = await firstValueFrom(this.http.get<User>(`${baseRoute}/profile`));
      this._user = user;  //Si llega acá el token es válido. actualizamos el usuario.
      localStorage.setItem(this.userPath, JSON.stringify(this._user));
      console.info(`Ya estaba logueado el usuario ${this._user.username}, isAdmin: ${this._user.isAdmin}`);
    } catch (error: any) {
      console.error(error.message);
      this.doLogout();
    }
  }

  public async registerUser(newUser: UserCreationInfo): Promise<User | null> {
    try {
      const res = await firstValueFrom(
        this.http.post<User>(
          `${baseRoute}`,
          newUser
        )
      );
      return res;
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      }
      return null;
    }
  }

  public async getAllUsers(): Promise<Array<User> | null> {
    try {
      return await firstValueFrom(
        this.http.get<Array<User>>(`${baseRoute}`)
      );
    } catch {
      return null;
    }
  }

  public async getUserById(id: number): Promise<User | null> {
    try {
      return await firstValueFrom(
        this.http.get<User>(`${baseRoute}/${id}`)
      );
    } catch {
      return null;
    }
  }

  // The new user must match the previous user's id.
  public async UpdateUser(updatedUser: UserAndPassword): Promise<User | null> {
    try {
      return await firstValueFrom(this.http.put<User>(
        `${baseRoute}/${updatedUser.id}`,
        updatedUser
      ));
    } catch {
      return null;
    }
  }

  public async Login(email: string, password: string): Promise<boolean> {
    try {
      const response = await firstValueFrom(this.http.post<UserWithToken>(
        `${baseRoute}/login`,
        { email: email, password: password }
      ));
      localStorage.setItem(this.tokenPath, response.token);
      localStorage.setItem(this.userPath, JSON.stringify(response.user));
      this._token = response.token;
      this._user = response.user;
      return true;
    } catch (e) {
      return false;
    }
  }

  public async DeleteUser(id: number): Promise<void> {
    await firstValueFrom(this.http.delete(`${baseRoute}/${id}`));
  }
}
