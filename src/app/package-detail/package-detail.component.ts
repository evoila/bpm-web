import { Component, OnInit, Input } from '@angular/core';
import { Package } from '../package.model';
import { PackageService } from '../package.service';

@Component({
  selector: 'package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.css']
})
export class PackageDetailComponent implements OnInit {


  @Input() package : Package;
  dependencies : Package[];

  constructor(private packageService : PackageService) { }

  ngOnInit() {

    this.dependencies = Array<Package>();

    if(this.package.dependencies == null){
      return;
    }

    this.package.dependencies.forEach(dependency => {
    
        this.packageService.loadByVendorNameVerson(dependency.vendor, dependency.name, dependency.version).
        subscribe((response : any) => {

          var dep = response

          if(dep != null){
            this.dependencies.push(dep);
          }
        }
        );
    });
  }
}
