import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRider } from 'src/app/models/irider';
import { RidersService } from 'src/app/services/riders.service';

@Component({
  selector: 'app-rider-edit',
  templateUrl: './rider-edit.component.html',
  styleUrls: ['./rider-edit.component.css']
})
export class RiderEditComponent implements OnInit {

  isDisabled: boolean = true

  isLoading: boolean = true;

  rider!: IRider;

  freePlates: number[] = []

  constructor(
    private ridersService: RidersService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if(id === null) {
      this.router.navigate([''])
      return
    }

    this.ridersService.getRider(id).subscribe({
      next: (response: any) => {
        if(!response.success) {
          this.router.navigate([''])
          return
        }
        this.rider = response.data
        this.isLoading = false
      },
      error: (e) => {
        this.router.navigate([''])
      }
    })

    this.ridersService.getPlates().subscribe((response: any) => {
      this.freePlates = response.freePlates      
    })
  }

  editRider() {
    console.log(this.rider);
  }

}
