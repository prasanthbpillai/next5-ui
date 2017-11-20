import { Component, OnInit } from '@angular/core';
import {Race} from "../race";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.css']
})
export class RaceDetailComponent implements OnInit {

  private race: Race;
  private raceId;

  constructor(
      private http: HttpClient,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.getRace();

    this.http.get('http://localhost:8888/next-5/public/api/race/'+ this.raceId).subscribe(
        data => {
         console.log(this.raceId);
          this.race = data['response'];
        });
  }

  getRace(): void {
    this.raceId = +this.route.snapshot.paramMap.get('id');


  }

}
