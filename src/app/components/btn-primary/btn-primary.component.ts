import { Component, Input, Output, EventEmitter } from '@angular/core';

type button = "primary" | "secundary"
type buttonType = "submit" | "onClick"

@Component({
  selector: 'app-btn-primary',
  standalone: true,
  imports: [],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.css'
})


export class BtnPrimaryComponent {
  @Input("btn-text") btnText: String = ""; //semelhante a props 
  @Input() disabled: Boolean = false;
  @Input() variable: button = "primary"
  @Input() loadding: Boolean = false;
  @Input() type: buttonType = "submit"

  @Output() submit = new EventEmitter<void>();

  Funcsubimit(){
    this.submit.emit()
    console.log("funcionando 1")
  }
}
