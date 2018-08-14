import { AreaTag } from './area-tag-model';
import { Optional } from '../../../../../node_modules/@angular/core';
export class CountryTag {
    name: string
}

export class UpdateCountry {
    countryTag: string
    areaTag: string
}

export class CountryCity {
    areaTags: AreaTag[]
}

export class CountryList {
    countryTags: CountryForm[]
}

export class CountryForm {
    name: string
    areaTags: AreaTag[]
    constructor(name, @Optional()areaTags){
        this.name = name;
        this.areaTags = areaTags;
    }
}