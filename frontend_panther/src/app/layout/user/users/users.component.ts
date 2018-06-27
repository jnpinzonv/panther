import { Component } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { PHService } from '../../../ph.service';

@Component({
    templateUrl: './users.component.html',
    animations: [routerTransition()]
})
export class UsersComponent {
    constructor(
        private _PHService: PHService
    ) {
        this.service();
    }

    service() {
        this._PHService.getUsers().subscribe(data => console.log(data));
    }
}
