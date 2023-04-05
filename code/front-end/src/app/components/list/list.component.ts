import { Component, OnInit } from '@angular/core';
import { faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ProjectsService } from 'src/app/services/projects.service';
import { LabelsService } from 'src/app/services/labels.service';
import { TasksService } from 'src/app/services/tasks.service';
import { Iproject, Ilabel, Itask } from '../../interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent implements OnInit {
  icons = {
    add: faPlus,
    edit: faPen,
    delete: faTrash,
  };

  projects:Iproject[] = []
  labels: Ilabel[] = []
  tasks:Itask[] = []

  constructor(
    private projectService: ProjectsService,
    private labelService: LabelsService,
    private taskService: TasksService
  ) {}

  getLabelName(id:number){
    return this.labels
      .find(label => label.id === id)?.name
  }

  add() {
    console.log('Add Task...');
  }

  ngOnInit() {

    this.projectService
      .getData()
      .subscribe(data => this.projects = data)

    this.labelService
      .getData()
      .subscribe(data => this.labels = data)

    this.taskService
      .getData()
      .subscribe(data => this.tasks = data)
  }
}
