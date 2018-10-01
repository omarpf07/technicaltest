import { Component, OnInit, Input } from '@angular/core';
import { TdDataTableService, TdDataTableSortingOrder, ITdDataTableSortChangeEvent, ITdDataTableColumn } from '@covalent/core/data-table';
import { TdLoadingService, LoadingType, LoadingMode } from '@covalent/core/loading';
import { ConstantsService, UserService, UtilService } from './../../services';
import { IUser } from '../../models/beans/user';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserDataComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('user') user: IUser;
  public hasEntered: boolean;
  public viewFlags = true;
  public data: any[] = [];
  public filteredData: any[];
  public countries: any[];
  public columns: any[];
  public searchTerm = '';
  public fromRow = 1;
  public sortBy = 'name';
  public selectedRows: any[] = [];
  public sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;
  public userForm: any;

  constructor(private _dataTableService: TdDataTableService, private constantsService: ConstantsService,
    private userService: UserService, private loadingService: TdLoadingService,
    private utilService: UtilService, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.loadingService.create({
      color: 'accent',
      name: 'service',
      type: LoadingType.Linear,
      mode: LoadingMode.Indeterminate
    });
    this.loadingService.register('service');
    this.hasEntered = true;
    this.columns = this.constantsService.userTableColumns;
    this.initializeForms();
    this.getUsers();
    this.filter();
  }

  initializeForms() {
    this.userForm = this.formBuilder.group({
      country: [this.user.country, Validators.compose([Validators.required, Validators.minLength(1)])],
      description: [this.user.description]
    });
  }

  getUsers() {
    this.userService.getData().subscribe((res: any) => {
      this.data = res.data;
      this.filteredData = this.data;
      this.loadingService.resolve('service');
    });
  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name;
    this.sortOrder = sortEvent.order;
    this.filter();
  }

  search(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filter();
  }

  filter(): void {
    let newData: any[] = this.data;
    const excludedColumns: string[] = this.columns
      .filter((column: ITdDataTableColumn) => {
        return ((column.filter === undefined && column.hidden === true) ||
          (column.filter !== undefined && column.filter === false));
      }).map((column: ITdDataTableColumn) => {
        return column.name;
      });
    newData = this._dataTableService.filterData(newData, this.searchTerm, true, excludedColumns);
    newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
    this.filteredData = newData;
  }

  save() {
    this.utilService.openSnackBar('Cambios efectuados correctamente!');
  }
}
