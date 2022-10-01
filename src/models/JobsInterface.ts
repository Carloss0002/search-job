export interface JobsApiModel{
  longitude: number;
  latitude: number;
  category: Category;
  location: Location;
  id: string;
  description: string;
  company: Company;
  adref: string;
  contract_time: string,
  salary_is_predicted: string;
  redirect_url: string;
  title: string;
  created: string;
}
  export interface Company {
    display_name: string;
    
  }
  export interface Location {
    display_name: string;
    area: (string)[];
  }
  export interface Category {
    tag: string;
    label: string;
  }
  
  