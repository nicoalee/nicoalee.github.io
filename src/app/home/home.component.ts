import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  faLinkedin = faLinkedin
  faGithubSquare = faGithubSquare
  faEnvelopeSquare = faEnvelopeSquare

  typewriterWords: string[] = ["budding web developer", "traveller", "lover of food", "part time adult"]

  ngOnInit(): void {
  }

}
