import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRider } from 'src/app/models/irider';
import { RidersService } from 'src/app/services/riders.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-rider-edit',
  templateUrl: './rider-edit.component.html',
  styleUrls: ['./rider-edit.component.css']
})
export class RiderEditComponent implements OnInit {

  isDisabled: boolean = true

  isLoading: boolean = true;

  rider!: IRider;

  currentYear: number = new Date().getFullYear();
  age: number = 0;

  freePlates: number[] = []

  constructor(
    private ridersService: RidersService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id === null) {
      this.router.navigate([''])
      return
    }

    this.ridersService.getRider(id).subscribe({
      next: (response: any) => {
        if (!response.success) {
          this.router.navigate([''])
          return
        }
        this.rider = response.data
        this.isLoading = false

        // zjistit věk jezdce
        const riderAge = new Date(this.rider.dateOfBirth).getFullYear()
        this.age = this.currentYear - riderAge
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

    // zjistit kategorie

    this.rider.class20 = this.ridersService.getClass20(
      this.age,
      this.rider.isElite,
      this.rider.gender
    );

    this.rider.class24 = this.ridersService.getClass24(
      this.age,
      this.rider.gender
    );

    // zjistit barvu tabulky startovního čísla

    this.rider.plateColor20 = this.ridersService.getPlateColor(
      this.age,
      this.rider.isElite,
      this.rider.gender
    );

    const editedRiderData = {
      girlBonus: this.rider.girlBonus,
      email: this.rider.email,
      street: this.rider.street,
      city: this.rider.city,
      zip: this.rider.zip,
      is20: this.rider.is20,
      is24: this.rider.is24,
      isElite: this.rider.isElite,
      club: this.rider.club,
      transponder20: this.rider.transponder20,
      transponder24: this.rider.transponder24,
      plate: this.rider.plate,
      plateColor20: this.rider.plateColor20,
      class20: this.rider.class20,
      class24: this.rider.class24,
      emergencyContact: this.rider.emergencyContact,
      emergencyPhone: this.rider.emergencyPhone,
    }

    // Odešli upravená data do databáze

  }

  cancel(): void {
    this.location.back()
  }

}
