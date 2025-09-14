import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimaryComponent } from "../btn-primary/btn-primary.component";
import { FormComponent } from '../form/form.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage, BtnPrimaryComponent, FormComponent],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
}
