import { Component, Input } from '@angular/core';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-card',
  // template:``
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css'],
})
export class propertyCardComponent {
  @Input()
  property!: IProperty;
  // Property: any = {
  //   Id: 1,
  //   Name: '1',
  //   Type: 'Birla House',
  //   Price: 12000,
  // };
}
