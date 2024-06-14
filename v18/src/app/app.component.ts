import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountComponent } from './count/count.component';
import { CustomCheckBoxComponent } from './custom-check-box/custom-check-box.component';
import { ForListComponent } from './for-list/for-list.component';
import { InputComponent } from './input/input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CountComponent,
    InputComponent,
    CustomCheckBoxComponent,
    ForListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'v18';
}
