import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Knowledge } from '../../components/knowledge/knowledge';

@Component({
  selector: 'app-home',
  imports: [Header, Knowledge],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
