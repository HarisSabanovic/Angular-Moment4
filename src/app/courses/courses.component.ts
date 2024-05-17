import { Component } from '@angular/core';
import { CourseInfo } from '../models/course-info';
import { CoursesService } from '../services/courses.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  courses: CourseInfo[] = [];

  constructor(private courseService: CoursesService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }
}
