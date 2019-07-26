import { Component, OnInit } from '@angular/core';
import { style } from './map-style';
import { centerMap } from './map-option';

import { PlacePredictionService } from './place-prediction.service';
import { GoogleResult } from './google-result.model';
import { CourrierApplicatifService } from './service/service-applicatif/courrier/courrier-applicatif.service';
import { Courrier } from '../../donnee/courrier';


declare var ol: any;

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    searchTerm: string;
    googlePlacesResults: GoogleResult[] = [];

    title = 'google-place-prediction';

    style_map: any = style;
    lat = centerMap.lat;
    lng = centerMap.lng;
    courrier = [];

    constructor(
        private placePredictionService: PlacePredictionService,
        private courrierService: CourrierApplicatifService,
    ) { }

    ngOnInit() {
        this.getData();
    }

    getData() {
        // this.courrierService.getCourrier();
        // this.courrierService.getCourrierObj().subscribe(data => {
        //     if (data && data.length !== 0) {
        //         let dataCourrier = new Courrier();
        //         for (let i = 0; i < data.length; i++) {
        //             dataCourrier.idCourrier = data[i]["idCourrier"];
        //             dataCourrier.latitude = data[i]["latitude"];
        //             dataCourrier.longitude = data[i]["longitude"];
        //             this.courrier.push(dataCourrier);
        //             dataCourrier = new Courrier();
        //         }
        //     }
        // }, (error => {
        //     console.log('An error has occuered ', error);
        // }));

        
        this.placePredictionService.currentData.subscribe((response: GoogleResult[]) => {
            this.googlePlacesResults = response;
        });
    }

    onSearch(term: string) {
        this.searchTerm = term;

        if (this.searchTerm === '') {
            return;
        }

        this.placePredictionService.getPlacePredictions(term);
    }


}