import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-tabla-ractiva',
  templateUrl: './tabla-ractiva.component.html',
  styleUrls: ['./tabla-ractiva.component.scss']
})
export class TablaRactivaComponent implements OnInit {

  public personas: Persona[];
  public personaActual: Persona = {
    id: 0,
    nombre: '',
    apellido: '',
    dni: null
  };

  totalRegistros = 0;
  paginaActual = 0;
  totalPorPagina = 5;
  pageSizeOptions: number[] = [3, 5, 10, 25, 100];

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.calcularPaginas();
  }

  getAllPersonas() {
    this.personaService.getAll().subscribe( res => {
      this.personas = res;
    });
  }

  paginar(event: PageEvent): void {
    this.paginaActual = event.pageIndex;
    this.totalPorPagina = event.pageSize;
    this.calcularPaginas();
  }

  calcularPaginas(){
    this.personaService.getAllPaged(this.paginaActual.toString(), this.totalPorPagina.toString())
    .subscribe(res => 
      {
        this.personas = res.content as Persona[];
        this.totalRegistros = res.totalElements as number;
        //this.paginator._intl.itemsPerPageLabel = 'Registros por página:';
      });
  }

  delete(persona: Persona) {
    const opcion = confirm('¿Desea eliminar este registro?');
    if (opcion === true) {
      this.personaService.delete(persona.id).subscribe(
        res => {
          alert('El registro fue eliminado con éxito');
          const indexPersona = this.personas.indexOf(persona);
          this.personas.splice(indexPersona, 1);
        }
      );
    }
  }

  emptyPersona(){
    this.personaActual = {
      id: 0,
      nombre: '',
      apellido: '',
      dni: null
    };
  }

  onPreUpdate(persona: Persona) {
    this.personaActual = persona;
  }

}
