import { Component, Input } from '@angular/core';

@Component({
  selector: 'rent-list',
  templateUrl: './rentList.component.html',
  styleUrls: [],
})
export class rentalListComponent {
  @Input() rentalList;;
}
