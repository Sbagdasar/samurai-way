import {logDOM} from "@testing-library/react";

export const required = (value: string) => {
  return value ? undefined : ' Required field'
}
export const maxLengthCreator = ( max: number)=>(value: string) => {
    if (value.length > max) { return 'Max length is ' + max }
    return undefined
}