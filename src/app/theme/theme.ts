
export interface Theme {
    name: string;
    properties: any;
  }
  
  export const light: Theme = {
    name: "light",
    properties: {
      "--text-color": "#000000",
      "--grey-text": "#808080",
      "--header-background-color": "#f6f6f6",
      "--listing-background-color": "#ffffff",
      "--newsletter-background-color": "#eaf4ff"
    }
  };
  
  export const dark: Theme = {
    name: "dark",
    properties: {
      "--text-color": "#fff",
      "--grey-text": "#fff",
      "--header-background-color": "#000000",
      "--listing-background-color": "#000000",
      "--newsletter-background-color": "#007bff"
    }
  };