import { homelocation } from './homelocation.';
import { facultylocation } from "./facultylocation";

export interface child{
    name:string;
    age:number;
    residential:string;
    // address:string;
    school_name:string;
    school_address:facultylocation;
    home_address:homelocation;
    // school_latitude:number,
    // school_longitude:number,
    // home_latitude:number,
    // home_longitude:number,
}