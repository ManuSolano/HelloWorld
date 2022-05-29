<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Usuarios</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
          
          <ion-row v-for="(item, index) in listaClaves" :key="index">
            <ion-col>
              <div>{{listaKeys[index]}} {{listaApe[index]}}</div>
              <div>{{listaCar[index]}}</div>
            </ion-col>
            
          </ion-row>
        </ion-grid>
      
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Usuarios</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <ExploreContainer name="Usuarios" />
    </ion-content>
  </ion-page>
</template>

<script>
import {
IonPage,
IonHeader,
IonToolbar,
IonTitle,
IonContent,
IonCol,
IonGrid,
IonRow,
} from "@ionic/vue";
import { getDatabase, ref, onValue } from "firebase/database";
export default {
name: "Tab2Page",
components: {
IonHeader,
IonToolbar,
IonTitle,
IonContent,
IonPage,
IonCol,
IonGrid,
IonRow,
},
mounted() {
const db = getDatabase();
const starCountRef = ref(db, "usuario/");
onValue(starCountRef, (snapshot) => {
const data = snapshot.val();
console.log(data);
var cont = 0
snapshot.forEach(element => {

this.listaApe[cont]=element.child('apellido')
this.listaKeys[cont]=element.child('nombre')
this.listaCar[cont]=element.child('carrera')
this.listaClaves[cont] = element.toJSON()
cont++
});
});
},
data(){ return{
listaClaves: [{usuario:''}],
listaKeys:[],
listaApe:[],
listaCar:[]
}}
};
</script>


<style>
ion-col > div {

border: solid 1px #ddd;
padding: 10px;
}
</style>

