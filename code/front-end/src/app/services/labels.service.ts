import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ilabel } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class LabelsService {

  constructor(private http: HttpClient) {}

  getData(){
    return this.http.get<Ilabel[]>(`http://localhost:3000/labels`)
  }
}
