export interface IProduct {
  id?: string;
  name: string;
  description: string;
  category: string;
  price: number;
  promotion: number;
  status: string;
  image: string;
  createdAt?: Date;
}

export interface IUser {
  _id: string;
  username: string;
  displayName?: string;
  email: string;
  password: string;
  gender?: string;
  age?: number;
  image?: string;
  createdAt?: Date;
  deletedAt?: Date;
  editedAt?: Date;
  isAdmin?: boolean;
}

export interface IOrder {
  user_id: string;
  products: IProduct[];
  createdAt: Date;
  closedAt: Date;
  updatedAt: Date;
  status: string;
}

export interface IAuth {
  user: IUser;
  token: string;
}

export interface IResponseError {

      message: string;
}

//// TODO add cart interface
