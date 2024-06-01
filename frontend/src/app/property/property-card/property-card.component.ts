import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-card',
  // template:``
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css'],
})
export class propertyCardComponent {
  @Input() property : any;
  // Property: any = {
  //   Id: 1,
  //   Name: '1',
  //   Type: 'Birla House',
  //   Price: 12000,
  // };
}
