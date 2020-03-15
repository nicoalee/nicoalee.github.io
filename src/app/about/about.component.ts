import { Component, OnInit } from '@angular/core';
import { faFile } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  faFile = faFile

  ngOnInit(): void {
  }

}
