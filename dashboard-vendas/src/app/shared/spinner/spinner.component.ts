import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {

  title = 'hello-world';
  loading = false;

  save(): void {
    this.loading = true;
    // do your saving thing here
  }
}
