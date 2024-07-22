import { AddressType } from "./address.interface"
import { CompanyType } from "./company.interface"

export interface UsersType {
    id?: number,
    name: string,
    username: string,
    email: string,
    address: AddressType
    phone: string,
    website: string,
    company: CompanyType
}
