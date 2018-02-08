import{BrowserModule}from'@angular/platform-browser';
import {NgModule }from '@angular/core';
import {RouterModule}from '@angular/router';
import {ReactiveFormsModule}from '@angular/forms';

import {AppComponent }from './app.component';
import { FormsModule }   from '@angular/forms';
import{Component}from'@angular/core';

import { Observable } from 'rxjs/Observable';

import {HomePageComponent}from './pages/home-page/home-page.component';
import {TaskListPageComponent}from './pages/task-list-page/task-list-page.component';
import { TaskEditPageComponent}from './pages/task-edit-page/task-edit-page.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {UserEditPageComponent} from './pages/user-edit-page/user-edit-page.component';
import {UserListPageComponent} from './pages/user-list-page/user-list-page.component';

import {NgbModule}from '@ng-bootstrap/ng-bootstrap';

import {TodoService}from './services/todo.service';
import { UserService } from './services/users.service';

const ROUTES = [
{path: '', component: HomePageComponent},
{path: 'tasks', component: TaskListPageComponent},
{path: 'edit', component: TaskEditPageComponent },
{path: 'editUser', component: UserEditPageComponent},
{path: 'users', component: UserListPageComponent},
{path: '**', component: PageNotFoundComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TaskListPageComponent,
    TaskEditPageComponent,
    PageNotFoundComponent,
    UserEditPageComponent,
    UserListPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [TodoService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
