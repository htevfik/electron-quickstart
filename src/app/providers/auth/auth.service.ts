import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import Dexie from 'dexie';

import { DataService } from '../data/data.service';

interface User {
  username: string;

  name: string;
  surname: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  private readonly table: Dexie.Table<User, number>;
  constructor(private data: DataService) {}

  createUser(user: User) {
    return this.table.add(user);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }
}
