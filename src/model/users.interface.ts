export interface UsersType {
    id?: number,
    name: string,
    username: string,
    address: AddressType
    phone: string,
    website: string,
    company: CompanyType
}

export interface AddressType{
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: GeoType,
}

export interface GeoType {
    lat: string,
    lgn: string
}

export interface CompanyType{
    name: string,
    catchPhrase: string,
    bs: string
}