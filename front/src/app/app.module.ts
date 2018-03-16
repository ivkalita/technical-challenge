import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoreModule } from './modules/core/core.module';
import { AuthService } from './modules/core/services/auth.service';
import { IsAuthenticatedGuard } from './modules/core/guards/is-authenticated.guard';
import { NotAuthenticatedGuard } from './modules/core/guards/not-authenticated.guard';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ContentComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        RouterModule
    ],
    providers: [
        AuthService,
        IsAuthenticatedGuard,
        NotAuthenticatedGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
