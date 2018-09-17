import { City } from './../model/city';
import { CityService } from './../services/city.service';
import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, ViewChild } from '@angular/core';
import { IonRangeSliderComponent } from 'ng2-ion-range-slider';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FilterComponent implements OnInit {

  @Output() filterEmiter: EventEmitter<FilterData> = new EventEmitter()
  @ViewChild('slider') slider: IonRangeSliderComponent;
  advancedSlider = { name: "Advanced Slider", onUpdate: undefined, onFinish: undefined };

  cities: City[];
  min = 0;
  max = 5000;
  step = 10;



  update(slider, event) {
    slider.onUpdate = event;
    this.filterObject.range[0] = event.from;
    this.filterObject.range[1] = event.to;
  }
  finish(slider, event) {
    slider.onFinish = event;

  }
  reset() {
    this.slider.update({ from: this.min, to: this.max });
    this.filterObject.cityId = 0;
    this.filterObject = {
      cityId: 0,
      range: [this.min, this.max]
    }
    this.filterEmiter.emit(this.filterObject
    );
  }

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.getCities();
  }
  getCities() {
    this.cityService.getCities().subscribe(
      (res) => {
        this.cities = res;
        console.log(res);
      })
  }
  filter() {
    console.log(this.filterObject);
    this.filterEmiter.emit(this.filterObject);
  }
  filterObject: FilterData = {
    cityId: 0,
    range: [this.min, this.max]
  }





}
export interface FilterData {
  cityId: 0,
  range: number[]
}


