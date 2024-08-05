import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { _MatInternalFormField } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatDialogModule } from '@angular/material/dialog';


import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoService } from './todo.service';
import { LoginComponent } from './login/login.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

// Define your routes here
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'todos', component: TodosComponent },
  // Add other routes here if needed
];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    LoginComponent,
    EditDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatOption,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule.forRoot(routes) // Use routes here
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
