import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        PhotoComponent,
        PhotoListComponent
    ],
    imports: [ HttpClientModule, CommonModule ]
})
export class PhotosModule { }
