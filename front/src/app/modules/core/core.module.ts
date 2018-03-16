import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AuthClient } from './services/auth.client';
import { AuthService } from './services/auth.service';
import { ApiClient } from './services/api.client';
import { UserSerializer } from './serializers/user.serializer';

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    declarations: [
    ],
    providers: [
        AuthClient,
        AuthService,
        ApiClient,
        UserSerializer
    ]
})
export class CoreModule {
}
