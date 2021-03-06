import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  public filter: string = '';
  // public debounce: Subject<string> = new Subject<string>();
  public hasMore: boolean = true;
  public userName: string = '';
  public currentPage: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
    ) { }


    ngOnInit(): void {
      this.userName = this.activatedRoute.snapshot.params.userName;
      this.photos = this.activatedRoute.snapshot.data['photos'];
    //   this.debounce
    //   .pipe(debounceTime(300))
    // .subscribe(filter => this.filter = filter);

    // const userName = this.activatedRoute.snapshot.params.userName;
    // this.photoService.listFromUser(userName).subscribe(photos => this.photos = photos);
  }

  // ngOnDestroy(): void {
  //   this.debounce.unsubscribe();
  // }

  load() {
    this.photoService
        .listFromUserPaginated(this.userName, ++this.currentPage)
        .subscribe(photos => {
            this.filter = '';
            this.photos = this.photos.concat(photos);
            if (!photos.length) this.hasMore = false;
        });
}
}
