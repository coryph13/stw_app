import { IToken } from "@/types/token";

export function retrieveToken() {
    // token = request.cookies().get('access-token');
    const state = localStorage.getItem('token');

    if (!state) {
        return null;
    }

    const token: IToken = JSON.parse(state);

    return token;
}

export function storeToken(token: IToken) {
    localStorage.setItem('token', JSON.stringify(token));
}

export function hasToken() {
    return retrieveToken() !== null;
}
