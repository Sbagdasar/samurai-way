export const updateObjectInArray = (items:Array<any>, id:number, objPropName:string, object:any) => {
  return items.map(item => item[objPropName] === id ? {...item, ...object} : item)

}
