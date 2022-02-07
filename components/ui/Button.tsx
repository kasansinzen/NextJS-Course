import Link from 'next/link';
import React from 'react';
import classes from "./Button.module.css";

interface IButton {
  link?: string;
  onClick?: () => void;
}
const Button: React.FC<IButton> = (props) => {
  if(props?.link) {
    return <Link href={props.link}>
    <a className={classes.btn}>{props.children}</a>
  </Link>
  }else {
    return <button className={classes.btn} onClick={props.onClick}>{props.children}</button>
  }
}

export default Button;