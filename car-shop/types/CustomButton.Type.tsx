import { MouseEventHandler } from "react";

export default interface CustomButtonType {
    title:string,
    containerStyle?:string,
    hadleClick?:MouseEventHandler<HTMLButtonElement>
}