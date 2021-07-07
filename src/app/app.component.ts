import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-husky-prettier-code';
  testType: any;

  loura: any;
  akak;

  testMethod(): void {
    console.log(' husky demo  ');
  }
}
