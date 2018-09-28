import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

/* Components */
import { LayoutComponent, PageNotFoundComponent, DialogComponent } from './components';

/* Dependencies & Other modules */
import { MaterialModule, CovalentModule } from './dependency';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CovalentModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    LayoutComponent,
    PageNotFoundComponent,
    DialogComponent
  ],
  exports: [
    LayoutComponent,
    MaterialModule,
    CovalentModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  entryComponents: [DialogComponent]
})
export class SharedModule { }
