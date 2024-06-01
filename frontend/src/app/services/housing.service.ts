import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import {map } from 'rxjs/operators'
import { IProperty } from '../property/IProperty.interface';
import {} from 'src/app/services/housing.service';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) {
  }
  getAllPropertoes()
  {
    return this.http.get('data/properties.json')
  }
}
  // getAllPropertoes():Observable<IProperty[]>{
  //   return this.http.get('data/properties.json').pipe(
  //     map(data => {
  //     const propertiesArray:Array<IProperty> = [];
  //       for(const id in data)
  //         {
  //            if (data.hasOwnProperty(id)){
  //             propertiesArray.push(data[id]);
  //            }
  //         }
  //         return propertiesArray;
  //     })
//     );
// }
