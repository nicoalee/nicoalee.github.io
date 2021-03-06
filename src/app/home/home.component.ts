import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

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
  faCheckCircle = faCheckCircle

  typewriterWords: string[] = ["motivated web developer", "traveller", "lover of food", "part time adult"]

  ngOnInit(): void {
  }

  copyToClipboard() {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = "nicholasleea@gmail.com";
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
