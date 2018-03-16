import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AuthClient } from './services/auth.client';
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
        ApiClient,
        UserSerializer
    ]
})
export class CoreModule {
}
