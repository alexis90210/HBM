<template>
  <div id="main">
    <div class="make-obscur">
      <div class="container-body">
        <div class="description">
          <img src="@/assets/HBM.png" width="200px" alt="" srcset="" />

          <p class="fbig">
            HBM Vous offre une gestion securis&eacute;e de votre flotte.
            Veuillez-vous connecter pour commencer votre activit&eacute;
          </p>

          <div class="buttons">
            <nuxt-link to="/" style="text-decoration: none !important">
              <div class="button-start">
                <span>revenir &agrave; l'acceuil</span>
                <i class="pi pi-arrow-left"></i>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="description-form">
          <center class="fmedium">CONNEXION</center>
          <InputText
            placeholder="Code d'utilisateur"
            type="text"
            style="margin-top: 20px"
          />

          <TabView style="margin-top: 10px">
          <TabPanel>
              <template #header>
                <i class="pi pi-user"></i>
                <span class="tabText">CLIENT</span>
              </template>
             <div>
                <Password  v-model="password" style="margin-top: 10px" toggleMask></Password>
           

              </div></TabPanel>

            <TabPanel>
              <template #header>
                <i class="pi pi-user"></i>
                <span class="tabText">SUPERVISEUR</span>
              </template>
              <div>
                     <AutoComplete 
                :suggestions="Agence"
                placeholder="Agence"
                 @complete="searchAgence($event)" 
                field="name" />
                
                <AutoComplete 
                :suggestions="Agence"
                placeholder="Sous-Agence"
                style="margin-top: 10px"
                 @complete="searchAgence($event)" 
                field="name" />

                <Password  v-model="password" style="margin-top: 10px" toggleMask></Password>
           

              </div>
            </TabPanel>

            <TabPanel>
              <template #header>
                <i class="pi pi-user"></i>
                <span class="tabText">AGENT</span>
              </template>
              <div>
                     <AutoComplete 
                :suggestions="Agence"
                placeholder="Agence"
                 @complete="searchAgence($event)" 
                field="name" />
                
                <AutoComplete 
                :suggestions="Agence"
                placeholder="Sous-Agence"
                style="margin-top: 10px"
                 @complete="searchAgence($event)" 
                field="name" />

                <Password  v-model="password" style="margin-top: 10px" toggleMask></Password>
           

              </div>
            </TabPanel>

          </TabView>
          <Button label="Se connecter" @click="$router.push('/dashboard/Agence')"></Button>
        </div>
</div>
    </div>
  </div>
</template>

<script>

import Button from "primevue/button";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import InputText from "primevue/inputtext";
import AutoComplete from "primevue/autocomplete";
import Password from 'primevue/password';

export default {
  name: "auth",
  components: {
    Button,
    TabView,
    TabPanel,
    InputText,
    AutoComplete,
    Password
  },
  data() {
    return {
        Agence:[],
        filteredAgence:[],
        password:''
    };
  },

  methods: {
    searchAgence(event) {
        this.filteredAgence = this.Agence.includes(event.query)
    }
  },
};
</script>

<style>
:root {
  --blue: rgb(7, 30, 74);
  --transparent: rgba(0, 0, 0, 0.4);
}

* {
  font-family: "Ubuntu";
}
body {
  padding: 0;
  margin: 0;
}
#main {
  position: relative;
  background: url("@/assets/couple.webp");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  max-height: auto;
  overflow: hidden;
}

.make-obscur {
  position: absolute;
  z-index: 10;
  background-color: var(--transparent);
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
}

.make-obscur::-webkit-scrollbar-button {
  background-color: var(--blue);
  width: 5px;
  border-radius: 15px;
}

.make-obscur::-webkit-scrollbar {
  background-color: aliceblue;
  width: 5px;
  border-radius: 15px;
}

.container-body {
    padding-top: 120px !important;
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* align-items: center; */
  justify-content: space-around;
  padding-bottom: 40px;
}

.description {
  width: 45% !important;
  color: white;
  font-size: 20px;
}

.buttons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.button-start {
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 2px;
  height: 44px;
  font-size: 14px;
  background-color: var(--blue);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  color: white;
  cursor: pointer;
}

.button-start > span {
  margin-right: 15px;
  text-transform: uppercase;
}

.button-start > .pi {
  display: none;
}

.button-start:hover {
  transition: background-color 2s ease;
  background-color: white;
  color: var(--blue);
}

.button-start:hover > .pi {
  transition: display 2s ease;
  display: block;
}
.fbig {
  font-size: 30px;
}

.fmedium {
  font-size: 25px;
}

.tabText {
  padding-left: 15px !important ;
  padding-right: 15px !important;
  font-size: 13px;
}

.description-form {
  border-radius: 5px;
  background-color: white !important;
  padding: 20px;
  width: 50%;
  padding-top: 30px;
  margin-top: 60px;
}

.p-inputtext,
.p-autocomplete,
.p-password,
.p-button {
  width: 100%;
  height: 45px;
}


@media screen and (max-width: 788px) {
     .description {
      order:1;
    width: 100% !important;
      padding-top: 50px;
  }
  .description-form {
  order:2;
  width: 100%;
  margin-top: 20px;
}

  .container-body {
      padding-top: 20px !important;
    width: 90%;
    padding-top: 80px;
    padding-bottom: 80px;
  }

}

.bshadow{
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
}
</style>
