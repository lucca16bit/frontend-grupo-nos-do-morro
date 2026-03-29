import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pages } from "./pages/pages";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Pages],
    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App {
    protected readonly title = signal('gnm');
}
