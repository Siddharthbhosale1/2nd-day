import { LightningElement,track } from 'lwc';
//Class consists of properties and methods
export default class LwcPractice extends LightningElement {
    fullname = "Zero to Hero"
    title = "aura"
    cangeHandler(event)
    {
      this.title = event.target.value
    }

     address={
        city: 'Melborn',
        postcode : 3000,
        country:'indilollllb'
    }

    trackHandler(event){
        this.address={...this.address, "city":event.target.value}
    }
    //methods
   // getName(){
        //performlogic
   // }


}