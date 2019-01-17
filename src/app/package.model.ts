export class Package{

    name : string;
    version: string;
    vendor : string;
    files : Array<string>;
    dependencies : Array<Dependency>;
    stemcell : Stemcell;
    description: string;
    uploadDate: string;
}

export class Dependency{
    name : string;
    version: string;
    vendor : string;
}

export class Stemcell{
    family : string;
    major_version : string;
    minor_version : string;
}
    