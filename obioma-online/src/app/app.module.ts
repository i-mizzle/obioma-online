import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { BookingFormComponent } from './landing/booking-form/booking-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdjustmentFormComponent } from './landing/booking-form/adjustment-form/adjustment-form.component';
import { RepairFormComponent } from './landing/booking-form/repair-form/repair-form.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'booking', 
    component: BookingFormComponent, 
    children: [
      { path:'adjustment', component: AdjustmentFormComponent },
      { path:'repair', component: RepairFormComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BookingFormComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    AdjustmentFormComponent,
    RepairFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
