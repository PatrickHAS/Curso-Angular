import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.html',
  styleUrl: './knowledge.scss',
})
export class Knowledge {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icone de conhecimento html5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Icone de conhecimento css3',
    },
    {
      src: 'assets/icons/knowledge/scss.svg',
      alt: 'Icone de conhecimento scss',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Icone de conhecimento javascript',
    },
    {
      src: 'assets/icons/knowledge/typescript.svg',
      alt: 'Icone de conhecimento typescript',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone de conhecimento angular',
    },
    {
      src: 'assets/icons/knowledge/react.svg',
      alt: 'Icone de conhecimento react',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Icone de conhecimento nodejs',
    },
    {
      src: 'assets/icons/knowledge/jest.svg',
      alt: 'Icone de conhecimento jest',
    },
    {
      src: 'assets/icons/knowledge/docker.svg',
      alt: 'Icone de conhecimento docker',
    },
    {
      src: 'assets/icons/knowledge/django.svg',
      alt: 'Icone de conhecimento django',
    },
    {
      src: 'assets/icons/knowledge/djangorest.svg',
      alt: 'Icone de conhecimento djangorest',
    },
    {
      src: 'assets/icons/knowledge/express.svg',
      alt: 'Icone de conhecimento express',
    },
    {
      src: 'assets/icons/knowledge/python.svg',
      alt: 'Icone de conhecimento python',
    },
    {
      src: 'assets/icons/knowledge/postgress.svg',
      alt: 'Icone de conhecimento postgress',
    },
    {
      src: 'assets/icons/knowledge/wordpress.svg',
      alt: 'Icone de conhecimento wordpress',
    },
    {
      src: 'assets/icons/knowledge/git.svg',
      alt: 'Icone de conhecimento git',
    },
    {
      src: 'assets/icons/knowledge/github.svg',
      alt: 'Icone de conhecimento github',
    },
  ]);
}
