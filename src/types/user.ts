enum ELoginType {
    Phone = 'phone_type',
    Email = 'email_type',
}

export interface IUser {
    name: string;
    login: string;
    login_type: ELoginType;
}
