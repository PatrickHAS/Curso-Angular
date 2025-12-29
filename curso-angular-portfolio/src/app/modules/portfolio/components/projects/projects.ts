import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPainelClass } from '../../enum/EDialogPainelClass.enum';
import { DialogProjects } from '../dialog/dialog-projects/dialog-projects';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/nu-kenzie-logo.jpeg',
      alt: 'Projeto Nu Kenzie',
      title: 'Nu Kenzie',
      with: '100px',
      height: '51px',
      description:
        '<p>Projeto desenvolvido com o objetivo de gerenciar finanças pessoais.</p> <p> O Nu Kenzie permite que os usuários adicionem, visualizem e filtrem suas transações financeiras, proporcionando uma experiência intuitiva e eficiente para o controle do orçamento pessoal.</p>',
      links: [
        {
          name: 'Conheça a Nu Kenzie',
          href: 'https://nu-kenzie-patrickhas.vercel.app/',
        },
      ],
    },
    {
      src: 'assets/img/projects/roomsforyou-logo.jpeg',
      alt: 'Projeto Rooms For You',
      title: 'Rooms For You',
      with: '100px',
      height: '51px',
      description:
        '<p>Projeto banco de dados, desenvolvido como um sistema de reservas de quartos para uma plataforma de aluguel de imóveis.</p> <p> O Rooms For You permite que os usuários pesquisem, reservem e gerenciem suas estadias de forma prática e eficiente, oferecendo uma interface amigável e funcionalidades robustas para facilitar o processo de reserva.</p>',
      links: [
        {
          name: 'Conheça a Rooms For You',
          href: 'https://roomsforyou.onrender.com/schema/redoc/',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjects, {
      data,
      panelClass: EDialogPainelClass.PROJECTS,
    });
  }
}
