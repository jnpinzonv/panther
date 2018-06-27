import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { PageHeaderModule } from '../../../shared/index';
import { PHService } from '../../../ph.service';

@NgModule({
    imports: [CommonModule, UsersRoutingModule, PageHeaderModule],
    declarations: [UsersComponent],
    providers: [PHService],
})
export class UsersModule {}
