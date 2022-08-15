import React, { useState } from "react";


const InputCalc = ({children,props,Valor,Inputs}) => {


 
return <div>
    <div>
    <textarea  onChange= {Inputs} value = {Valor} class="Result" type ="text" placeholder="Digite um numero" > 

    </textarea>
    </div>

    </div>
}


export default InputCalc;