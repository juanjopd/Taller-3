import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  
  @Output() onClick = new EventEmitter()
  @Input() color: string = "btn-primary"
  @Input() mensaje: string = "btn"
  @Input() tamaño: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  click(){
    this.onClick.emit()
  }
  

}
