import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-travelclaim',
  templateUrl: './travelclaim.component.html',
  styleUrls: ['./travelclaim.component.scss']
})
export class TravelclaimComponent implements OnInit {

  selectedValue: string | any;
  selectedCar: string | any;


  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
