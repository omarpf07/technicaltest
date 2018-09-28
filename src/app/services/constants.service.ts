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

  public availableCountries = [
    { id: 1, value: 'Venezuela' },
    { id: 2, value: 'Iceland' },
    { id: 3, value: 'Japan' },
    { id: 4, value: 'France' },
    { id: 5, value: 'Italy' },
    { id: 6, value: 'United States' }
  ];

}
