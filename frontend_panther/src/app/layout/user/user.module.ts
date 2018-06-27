import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { PageHeaderModule } from '../../shared/index';
import { FormsModule } from '@angular/forms';
import { PHService } from '../../ph.service';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        PageHeaderModule,
        FormsModule
       ],
    declarations: [UserComponent],
    providers: [PHService],
})
export class UserModule {}
