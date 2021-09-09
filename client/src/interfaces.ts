export interface IPost {
    id: number;
    description:string,
    image: string;
    date: string;
    userId: string;
    like: number;
    comment?: number;
    createdAt?: number;
    updatedAt?: number;
    // user
    username?: string;
    profilePicture?: string;
    nbComments: number;
    nbLikes: number;
}

export interface IUser {
    id: string;
    username: string;
    // email: string;
    // password: string;
    profilePicture: string;
    // coverPicture?: string;
    // isAdmin?: boolean;
    // createdAt?: number;
    // updatedAt?: number;
}

export interface IRegister {}

export interface ILogin {
    username: string;
    password: string;
}

export interface IPayloadLogin {
    userId: string;
    token: string;
}