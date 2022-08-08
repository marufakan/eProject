export interface IUser {
    status?: boolean;
    result?: Result[];
}

export interface Result {
    id?:       number;
    name?: string;
    surname?: string;
    bloodType?: string;
    phone?: string;
    address?: string;
}