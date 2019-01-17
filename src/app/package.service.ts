import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/';
import { map} from 'rxjs/operators';
import {Package} from './package.model';


@Injectable()
export class PackageService {
  private readonly endpoint = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  private pagingAndSortingHandler(pagingAndSorting: any): string {
    var resultString: string = "";

    if (pagingAndSorting == null || pagingAndSorting.length == 0)
      return resultString;

    resultString += "?size=" + pagingAndSorting.pageSize;
    resultString += "&page=" + (pagingAndSorting.page - 1);

    return resultString;
  }

  private filterHandler(filterQuery: any): string {
    var resultString: string = "";

    if (filterQuery == null)
      return resultString;

    Object.keys(filterQuery).forEach(key => {
      resultString += "&" + key + "=" + filterQuery[key];
    });

    return resultString;
  }

  public loadAll(pagingAndSorting?: any): Observable<{} | any> {

    return this.http.get<any>(
      this.endpoint + '/rest/packages' + this.pagingAndSortingHandler(pagingAndSorting))
    .pipe(
      map(res => {
  
      return res;
      }));
    }

  public loadAllFiltered(entityRel: string, filterQuery?: any, pagingAndSorting?: any): Observable<{} | any> {
    return this.http.get(this.endpoint + '/packages' + + '/filtered' + this.pagingAndSortingHandler(pagingAndSorting) + this.filterHandler(filterQuery));
  }

  public loadByVendorNameVerson(vendor: string, name: string, version: string): Observable<Package> {
  
    var url = this.endpoint + '/rest/packages/search?' +
    'vendor=' + vendor +
    '&name=' + name +
    '&version=' + version
  
    return this.http.get<Package>(url);
  }
}