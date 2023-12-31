import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})

export class ReActividadService {
  constructor(private httpClient: HttpClient) { }

  public registrarActividad(formData:FormData): Observable<any>{
    return this.httpClient.post(`${baserUrl}/actividad/registro`,formData)
  }
  public obtenerHistorialPorUsuario(usuarioId: number): Observable<any> {
    return this.httpClient.get(`${baserUrl}/actividad/historial/usuario/${usuarioId}`);
  }
  
}
