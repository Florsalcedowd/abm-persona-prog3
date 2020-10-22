import { Component, ElementRef, EventEmitter, Host, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private personaService: PersonaService) { }

 @Input() personaActual: Persona;
 @Output() calcularPaginas: EventEmitter<any> = new EventEmitter();

 @ViewChild('btnClose', {static: true}) btnClose: ElementRef;

 public isError = false;

 ngOnInit(): void {
 }

 onSave(formPersona: NgForm): void {
   if (formPersona.invalid) {
     this.isError = true;
   } else {
     if (formPersona.value.id === 0) {
       // Agregar
       this.add(formPersona.value);
     } else {
       this.update(formPersona.value);
     }
     this.btnClose.nativeElement.click();
   }
 }

 add(persona: Persona): void {
   this.personaService.post(persona).subscribe(
     res => {
       /* this.tabla.personas.push(res); */
       this.calcularPaginas.emit();
     },
     err => {
       alert('Ocurrió un error al agregar la persona');
     }
   );
 }

 update(persona: Persona): void {
   this.personaService.put(persona.id, persona).subscribe(
     res => {
      alert('Persona fue actualizada con éxito');
      this.calcularPaginas.emit();
     },
     err => {
       alert('Ocurrió un error al actualizar persona');
     }
   );
 }

 onClose(): void {
   this.isError = false;
 }

 onCloseAlert(): void {
   this.isError = false;
 }

}
