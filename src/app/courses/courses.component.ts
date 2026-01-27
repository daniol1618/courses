import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { COURSES } from '../../../public/assets/data';

@Component({
  selector: 'app-courses',
  imports: [MatCardModule],
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

}