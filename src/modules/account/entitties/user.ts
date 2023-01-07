import { Replace } from '../../../helpers/replace';
import { randomUUID } from 'node:crypto';

export interface UserAttr {
  email: string;
  password: string;
  name: string;
  surname: string;
  phone: string;
  createdAt: Date;
}

export class User {
  private _id: string;
  private attributes: UserAttr;

  constructor(
    attributes: Replace<UserAttr, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();

    this.attributes = {
      ...attributes,
      createdAt: attributes.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
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

  public set password(passwod: string) {
    this.attributes.password = passwod;
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

  public get phone(): string {
    return this.attributes.phone;
  }

  public set phone(phone: string) {
    this.attributes.phone = phone;
  }

  public get createdAt(): Date {
    return this.attributes.createdAt;
  }
}
