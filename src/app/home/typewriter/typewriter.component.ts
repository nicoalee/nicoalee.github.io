import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.css']
})
export class TypewriterComponent implements OnInit {

  constructor() { }

  @Input() words: string[];

  wordIndex: number

  interval: any;

  cursorNumber: number = 5

  public typedWord: string = ""

  ngOnInit(): void {
    this.typewriterMultipleWords()
  }

  incrementAndGetNextIndex(): number {
    if(this.wordIndex == undefined) return this.wordIndex = 0
    return this.wordIndex = ++this.wordIndex % this.words.length
  }

  typewriterMultipleWords() {
    let wordIndex: number = this.incrementAndGetNextIndex()
    let word: string = this.words[wordIndex]
    let wordLength: number = word.length

    let currentIndex: number = 0
    let currentLetter: string = word[currentIndex]

    this.interval = setInterval(() => {

      if(currentIndex >= wordLength) {

        clearInterval(this.interval)
        let currentCursorNumber = 0

        let cursorInterval = setInterval(() => {
          if(currentCursorNumber++ >= this.cursorNumber) {
            clearInterval(cursorInterval)

            let deleteTypedWord = setInterval(() => {
              if(this.typedWord.length == 0) {
                clearInterval(deleteTypedWord)
                this.typewriterMultipleWords()
              }
              this.typedWord = this.typedWord.slice(0, this.typedWord.length - 1)
            }, 70)

          }
          if(this.typedWord[this.typedWord.length - 1] === "|") {
            // this.typedWord = this.typedWord.slice(0, this.typedWord.length - 1)
            this.typedWord = this.typedWord.replace(/.$/, "    ")
          } else {
            if(this.typedWord[this.typedWord.length - 1] !== "    ") {
              this.typedWord += "|"
            } else {
              this.typedWord = this.typedWord.replace(/.$/, "|")
            }
          }
          
        }, 400)
      }
      
      currentLetter = word[currentIndex]

      // clearInterval() stops interval but code continues so
      // currentLetter becomes null, must check for this
      if(currentLetter != undefined) this.typedWord += currentLetter
      
      currentIndex+=1

    }, 90)
  }

  cancel() {
    clearInterval(this.interval)
  }

}
