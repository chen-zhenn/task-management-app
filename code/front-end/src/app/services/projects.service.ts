import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproject } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) {}

  getData(){
    return this.http.get<Iproject[]>(`http://localhost:3000/projects`)
  }
}
