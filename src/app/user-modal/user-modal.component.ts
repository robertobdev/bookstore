import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidateEmail } from '../shared/validators/email.validator';
import { ValidateRequired } from '../shared/validators/required.validator';
import { ValidatePhone } from '../shared/validators/phonel.validator';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {
  public registerForm: FormGroup;

  booksCategories = [
    'Apocalipse Zumbi',
    'Autobiografia',
    'Biografia',
    'Chick-Lit',
    'Fantasia e Fantasia Científica',
    'Ficção Científica: na Literatura e também nas Revistas e Gibis',
    'Folhetim',
    'Horror',
    'Literatura Brutalista',
    'Literatura Fantástica',
    'Literatura Infanto-Juvenil',
    'Literatura YA – Young Adult – Jovem Adulto',
    'Metaficção',
    'Neocrític',
    'Novelas de Cavalaria',
    'Paródia',
    'Sick-Lit',
    'Space Opera',
    'Suspense',
    'Vampirismo',
    'Literatura Gótica',
    'Literatura Esotérica',
    'Romances Espíritas',
    'Literatura de Auto-Ajuda',
    'Literatura de Negócios',
    'Literatura Steampunk',
    'Literatura Cyberpunk',
    'Literatura Espiritualista',
    'Literatura de Aventura',
    'Literatura de Guerra',
  ];

  constructor() {
    this.registerForm = new FormGroup({
      name: new FormControl(null, [ValidateRequired]),
      email: new FormControl(null, [ValidateEmail.valid, ValidateRequired]),
      phone_number: new FormControl(null, [ValidatePhone.valid, ValidateRequired]),
      book_categories: new FormControl(null, [ValidateRequired])
    });
  }

  ngOnInit() {
  }

  save() {

  }
}
