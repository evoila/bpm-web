import {Component, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import{ Package}  from '../package.model';
import{ PackageService}  from '../package.service';

@Component({
    selector : 'packages',
    templateUrl: './packages.component.html',
    styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit{
    pageSizes = [10, 25, 50, 100, 250];
    pagination: Pagination = {
      page: 0,
      collectionSize: 0,
      pageSize: 10,
      maxSize: 5,
      rotate: true,
      boundaryLinks: true
    };
    withFilter: boolean = false;
    public packages: Package[];
    selectedPackage: Package;

  constructor(protected readonly route: ActivatedRoute, private packageService : PackageService){}
    
  ngOnInit() {
        this.route.params.subscribe(params =>{
          this.loadPackages();
        })
      }

      pageChange(page?: number): void {
        if (page)
          this.pagination.page = page;
        this.loadPackages();
      }
    
      updateResponse(page: number, collectionSize: number): void {
        this.pagination.page = (page + 1);
        this.pagination.collectionSize = collectionSize;
      }
    
      private loadPackages() {
        this.packageService
          .loadAll( this.pagination)
          .subscribe((response: any) => {

           this.packages = response['_embedded']['packages'];
           this.updateResponse(response['page']['number'], response['page']['totalElements']);
              });
      }
}

export class Pagination{
    page: number;
    collectionSize: number;
    pageSize: number;
    maxSize: number;
    rotate: boolean;
    boundaryLinks: boolean;
}
