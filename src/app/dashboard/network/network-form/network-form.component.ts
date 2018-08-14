import { NetworkService } from './../network.service';
import { NgForm } from '@angular/forms';
import { CountryForm } from './../model/country-tag.model';
import { Component, OnInit } from '@angular/core';
import { Network } from '../model/network.model';

@Component({
  selector: 'app-network-form',
  templateUrl: './network-form.component.html',
  styleUrls: ['./network-form.component.css']
})
export class NetworkFormComponent implements OnInit {
  private tags;
  private areaTags;
  selectDisabled: boolean;

  constructor(private networkService: NetworkService) { }

  ngOnInit() {
    this.networkService.getAlternativesTags().subscribe( data => {
      this.tags = data;
      console.log(data);
    })   
    this.selectDisabled = true;
  }
  
  onCountrySelected(country: any){
    
    if(country =="Sweden"){
      this.networkService.getCitiesForCountry(country).subscribe(data => {
        console.log(data);
        this.areaTags = data;
        this.selectDisabled = false; 
      })
    }
  }

  OnSubmit(form: NgForm){   
    const body: Network  = {
      name : form.value.name,
      description : form.value.description,
      link: form.value.link,
      pictureUrl: form.value.pictureUrl,
      countryTags: this.asignAreasToCountry(form),
      forTags: form.value.forTags,
      global: form.value.global
    }
    
    console.log(body);
    

    console.log(form.value.global);
    this.networkService.createNewNetwork(body).subscribe(data => {
      console.log(data)});

  }

  asignAreasToCountry(form: NgForm): Array<CountryForm>{
    let list: Array<CountryForm> = new Array();
    if(form.value.countryTags != null) {
      form.value.countryTags.forEach(element => {
      if(element == "Sweden"){
        list.push(new CountryForm(element, form.value.areaTags))
      } else {
        list.push(new CountryForm(element, null));
      }
      });
    }

    if(form.value.global == true){
      list.push(new CountryForm("Global", null));
    }
    return list;
  }

}
