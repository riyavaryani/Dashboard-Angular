import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultComponent} from './default.component';
import {DashboardComponent} from '../../modules/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {PostsComponent} from '../../modules/posts/posts.component';
import {SharedModule} from '../../shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormComponent} from '../../modules/form/form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatInputModule,
    MatTableModule
  ]
})
export class DefaultModule { }
