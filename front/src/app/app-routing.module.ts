import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
    {
        path: '',
        loadChildren: 'app/modules/landing/landing.module#LandingModule',
    },
    {
        path: 'user',
        loadChildren: 'app/modules/user/user.module#UserModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {

}
