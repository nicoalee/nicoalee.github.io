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

  typewriterWords: string[] = ["budding web developer", "traveller", "lover of food", "part time adult"]

  ngOnInit(): void {
  }

  copyToClipboard(email: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = email;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
