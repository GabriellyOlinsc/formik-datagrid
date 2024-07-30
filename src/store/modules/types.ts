
export type AuthState = {
    user: string | null
    name: string | null
    email: string | null
    token: string | null
    role: string | null
    isAuthenticated: boolean
}

export interface LoginRequest {
    login: string
    password: string
}