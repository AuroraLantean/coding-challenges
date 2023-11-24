export const lg = console.log;

export const objForEach = (obj: object, callback: (key: string, value: unknown) => void) => {
  Object.keys(obj).forEach(key => callback(key, obj[key as keyof typeof obj]));
  return obj;
}
//------------== 
