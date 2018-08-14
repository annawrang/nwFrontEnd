import {  CountryForm } from './country-tag.model';
import { ForTag } from './for-tag.model';
/*export class Network {
    name: string
    description: string
    link: string
    pictureUrl: string
    city: string
    country: string

}

export interface INetwork {
name: string
description: string
link: string
pictureUrl: string
city: string
country: string
}*/

export class Network {
    name: string
    description: string
    link: string
    pictureUrl: string
    countryTags: CountryForm[]
    forTags: ForTag[]
    global: boolean
    constructor(){

    }
}