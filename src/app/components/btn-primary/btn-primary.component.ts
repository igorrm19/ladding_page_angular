import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from "../../../../node_modules/@angular/common/index";

type button = "primary" | "secundary"


@Component({
  selector: 'app-btn-primary',
  standalone: true,
  imports: [NgIf],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.css'
})


export class BtnPrimaryComponent {
  @Input("btn-text") btnText: String = ""; //semelhante a props 
  @Output("subimit") onSubmit = new EventEmitter();
  @Input() disabled: Boolean = false;
  @Input() variable: button = "primary"
  @Input() loadding: Boolean = false;

  subimit(){
    this.onSubmit.emit()
  }
}
