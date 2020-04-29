import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: [
    './toast.component.scss',
    '../../../node_modules/ngx-toastr/toastr.css',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ToastComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
  ) { }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  ngOnInit(): void {
  }

}
