import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Race } from '../race';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

    private title = 'Upcoming Races';
    races: Race[];
    selectedRace: Race;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    // load the first 5 races
    this.http.get('http://localhost:8888/next-5/public/api/races').subscribe(
        data => {
          //console.log(data);
          this.races = data['response']; // need to update the parameter
        });
  }


}
