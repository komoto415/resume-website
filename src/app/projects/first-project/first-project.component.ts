import { Component, OnInit } from '@angular/core';
import { TagType } from '../tags';

@Component({
  selector: 'app-first-project',
  templateUrl: './first-project.component.html',
  styleUrls: ['../projects.component.css', './first-project.component.css']
})
export class FirstProjectComponent implements OnInit {
    tags: TagType[] = [
        TagType.python,
        TagType.cli,
        TagType.first,
        TagType.cs1,
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
