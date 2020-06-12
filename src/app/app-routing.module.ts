import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { SiblingComponent } from './sibling/sibling.component';
import { ChildComponent } from './child/child.component';


const routes: Routes = [
  {path:'parent', component:ParentComponent},
  {path:'sibling', component: SiblingComponent},
  {path:'child', component: ChildComponent},
  {path: '**', redirectTo:'/parent'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
