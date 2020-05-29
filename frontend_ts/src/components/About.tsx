import * as React from 'react';
import { Constants } from '../Constants';


type AboutProps = {
}

type AboutStates = {
    date_year: number;

}

class About extends React.Component<AboutProps, AboutStates>{

    constructor(props: AboutProps) {
        super(props);
        this.state = {
            date_year: 2020
        }

    }



    render() {

        return (
            <div>
                <h1>About KUKASEON</h1>
                Kuka se on translates to <i>Who is it</i> from Finnish. It is a user managment system that can be integrated to other projects held on {Constants.institution} at {this.state.date_year}
            </div>
        );
    }

}


export default About;














// let st1: string | undefined;
// if (st1)
//     console.log(st1);

// function capitalize(st? : string){

// }
// capitalize(st1);

// interface message{
//     text: string | undefined;
//     showMsg : void | undefined;

// }

// class success implements message{

//     readonly colorBG: string = "green";
//     text = "successfully done!";
//     showMsg = void{};
// }

// abstract class unsuccess implements message{
//     text: string |undefined;
//     showMsg = void{};
//     protected colorBG: string | undefined;
//     readonly blurBG: void = void {

//     }
// }

// class error extends unsuccess{
//     colorBG = "red";
//     text = "something went wrong";
//     constructor(txt: string){
//         super();
//         this.text = txt;
//     }
// }

// class warning extends unsuccess{
//     colorBG = "yellow";
//     text = "please read the instruction first";
// }

// function addAll(a1: number, ...rest:number[]): number;
// function addAll(s1: string): string;
// function addAll(x:any):any{

// }


// function uniqueList<T>(pl: T[]): T[] {
//     let r :T[]=[];
//     if(pl){
//         for(let i of pl){
//             if(!r.includes(i)){
//                 r.push(i);
//             }
//         }
//     }
//     return r;        
// }

// let a = [5,5,6,3,3,2,4];
// let b = ["a","b","a","c"];
// console.log(uniqueList(a));
