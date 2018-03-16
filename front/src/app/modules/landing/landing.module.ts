import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponent } from './components/page/page.component';
import { LandingRoutingModule } from 'app/modules/landing/landing-routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
    imports: [
        CommonModule,
        LandingRoutingModule,
        CoreModule
    ],
    declarations: [
        PageComponent
    ]
})
export class LandingModule {
}
