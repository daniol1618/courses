import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardAvatar, MatCardModule } from '@angular/material/card';
import { COURSES } from '../../../public/assets/data';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-courses',
  imports: [MatCardModule, NgFor, NgIf],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses = [...COURSES.courses];
  
  @Input()
  title: string | undefined;

  @Output() element = new EventEmitter<void>();


  onSeeMore() {
    this.element.emit();
  }

  areThereCourses(): boolean {
    return this.courses && this.courses.length > 0;
  }

}