import axios from "axios";
import {id, api_key} from './keys/index'

export class JobsApi{
    private static serverUrl: string = 'https://api.adzuna.com/v1/api'

    public static getJobsApi(country:string, page:number)
    {
        let jobsApi:string = `${this.serverUrl}/jobs/${country}/search/${page}?app_id=${id}&app_key=${api_key}`

        return axios.get(jobsApi,{
            headers:{
                Accept: 'application/json'
            }
        })
    }

    public static getJobsTitle(country:string, page:number, filtered:string){
        let jobsApi:string = `${this.serverUrl}/jobs/${country}/search/${page}?app_id=${id}&app_key=${api_key}`

        return axios.get(jobsApi,{
            headers:{
                Accept: 'application/json'
            },
            params:{
                results_per_page: 40,
                title_only: filtered
            }
        })
    }


}

// https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=1788c705&app_key=768a2082011f5facde2857a7deb031d3&results_per_page=40& for filtered elements title_only=developer