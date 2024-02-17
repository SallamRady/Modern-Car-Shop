import { MouseEventHandler } from "react";

export default interface CustomButtonType {
    title:string,
    containerStyle?:string,
    btnType?:"button"|"submit",
    hadleClick?:MouseEventHandler<HTMLButtonElement>
}