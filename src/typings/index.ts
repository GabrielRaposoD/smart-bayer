interface Item {
  name: string;
  description: string;
  photoUri: string;
}

export interface Example {
  id: string;
  main: number;
}

export enum ButtonState {
  normal = 'normal',
  disabled = 'disabled',
  inverse = 'inverse',
}

export interface Product extends Item {}

export interface Service extends Item {}

export interface Experience extends Item {
  secondDescription: string;
}

export interface Company {
  name: string;
  description: string;
  products: Product[];
}

export interface Template {
  id: number;
  type: string;
  steps: number[];
}

export interface Option {
  label: string;
  value: number | string;
}
