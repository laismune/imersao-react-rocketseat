import { ButtonHTMLAttributes } from "react";
import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button (props: ButtonProps) {
  return (
    <button className = 'button' {...props}/>
  )
}

/* Tipagem em typescript são passadas como parametros de uma função:
  Ponto de interrogação torna a propriedade opcional;

  type ButtonProps = {
  text?: string,
  children?:string,
}

export function Button (props: ButtonProps) {
  return (
    <button> {props.children || 'Default'} </button>
  )
}

  export function Button (props: ButtonProps) {
  return (
    <button> {props.text || 'Default'} </button>
  )
}*/

