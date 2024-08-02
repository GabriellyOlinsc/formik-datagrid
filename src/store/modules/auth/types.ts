
export type AuthState = {
    user: string | null
    token: string | null
    isAuthenticated: boolean
}

export interface LoginRequest {
    login: string
    password: string
}