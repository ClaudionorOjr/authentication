import { randomUUID } from 'node:crypto';

interface AdminAttr {
  email: string;
  password: string;
  name: string;
  surname: string;
}

export class Admin {
  private _id: string;
  private attributes: AdminAttr;

  constructor(attributes: AdminAttr, id?: string) {
    this._id = id ?? randomUUID();
    this.attributes = attributes;
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this.attributes.name;
  }

  public set name(name: string) {
    this.attributes.name = name;
  }

  public get surname(): string {
    return this.attributes.surname;
  }

  public set surname(surname: string) {
    this.attributes.surname = surname;
  }

  public get email(): string {
    return this.attributes.email;
  }

  public set email(email: string) {
    this.attributes.email = email;
  }

  public get password(): string {
    return this.attributes.password;
  }

  public set password(password: string) {
    this.attributes.password = password;
  }
}
