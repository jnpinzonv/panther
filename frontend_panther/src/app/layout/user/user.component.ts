import { Component } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { User } from '../../entities/user';
import { PHService } from '../../ph.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    animations: [routerTransition()]
})
export class UserComponent {
    public data: User;

    constructor(
        private _PHService: PHService
    ) {
        this.data = new User();
        this.data.name = 'dav';
        this.data.lastName = 'san';
        this.data.phone = 311;
    }

    save() {
        this._PHService.createUser(this.data);
    }
}
