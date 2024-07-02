import { Component } from '@angular/core';
import { LabelDetailsComponent } from '../../../shared/common/label-details/label-details.component';
import { Card } from '../../../core/models/card.interface';

@Component({
  selector: 'app-details-card',
  standalone: true,
  imports: [LabelDetailsComponent],
  templateUrl: './details-card.component.html',
})
export class DetailsCardComponent {
  protected card: Card;

  constructor() {
    this.card = this.getDetails();
  }

  getDetails(): Card {
    return {
      // card data
      registrationSeries: 'ABC123',
      registrationNumber: 123456,
      class: 2024,

      // personal data
      paternalSurname: 'González',
      maternalSurname: 'López',
      name: 'Juan Carlos',
      curp: 'GOLJ840123HDFRNN01',
      birthdate: new Date('1984-01-23'),
      nationality: 'Mexicana',
      state: 'Ciudad de México',
      municipality: 'Benito Juárez',
      maritalStatus: 'Soltero',
      occupation: 'Ingeniero',
      literacy: true,
      educationLevel: 'Licenciatura',
      address: 'Calle Falsa 123, Colonia Centro',
      phone: '5551234567',

      // father data
      fatherName: 'José',
      fatherPaternalSurname: 'González',
      fatherMaternalSurname: 'Pérez',
      fatherAlive: false,

      // mother data
      motherName: 'María',
      motherPaternalSurname: 'López',
      motherMaternalSurname: 'Ramírez',
      motherAlive: true,

      // grandparents data
      livingGrandParents: 1,

      // spouse data
      spouseAlive: false,

      // children data
      numberChildren: 0,
    };
  }
}
