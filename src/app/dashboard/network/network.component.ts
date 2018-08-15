import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { NetworkService } from './network.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  private networks;
  private tags;
  private areaTags;
  private countrySelected;
  private areaSelected;
  private forTagsSelected: string [];
  private limit = 90;
  private search = '';
  private results;
  private queryField;
  showSearchDropDown = false;
  private stateForm: FormGroup;


  constructor(private networkService: NetworkService, private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.networkService.getNetworks().subscribe(data => {
      this.networks = data;
      console.log(data);
    })
    this.networkService.getUsedTags().subscribe( data => {
      this.tags = data;
      console.log(data);
    })
    
    this.forTagsSelected = [];
    this.areaSelected = null;
    this.countrySelected = null;
    
    this.queryField = new FormControl();
    this.queryField.valueChanges
    .subscribe(query => {
      this.networkService.getNetworksSearch(query).subscribe(data => {
        this.results = data;
        console.log(data);
      })
    })
  }

  initForm():FormGroup {
    return this.stateForm = this.fb.group({
      search: [null]
    })
  }

  selectValue(value){
    this.stateForm.patchValue({"search": value});
    this.showSearchDropDown = false;
  }
  closeDropDown() {
    console.log("close before value: " + this.showSearchDropDown);
    this.showSearchDropDown = !this.showSearchDropDown;
    console.log("close after value: " + this.showSearchDropDown);
  }
  onForTagSelected(forTag: any){
    console.log(forTag.name);
    var index =  this.forTagsSelected.indexOf(forTag.name);
    if(index == -1){
      this.forTagsSelected.push(forTag.name);
    } else {
      this.forTagsSelected.splice(index, 1);
    }
    this.networkService.findNetworksWithParam(this.countrySelected, this.areaSelected, this.forTagsSelected).subscribe( data =>{
      console.log(data);
      this.networks = data;
    })
    forTag.isSelected = !forTag.isSelected;
    
  }
  onCountrySelected(country: any){
    this.countrySelected = country; 
    if(country == "Sweden"){
      this.networkService.getCitiesForCountry(country).subscribe(data =>{
        console.log(data);
        this.areaTags = data;
      });
    } else {
        this.areaTags = null; 
    }
      this.networkService.findNetworksWithParam(country, this.areaSelected, this.forTagsSelected).subscribe(data => {
        console.log(data);
        this.networks = data;
      })
   
  }

  onKey(search: any){
    this.search = search;
    this.networkService.getNetworksSearch(search).subscribe( data => {
      this.results = data;
    })
  }

  onAreaSelected(area: any){
    this.areaSelected = area;
    this.networkService.findNetworksWithParam(this.countrySelected, area, this.forTagsSelected).subscribe(data => {
      console.log(data);
      this.networks = data;
    })
  }
  
}
