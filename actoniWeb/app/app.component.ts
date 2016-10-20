import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    // [] means property binding - C to D
    // () means event binding - D to C

    title = 'hahah hahah';
    name = 'umhahahaha';
    hahaColor = 'green';

    changeSuitColor() {
        this.hahaColor = this.hahaColor === 'green' ? 'red' : 'green';
    }
 }
