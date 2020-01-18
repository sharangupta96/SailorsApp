
export interface Theme {
    name: string;
    properties: any;
  }
  
  export const light: Theme = {
    name: "light",
    properties: {
      "--text-color": "#000000",
      "--background-color": "#f6f6f6"
    }
  };
  
  export const dark: Theme = {
    name: "dark",
    properties: {
      "--text-color": "#fff",
      "--background-color": "#000000"
    }
  };