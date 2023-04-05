export interface Iproject {
    id: number;
    name: string;
    delete: boolean;
}

export interface Ilabel {
    id: number;
    name: string;
    delete: boolean;
}

export interface Itask{
    id: number;
    date: string;
    project: number;
    label: number;
    name: string;
    done: boolean;
    delete: boolean;
}

export interface Iuser {
    id: number;
    name: string;
    email: string;
    image: string;
}