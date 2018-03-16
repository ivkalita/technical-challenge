import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PageComponent } from 'app/modules/landing/components/page/page.component';

const routes: Routes = [
    {
        path: '',
        component: PageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class LandingRoutingModule {

}
