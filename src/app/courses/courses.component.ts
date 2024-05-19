import { Component } from '@angular/core';
import { CourseInfo } from '../models/course-info';
import { CoursesService } from '../services/courses.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  courses: CourseInfo[] = [];
  filteredCourses: CourseInfo[] = [];
  filterValue: string = "";

  constructor(private courseService: CoursesService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.filteredCourses = courses;
    });
  }

  applyFilter(): void {
    this.filteredCourses = this.courses.filter((course) => 
      course.coursename.toLowerCase().includes(this.filterValue.toLowerCase()) || 
      course.code.toLowerCase().includes(this.filterValue.toLowerCase())
    );
  }

  sortCourseProg() {
    this.filteredCourses.sort((a, b) => a.progression.localeCompare(b.progression));
  }

  sortCourseCode() {
    this.filteredCourses.sort((a, b) => a.code.localeCompare(b.code));
  }

  sortCourseName() {
    this.filteredCourses.sort((a, b) => a.coursename.localeCompare(b.coursename));
  }
}
