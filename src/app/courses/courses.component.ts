import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { COURSES } from '../../../public/assets/data';

@Component({
  selector: 'app-courses',
  imports: [MatCardModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  @Input()
  title : string | undefined;
  
  courses = COURSES;




}