import { ForTag } from './model/for-tag.model';
import { TagList } from './model/tag-list.model';
import { CountryCity, UpdateCountry, CountryTag } from './model/country-tag.model';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Network } from './model/network.model';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  readonly rootUrl = 'http://127.0.0.1:8080/networks'
  readonly rootUrlCountry = 'http://127.0.0.1:8080/tags/country'
  readonly rootUrlCity = 'http://127.0.0.1:8080/tags/area'
  readonly rootUrlFor = 'http://127.0.0.1:8080/tags/for'
  readonly rootUrlTags = 'http://127.0.0.1:8080/tags'
  private page = 1
  private body: Network;
  private _headersToken = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', sessionStorage.getItem('jwtToken'))
  constructor(private http: HttpClient) { }

  createNewNetwork(network: Network): Observable<any>{
    return this.http.post(this.rootUrl, network, {observe: "response", headers: this._headersToken});  
  }

  createNewCountryTag(countryTag: CountryTag): Observable<any>{
    return this.http.post(this.rootUrlCountry, countryTag, {observe: "response", headers: this._headersToken});
  }

  createNewCityTag(updateCountry: UpdateCountry): Observable<any>{
    return this.http.post(this.rootUrlCity, updateCountry, {observe: "response", headers: this._headersToken});
  }

  createNewForTag(forTag:ForTag): Observable<any>{
    return this.http.post(this.rootUrlFor, forTag, {observe: "response", headers: this._headersToken});
  }
  createCountryList(countrylist): Observable<any>{
    return this.http.post(this.rootUrlCountry, countrylist,{observe: "response", headers: this._headersToken});
  }

  getAlternativesTags(): Observable<TagList>{
    return this.http.get<TagList>(this.rootUrlTags + "/alternatives", {headers: this._headersToken});
  }

  getUsedTags(): Observable<TagList>{
    return this.http.get<TagList>(this.rootUrlTags + "/used", {headers: this._headersToken});
  }
 
  getNetworks(): Observable<Network>{
    return this.http.get<Network>(this.rootUrl, {headers: this._headersToken});
  }
  getNetworksSearch(searchParam): Observable<Network>{
    let params = new HttpParams({
      fromObject: {
          search:searchParam
      }
    })
    return this.http.get<Network>(this.rootUrl, {params: params, headers: this._headersToken})
  }
  findNetworksWithParam(countryParam, areaParam, forTagsParam): Observable<Network>{
   
    console.log("country" + countryParam);
    console.log("area" + areaParam);
    console.log("fortag" + forTagsParam);
    let params;
    /*if(countryParam == null){
      params = new HttpParams({
        fromObject: {
            fortag: forTagsParam
        }
      })
    } else if (forTagsParam == null){
      params = new HttpParams({
        fromObject: {
            country: countryParam,
        }
      })
    }*/
      params = new HttpParams({
        fromObject: {
            country: countryParam,
            area: areaParam,
            fortag: forTagsParam
        }
      })
    
   console.log(params.toString());
    return this.http.get<Network>(this.rootUrl, {params: params, headers: this._headersToken});
  }
  
  getCitiesForCountry(country: string): Observable<any>{
    return this.http.get<CountryCity>(this.rootUrlTags + "/"+ country, {headers: this._headersToken});
  }

}
