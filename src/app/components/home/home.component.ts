import { Component, OnInit ,Inject,Injectable} from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
@Injectable({
  providedIn: 'root'
})
export class HomeComponent implements OnInit {
 
  imageSrc = 'src/assets/images/home.png' ;
  myDate = new Date();
  constructor( @Inject(DOCUMENT) private _document: Document
  ) { }

  ngOnInit(): void {
  }
reload(){
  this._document.defaultView.location.reload();
}
}
