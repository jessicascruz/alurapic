import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';

@NgModule({
    declarations: [
        PhotoComponent,
        PhotoListComponent,
        PhotosComponent,
        FilterByDescription,
        LoadButtonComponent
    ],
    imports: [ HttpClientModule, CommonModule ]
})
export class PhotosModule { }
