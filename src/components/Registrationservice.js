import React from 'react'
import axios from 'axios';


function Registrationservice({Floor,Room,Sixshare,Fiveshare,Fourshare,Threeshare,Twoshare,Oneshare}) {
    let Floor1=[];  let Floor13=[];
    let Floor2=[];  let Floor14=[];
    let Floor3=[];  let Floor15=[];
    let Floor4=[];   
    let Floor5=[];
    let Floor6=[];
    let Floor7=[];
    let Floor8=[];
    let Floor9=[];
    let Floor10=[];
    let Floor11=[];
    let Floor12=[];
switch(Floor){
    case 1:
       
    if(Sixshare){
        value = Sixshare*6;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"6"+i,
                Room:Room,
                status:"true"
            }
            Floor1.push(objuct);
        }
        

    }
    else if(Fiveshare){
        value = Fiveshare*5;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"5"+i,
                Room:Room,
                status:"true"
            }
            Floor1.push(objuct);
        }

    }
    else if(Fourshare){
        value = Fourshare*4;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"4"+i,
                Room:Room,
                status:"true"
            }
            Floor1.push(objuct);
        }

    }
    else if(Threeshare){
        value = Threeshare*3;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"3"+i,
                Room:Room,
                status:"true"
            }
            Floor1.push(objuct);
        }

    }

    else if(Twoshare){
        value = Twoshare*2;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"2"+i,
                Room:Room,
                status:"true"
            }
            Floor1.push(objuct);
        }

    }
    else if(Oneshare){
        value = Oneshare;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"1"+i,
                Room:Room,
                status:"true"
            }
            Floor1.push(objuct);
        }

    }
    break;

    case 2:
       
    if(Sixshare){
        value = Sixshare*6;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"6"+i,
                Room:Room,
                status:"true"
            }
            Floor2.push(objuct);
        }
        

    }
    else if(Fiveshare){
        value = Fiveshare*5;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"5"+i,
                Room:Room,
                status:"true"
            }
            Floor2.push(objuct);
        }

    }
    else if(Fourshare){
        value = Fourshare*4;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"4"+i,
                Room:Room,
                status:"true"
            }
            Floor2.push(objuct);
        }

    }
    else if(Threeshare){
        value = Threeshare*3;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"3"+i,
                Room:Room,
                status:"true"
            }
            Floor2.push(objuct);
        }

    }

    else if(Twoshare){
        value = Twoshare*2;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"2"+i,
                Room:Room,
                status:"true"
            }
            Floor2.push(objuct);
        }

    }
    else if(Oneshare){
        value = Oneshare;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"1"+i,
                Room:Room,
                status:"true"
            }
            Floor2.push(objuct);
        }

    }
    break;

    case 3:
       
    if(Sixshare){
        value = Sixshare*6;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"6"+i,
                Room:Room,
                status:"true"
            }
            Floor3.push(objuct);
        }
        

    }
    else if(Fiveshare){
        value = Fiveshare*5;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"5"+i,
                Room:Room,
                status:"true"
            }
            Floor3.push(objuct);
        }

    }
    else if(Fourshare){
        value = Fourshare*4;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"4"+i,
                Room:Room,
                status:"true"
            }
            Floor3.push(objuct);
        }

    }
    else if(Threeshare){
        value = Threeshare*3;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"3"+i,
                Room:Room,
                status:"true"
            }
            Floor3.push(objuct);
        }

    }

    else if(Twoshare){
        value = Twoshare*2;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"2"+i,
                Room:Room,
                status:"true"
            }
            Floor3.push(objuct);
        }

    }
    else if(Oneshare){
        value = Oneshare;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"1"+i,
                Room:Room,
                status:"true"
            }
            Floor3.push(objuct);
        }

    }
    break;

    case 4:
       
    if(Sixshare){
        value = Sixshare*6;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"6"+i,
                Room:Room,
                status:"true"
            }
            Floor4.push(objuct);
        }
        

    }
    else if(Fiveshare){
        value = Fiveshare*5;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"5"+i,
                Room:Room,
                status:"true"
            }
            Floor4.push(objuct);
        }

    }
    else if(Fourshare){
        value = Fourshare*4;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"4"+i,
                Room:Room,
                status:"true"
            }
            Floor4.push(objuct);
        }

    }
    else if(Threeshare){
        value = Threeshare*3;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"3"+i,
                Room:Room,
                status:"true"
            }
            Floor4.push(objuct);
        }

    }

    else if(Twoshare){
        value = Twoshare*2;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"2"+i,
                Room:Room,
                status:"true"
            }
            Floor4.push(objuct);
        }

    }
    else if(Oneshare){
        value = Oneshare;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"1"+i,
                Room:Room,
                status:"true"
            }
            Floor4.push(objuct);
        }

    }
    break;

    case 1:
       
    if(Sixshare){
        value = Sixshare*6;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"6"+i,
                Room:Room,
                status:"true"
            }
            Floor1.push(objuct);
        }
        

    }
    else if(Fiveshare){
        value = Fiveshare*5;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"5"+i,
                Room:Room,
                status:"true"
            }
            Floor1.push(objuct);
        }

    }
    else if(Fourshare){
        value = Fourshare*4;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"4"+i,
                Room:Room,
                status:"true"
            }
            Floor1.push(objuct);
        }

    }
    else if(Threeshare){
        value = Threeshare*3;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"3"+i,
                Room:Room,
                status:"true"
            }
            Floor1.push(objuct);
        }

    }

    else if(Twoshare){
        value = Twoshare*2;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"2"+i,
                Room:Room,
                status:"true"
            }
            Floor1.push(objuct);
        }

    }
    else if(Oneshare){
        value = Oneshare;
        for(i=1;i<=value;i++){
        let objuct =   {
                id:"1"+i,
                Room:Room,
                status:"true"
            }
            Floor1.push(objuct);
        }

    }
    break;
    
}
  return (
    <>
    </>
  )
}

export default Registrationservice