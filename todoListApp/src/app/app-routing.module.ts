import { TodoComponent } from './todo/todo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
          {path: 'todo', component: TodoComponent}
];

@NgModule({
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
