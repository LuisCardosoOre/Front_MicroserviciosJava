import { NgModule } from '@angular/core';

import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ToolbarModule} from 'primeng/toolbar';
import {MultiSelectModule} from 'primeng/multiselect';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {DropdownModule} from 'primeng/dropdown';
import {PanelModule} from 'primeng/panel';
import {ListboxModule} from 'primeng/listbox';
import {BlockUIModule} from 'primeng/blockui';
import {TooltipModule} from 'primeng/tooltip';
import { PanelMenuModule } from 'primeng/panelmenu';
import {DataViewModule} from 'primeng/dataview';
import {InputNumberModule} from 'primeng/inputnumber';

import {BadgeModule} from 'primeng/badge';

import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


import {ContextMenuModule} from 'primeng/contextmenu';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';

@NgModule({
  exports: [
    TableModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ToolbarModule,
    ConfirmDialogModule,
    MultiSelectModule,
    InputTextareaModule,
    DropdownModule,
    PanelModule,
    ListboxModule,
    BlockUIModule,
    TooltipModule,
    PanelMenuModule,
    DataViewModule,
    InputNumberModule,
    RatingModule,
    RippleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BadgeModule,
    ContextMenuModule
  ]
})
export class UiModule { }
