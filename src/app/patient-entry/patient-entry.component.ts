import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {


  name=""
  id=""
  address=""
  phone=""
  dateOfAppointment=""
  image=""
  doctorName=""


  readValues=()=>
  {
    let data:any={"name":this.name,"id":this.id,"address":this.address,"phone":this.phone,"dateOfAppoinment":this.dateOfAppointment,"image":this.image,"doctorName":this.doctorName}
    console.log(data)
  }

}
