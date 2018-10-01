import { Injectable } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core/data-table';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() { }


  public userTableColumns: ITdDataTableColumn[] = [
    { name: 'country', label: 'País', filter: true, sortable: true, width: 100 },
    { name: 'name', label: 'Nombre', filter: true, sortable: true },
    { name: 'description', label: 'Descripción', filter: true, sortable: false },
  ];
}
