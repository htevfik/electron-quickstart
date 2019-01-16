import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly dexie: Dexie;
  private readonly dbName = 'stocking';
  private readonly stores = {
    users: '++id, name, surname'
  };

  constructor() {
    this.dexie = new Dexie(this.dbName);
    this.dexie.version(1).stores(this.stores);
  }

  table(name: string) {
    return this.dexie.table(name);
  }
}
