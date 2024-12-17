export type User = {
    id?: number;
    firstName?: string;
    lastName?: string;
    birthday?: Date;
    email?: string;
    phoneNumber?: string;
    role?: string;
};

export type Driver = {
    id?: number;
    user?: User;
    reviews?: Review[];
}

export type Review = {
    id?: number;
    rating: number;
    text: String;
}