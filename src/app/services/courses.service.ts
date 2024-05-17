import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseInfo } from '../models/course-info';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  url: string = "https://webbutveckling.miun.se/files/ramschema_ht23.json";

  constructor(private http: HttpClient) { }

  getCourses(): Observable<CourseInfo[]> {
    return this.http.get<CourseInfo[]>(this.url);
  }
}
