import { Component, ElementRef, EventEmitter, Host, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.scss']
})
export class FormReactivoComponent implements OnInit {

  constructor(private personaService: PersonaService, private formBuilder: FormBuilder) { }

  @Input() set personaActual(valor) {
    this.onBuild();
    if (valor) {
      this.personaOrignal = valor;
      this.edit = true;
      this.formPersona.patchValue({
        id: valor.id,
        nombre: valor.nombre,
        apellido: valor.apellido,
        dni: valor.dni
      });
    }
  }

  @Output() calcularPaginas: EventEmitter<any> = new EventEmitter();

  @ViewChild('btnClose', {static: true}) btnClose: ElementRef;

  public formPersona: FormGroup;
  public personaOrignal: any;
  public edit = false;
  public isError = false;

  ngOnInit(): void {
    this.onBuild();
  }

  onBuild(): void {
    this.formPersona = this.formBuilder.group({
      id: new FormControl(0),
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      dni: new FormControl(null, [Validators.required, Validators.pattern('[0-9]{1,8}')])
    });
  }

  onSave(formPersona: FormGroup): void {
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
