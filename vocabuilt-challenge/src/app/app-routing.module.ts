import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "src/components/home/home.component";
import { SomethingComponent } from '../components/something/something.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'something', component: SomethingComponent },
    { path: '**', redirectTo: '' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}