import { render } from "@testing-library/react";
import React, { useState } from "react";
import Buttons from './calculatorButton';
import InputCalc from "./calculatorInput";


const MakeCalculator = (children,props)=> {

    const [InputData, setInputData] = useState('');
    

    const handleInputChange = (e) =>{
       setInputData(e.target.value);
        
    };
    
    const [StoredNumber1,change] = useState('');
    const [StoredNumber2,change2] = useState('');
    const [Operation, isDone] = useState(false);
    const [Addition, addOP] = useState(false);
    const [Subtraction, subOP] = useState(false);
    const [Multiply, multOP] = useState(false);
    const [Division, divOP] = useState(false);
    const [DecimalExistence, dotOP] = useState(false);
    

    const addNumber1 = (e)=>{
        const OldNumber = InputData + e.target.value;
        setInputData(OldNumber + 1)
        if(Operation === false){
        change(InputData + e.target.value+1);

        }
        else
        if(Operation === true){
            change2(InputData + e.target.value+1);
  
            }
    } ;

    const addNumber2 = (e)=>{
        const OldNumber = InputData + e.target.value;
        setInputData(OldNumber + 2)
        if(Operation === false){
        change(InputData + e.target.value+2);

        }
        else
        if(Operation === true){
            change2(InputData + e.target.value+2);
  
            }
    } ;

    const addNumber3 = (e)=>{
        const OldNumber = InputData + e.target.value;
        setInputData(OldNumber + 3)
        if(Operation === false){
        change(InputData + e.target.value+3);

        }
        else
        if(Operation === true){
            change2(InputData + e.target.value+3);
  
            }
    } ;

    const addNumber4 = (e)=>{
        const OldNumber = InputData + e.target.value;
        setInputData(OldNumber + 4)
        if(Operation === false){
        change(InputData + e.target.value+4);

        }
        else
        if(Operation === true){
            change2(InputData + e.target.value+4);
  
            }
    } ;

    const addNumber5 = (e)=>{
        const OldNumber = InputData + e.target.value;
        setInputData(OldNumber + 5)
        if(Operation === false){
        change(InputData + e.target.value+5);

        }
        else
        if(Operation === true){
            change2(InputData + e.target.value+5);
  
            }
    } ;

    const addNumber6 = (e)=>{
        const OldNumber = InputData + e.target.value;
        setInputData(OldNumber + 6)
        if(Operation === false){
        change(InputData + e.target.value+6);

        }
        else
        if(Operation === true){
            change2(InputData + e.target.value+6);
  
            }
    } ;

    const addNumber7 = (e)=>{
        const OldNumber = InputData + e.target.value;
        
        setInputData(OldNumber + 7)
        
        if(Operation === false){
            change(InputData + e.target.value+7);

            }
            else
            if(Operation === true){
                change2(InputData + e.target.value+7);

                }
        

    } ;

    const addNumber8 = (e)=>{
        const OldNumber = InputData + e.target.value;
        setInputData(OldNumber + 8)
        if(Operation === false){
        change(InputData + e.target.value+8);

        }
        else
        if(Operation === true){
            change2(InputData + e.target.value+8);
  
            }
    } ;

    const addNumber9 = (e)=>{
        const OldNumber = InputData + e.target.value;
        setInputData(OldNumber + 9)
        if(Operation === false){
        change(InputData + e.target.value+9);

        }
        else
        if(Operation === true){
            change2(InputData + e.target.value+9);
  
            }
    } ;

    const addNumber0 = (e)=>{
        const OldNumber = InputData + e.target.value;
        setInputData(OldNumber + 0)
        if(Operation === false){
        change(InputData + e.target.value+0);

        }
        else
        if(Operation === true){
            change2(InputData + e.target.value+0);
  
            }
    } ;

    const addNumberDot = (e)=>{
        
       if(!DecimalExistence){
        const OldNumber = InputData + e.target.value;
        if (!OldNumber.includes(".")){
            setInputData(OldNumber + ".")
            dotOP(true);
            if(Operation === false){
            change(InputData + e.target.value+".");
            dotOP(false);
            }
            else
            if(Operation === true){
                change2(InputData + e.target.value+".");
                dotOP(false);
                }
            }
        }

    } ;

    const addNumberP = (e)=>{
        change(InputData + e.target.value);
        isDone(true);
        addOP(true);
        clearNum(e);
         
    } ;

    const addNumberS = (e)=>{
        change(InputData + e.target.value);
        isDone(true);
        subOP(true);
        clearNum(e);
         
    } ;

    const addNumberM = (e)=>{
        change(InputData + e.target.value);
        isDone(true);
        multOP(true);
        clearNum(e);
         
    } ;

    const addNumberD = (e)=>{
        change(InputData + e.target.value);
        isDone(true);
        divOP(true);
        clearNum(e);
         
    } ;

    const clearNum = (e) =>{
        setInputData('');
    };

    const addNumberE = (e)=>{
        change2(InputData + e.target.value);

        if (Addition){
        const newNumber = (StoredNumber1*1) + (StoredNumber2 *1) ;
        Equallize(newNumber);
        addOP(false);
        }
        if (Subtraction){
            const newNumber = (StoredNumber1*1) - (StoredNumber2 *1) ;
            Equallize(newNumber);
            subOP(false);
        }

        if (Multiply){
            const newNumber = (StoredNumber1*1) * (StoredNumber2 *1) ;
            Equallize(newNumber);
            multOP(false);
        }

        if (Division){
            const newNumber = (StoredNumber1*1) / (StoredNumber2 *1) ;
            Equallize(newNumber);
            divOP(false);
        }

    } ;

    const Equallize = (e) => {
       
            setInputData(e);
            isDone(false);
            console.log(e);
        };

return <div>
    <div>
    <InputCalc Inputs = {handleInputChange} Valor = {InputData}></InputCalc>
    </div>
    <div>
    <Buttons onClick = {addNumber7}>7</Buttons>
    <Buttons onClick = {addNumber8}>8</Buttons>
    <Buttons onClick = {addNumber9}>9</Buttons>
    <Buttons onClick = {addNumberP}>+</Buttons>
    </div>
    <div>
    <Buttons onClick = {addNumber4}>4</Buttons>
    <Buttons onClick = {addNumber5}>5</Buttons>
    <Buttons onClick = {addNumber6}>6</Buttons>
    <Buttons onClick = {addNumberS}>-</Buttons>
    </div>
    <div>
    <Buttons onClick = {addNumber1}>1</Buttons>
    <Buttons onClick = {addNumber2}>2</Buttons>
    <Buttons onClick = {addNumber3}>3</Buttons>
    <Buttons onClick = {addNumberM}>*</Buttons>
    </div>
    <div>
    <Buttons onClick = {addNumberDot}>.</Buttons>
    <Buttons onClick = {addNumber0}>0</Buttons>
    <Buttons onClick = {addNumberE}>=</Buttons>
    <Buttons onClick = {addNumberD}>/</Buttons>
    </div>
    </div>
}


export default MakeCalculator;

