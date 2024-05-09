import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public selectedIndex: number = -1;
  public notes: Note[] = [];

  public tempTitle: string = '';
  public tempContent: string = '';

  public addNote() {
    this.notes.push(new Note(this.tempTitle, this.tempContent));
    this.clearTempData();
  }

  public editNote(index: number) {
    this.notes[index].title = this.tempTitle;
    this.notes[index].content = this.tempContent;

    setTimeout(() => this.clearTempData(), 0);
  }

  public deleteNote(index: number) {
    this.notes.splice(index, 1);
    this.clearTempData();
  }

  public selectNote(index: number) {
    this.selectedIndex = index;
    let note = this.notes[index];
    this.tempTitle = note.title;
    this.tempContent = note.content;
  }

  public clearTempData() {
    this.selectedIndex = -1;
    this.tempTitle = '';
    this.tempContent = '';
  }
}

class Note {
  public title: string;
  public content: string;
  public constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}
