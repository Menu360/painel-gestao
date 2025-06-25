import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth-callback',
  standalone: true,
  template: `<p>Autenticando...</p>`
})
export class AuthCallbackComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];

      if (token) {
        localStorage.setItem('token', token); // ou sessionStorage
        this.router.navigate(['/pedido']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}
