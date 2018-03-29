import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './component/movies/movies.component';
import { RouterModule, Routes} from '@angular/router';
import { FavMoviesComponent } from './component/fav-movies/fav-movies.component';
import { LoginComponent } from './component/authenticate/login/login.component';
import { RegisterComponent } from './component/authenticate/register/register.component';


const routes :Routes = [
{path: '', redirectTo:'/home',pathMatch:'full'},
{path: 'home', component:MoviesComponent},
{path: 'favourite', component:FavMoviesComponent },
{path: 'login', component:LoginComponent },
{path: 'register', component:RegisterComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes),
	CommonModule
	],
	exports:[RouterModule],
	declarations: []
})
export class AppRoutingModule { }
