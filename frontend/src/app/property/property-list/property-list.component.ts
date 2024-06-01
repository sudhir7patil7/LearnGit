import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class propertyListComponent implements OnInit {

  properties: any;
  constructor(private housingService:HousingService) {}
  ngOnInit(): void {
      this.housingService.getAllPropertoes().subscribe(
            data=>{
           this.properties=data;
           console.log(data );
         } ,error=>
          {
            console.log(error);
          }
      );
 }
}
