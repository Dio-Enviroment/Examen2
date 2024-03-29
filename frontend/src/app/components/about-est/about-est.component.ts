import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-about-est',
  templateUrl: './about-est.component.html',
  styleUrls: ['./about-est.component.scss']
})
export class AboutEstComponent {
  usuarios?: Usuario[];
  constructor(private usuarioService:UsuarioService){
    this.loadData();
  }

  loadData(): void {
    this.usuarioService.getAll()
      .subscribe({
        next: (data) => {
          this.usuarios = data;

          // if (this.empleados!=null) {
          //   this.router.navigate(["/empleado"]);
          // }
          // else if (this.empleados==null) {
            
          // }
          //this.router.navigate(["/noticias"]);
          
        },
        error: (e) => console.error(e)
      });
  }
}
