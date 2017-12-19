import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios"
//import {NotificationHandler} from "../components/ToastNotification";
//import { LoadingComponent } from '../components/Loading';

class ApiHeaders {
    [key: string]: string | number;
}
type AxiosMethodDefinition = (url: string, data?: any, config?: AxiosRequestConfig) => AxiosPromise;
type AxiosMethodChooser = (instance: AxiosInstance) => AxiosMethodDefinition;

export default class ApiHelper {

    private static callMethod(methodChooser: AxiosMethodChooser, url: string, data?: any, responseType: string = "json"): AxiosPromise {
        const instance = this.getInstance(responseType);
        const result = methodChooser(instance)(url, data);
        result.catch(this.handleError);

      //  LoadingComponent.showLoading();
      //  result.then(LoadingComponent.hideLoading, LoadingComponent.hideLoading);

        return result;
    }

    public static getData(url: string, getData?: any, responseType: string = "json"): AxiosPromise {
        return ApiHelper.callMethod((instance: AxiosInstance) => instance.get, url, {params:getData}, responseType);
    }

    public static putData(url: string, putData?: any, responseType: string = "json"): AxiosPromise {
        return ApiHelper.callMethod((instance: AxiosInstance) => instance.put, url, putData, responseType);
    }

    public static postData(url: string, postData?: any, responseType: string = "json"): AxiosPromise {
        return ApiHelper.callMethod((instance: AxiosInstance) => instance.post, url, postData, responseType);
    }

    public static patchData(url: string, patchData?: any, responseType: string = "json"): AxiosPromise {
        return ApiHelper.callMethod((instance: AxiosInstance) => instance.patch, url, patchData, responseType);
    }

    public static deleteData(url: string, responseType: string = "json"): AxiosPromise {
        return ApiHelper.callMethod((instance: AxiosInstance) => instance.delete, url, void 0, responseType);
    }

    public static handleError(error: any) {
     //   NotificationHandler.showError(error.message, "--error AJAX");
        console.log("--error AJAX: ", error);
    }

    static loadScript(url: string, successAction: any) {
        let script = document.createElement("script");
        script.src = url;
        script.onload = function () {
            successAction();
        };
        document.head.appendChild(script);
    }

    private static getInstance(responseType: string = "json"): AxiosInstance {
        const headers = new ApiHeaders();

        const axiosInstance = axios.create({ responseType: responseType, headers: {'Access-Control-Allow-Origin' : '*'}, });
        /*axiosInstance.interceptors.response.use(undefined as any, (err: any) => {
            if (err.response && err.response.status === 401 && err.response.config && !err.response.config.__isRetryRequest) {
                err.response.config.__isRetryRequest = true;
                return new Promise((resolve, reject) => {
                    AzureAuth.renewalToken((token: string) => {
                        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                        err.config.headers.Authorization = `Bearer ${token}`;
                        axios(err.config).then(resolve, reject);
                    });
                });
            }
            throw err;
        });
        */
        return axiosInstance;
    }

    /*private static getAbsoluteUrl(url: string): string {
        if (url && url[0] !== "/") url = "/" + url;
        if (!url.startsWith("/api")) url = "/api" + url;
        return location.origin + url;
    }*/
}