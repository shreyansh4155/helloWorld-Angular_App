import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Hello-world-app';
  message: string = 'Hello from BridgeLabz using One Way Data Bindings';
  logoUrl: string = 'BL_logo_square_jpg.jpg';
}
