import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class Interceptors implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const modifiedRequest = req.clone({
            headers: req.headers.append('testInterceptors', ['ugyen', 'tenzin'])
        })
        return next.handle(modifiedRequest).pipe(
            tap((event) => {
                if(event.type === HttpEventType.Response) {
                    console.log("response arrived");
                    console.log(event.body)
                }
            })
        );
    } 

}