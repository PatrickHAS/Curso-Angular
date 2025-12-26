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
      title: 'HTML5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Icone de conhecimento css3',
      title: 'CSS3',
    },
    {
      src: 'assets/icons/knowledge/scss.svg',
      alt: 'Icone de conhecimento scss',
      title: 'SCSS',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Icone de conhecimento javascript',
      title: 'Javascript',
    },
    {
      src: 'assets/icons/knowledge/typescript.svg',
      alt: 'Icone de conhecimento typescript',
      title: 'Typescript',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone de conhecimento angular',
      title: 'Angular',
    },
    {
      src: 'assets/icons/knowledge/react.svg',
      alt: 'Icone de conhecimento react',
      title: 'React',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Icone de conhecimento nodejs',
      title: 'NodeJs',
    },
    {
      src: 'assets/icons/knowledge/jest.svg',
      alt: 'Icone de conhecimento jest',
      title: 'Jest',
    },
    {
      src: 'assets/icons/knowledge/docker.svg',
      alt: 'Icone de conhecimento docker',
      title: 'Docker',
    },
    {
      src: 'assets/icons/knowledge/django.svg',
      alt: 'Icone de conhecimento django',
      title: 'Django',
    },
    {
      src: 'assets/icons/knowledge/djangorest.svg',
      alt: 'Icone de conhecimento djangorest',
      title: 'Django REST Framework',
    },
    {
      src: 'assets/icons/knowledge/express.svg',
      alt: 'Icone de conhecimento express',
      title: 'Express',
    },
    {
      src: 'assets/icons/knowledge/python.svg',
      alt: 'Icone de conhecimento python',
      title: 'Python',
    },
    {
      src: 'assets/icons/knowledge/postgress.svg',
      alt: 'Icone de conhecimento postgress',
      title: 'PostgreSQL',
    },
    {
      src: 'assets/icons/knowledge/wordpress.svg',
      alt: 'Icone de conhecimento wordpress',
      title: 'Wordpress',
    },
    {
      src: 'assets/icons/knowledge/git.svg',
      alt: 'Icone de conhecimento git',
      title: 'Git',
    },
    {
      src: 'assets/icons/knowledge/github.svg',
      alt: 'Icone de conhecimento github',
      title: 'GitHub',
    },
  ]);
}
