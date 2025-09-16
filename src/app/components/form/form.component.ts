import { Component, signal } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import  { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NewsLatterService } from '../../serves/news-latter.service';
import { __asyncValues, __values } from 'tslib';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule, ReactiveFormsModule, CommonModule],
  providers: [NewsLatterService],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})


export class FormComponent {
  meuForm!: FormGroup;
  loadding = signal(false);
  response? = signal("errado")
  resultado = signal(<any | null>(null));

  constructor(private fb: FormBuilder, private serve: NewsLatterService){
    this.meuForm = this.fb.group({
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });

    if(this.meuForm.valid){
      this.response?.set("novo valor")
    }
  };

   obter(){
    this.loadding.set(true)

    this.serve.obeterDados().subscribe({
      next: (res) => {
        this.resultado.set(res);
        this.meuForm.reset();
        this.loadding.set(true)
      },
      error: (err) => {
        console.error(err);
        this.loadding.set(false)
      }
    })
    
   }

    onSubmit(){
     console.log(this.meuForm.value, " valor")   // { nome, email }
 
     this.loadding.set(true);
     if(this.meuForm.valid){
      this.serve.obeterDados();
      this.serve.sendData(this.meuForm.value.nome, this.meuForm.value.email).subscribe({
        next: () => {
          this.meuForm.reset();
          this.loadding.set(false)
        }
      })
    }
  };
};


