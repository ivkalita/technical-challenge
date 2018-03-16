import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CoreModule } from '../core/core.module';
import { GeneticResultSerializer } from './serializers/genetic-result.serializer';
import { ResultsClient } from './services/results.client';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        ReactiveFormsModule,
        CoreModule
    ],
    declarations: [
        ProfileComponent,
        LoginComponent,
        RegisterComponent,
    ],
    providers: [
        GeneticResultSerializer,
        ResultsClient
    ]
})
export class UserModule {
}
