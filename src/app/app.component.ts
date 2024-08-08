import { Component,inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proj-Api';
  http=inject(HttpClient);

  /**
   *
   */
  constructor() {

    this.http.get('https://localhost:7256/get_tasks',
      {
        observe: 'response',
      }).subscribe((r)=>{
        console.log(r.headers.get('Content-Type'));

        const customHeader =r.headers.get('X-Custom-Header');

        const body = r.body;
        console.log(body);

      })



    
    
    
  }

}
