import React from "react";

const Button = ({children, onClick})=>(
<button onClick={onClick} class="Button">
{children}
</button>)

export default Button;