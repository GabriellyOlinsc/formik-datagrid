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