import { randomUUID } from 'node:crypto';

export interface AddressAttr {
  city: string;
  street: string;
  streetNumber: number;
  userId: string;
}

export class Address {
  private _id: string;
  private attributes: AddressAttr;

  constructor(attributes: AddressAttr, id?: string) {
    this._id = id ?? randomUUID();
    this.attributes = attributes;
  }

  public get id(): string {
    return this._id;
  }

  public get city(): string {
    return this.attributes.city;
  }

  public set city(city: string) {
    this.attributes.city = city;
  }

  public get street(): string {
    return this.attributes.street;
  }
  public set street(street: string) {
    this.attributes.street = street;
  }

  public get streetNumber(): number {
    return this.attributes.streetNumber;
  }

  public set streetNumber(streetNumber: number) {
    this.attributes.streetNumber = streetNumber;
  }

  public get userId(): string {
    return this.attributes.userId;
  }

  public set userId(userId: string) {
    this.attributes.userId = userId;
  }
}
