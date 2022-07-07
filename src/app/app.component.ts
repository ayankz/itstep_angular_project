import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public show = false;
  public cars = [{ name: 'Audi' }, { name: 'BMW' }, { name: 'Mercedes' }];
  title = 'directives';
}
