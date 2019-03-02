import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WaterHarvestingService {

  constructor(private http: HttpClient) { }

  harvesting() {
    return this.http.get('http://localhost:8100/getPercentage');
  }
  getUsageConfig() {
    return this.http.get('http://localhost:8100/getUsageConfig');
  }
  setUsageConfig(warningLimit, alertLimit) {
    return this.http.get('http://localhost:8100/setUsageConfig?warningLimit=' + warningLimit + '&alertLimit=' + alertLimit);
  }
}