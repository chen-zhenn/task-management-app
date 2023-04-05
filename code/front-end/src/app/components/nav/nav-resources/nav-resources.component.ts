import { Component } from '@angular/core';
import { faListCheck, faMugHot, faTags } from '@fortawesome/free-solid-svg-icons';
import { ProjectsService } from 'src/app/services/projects.service';
import { LabelsService } from 'src/app/services/labels.service';
import { Iproject, Ilabel, Itask } from '../../../interfaces';

@Component({
  selector: 'app-nav-resources',
  templateUrl: './nav-resources.component.html',
  styleUrls: ['./nav-resources.component.sass']
})
export class NavResourcesComponent {
  icons = {
    task: faListCheck,
    project: faMugHot,
    label: faTags
  };

  projects:Iproject[] = []
  labels: Ilabel[] = []

  constructor(
    private projectService: ProjectsService,
    private labelService: LabelsService
  ) {}

  ngOnInit() {

    this.projectService
      .getData()
      .subscribe(data => this.projects = data)

    this.labelService
      .getData()
      .subscribe(data => this.labels = data)
  }
}
