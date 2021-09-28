import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr:ToastrService) { }

  showSuccess(message:any, title:any, extra:any){
    this.toastr.success(message, title, extra)
  }

  showError(message:any, title:any, extra:any){
    this.toastr.error(message, title, extra)
  }

  showInfo(message:any, title:any, extra:any){
    this.toastr.info(message, title, extra)
  }

  showWarning(message:any, title:any, extra:any){
    this.toastr.warning(message, title, extra)
  }
}
