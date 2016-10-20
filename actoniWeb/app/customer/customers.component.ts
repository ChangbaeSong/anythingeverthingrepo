import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html'
})
export class CustomersComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    customers = [
        {id: 1, name: 'ssss'},
        {id: 1, name: 'aaaa'},
        {id: 1, name: 'dddd'},
        {id: 1, name: 'sssffff'}
    ];
}
