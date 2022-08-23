import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { HttpModule } from './http/http.module';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { UiModule } from './ui/ui.module';



@NgModule({
  exports: [
    CommonModule,
    ComponentsModule,
    HttpModule,
    InterceptorsModule,
    UiModule
  ]
})
export class CommonsModule { }
