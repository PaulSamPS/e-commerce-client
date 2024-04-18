export interface UserData {
    id: number;
    email: string;
    username: string;
}

export interface UserSchema {
    userData?: UserData;
    error?: string
    loading: boolean
}

