<template>
  <div id="main">
    <div class="make-obscur">
      <div class="container-body">
        <div class="description">
          <p>
            HBM est un système complet pour la <b>gestion des réservations de
            votre flotte d'autocars et bus</b>. La solution comprend un
            centre de gestion pour la programmation et le pilotage de
            l'activité, une interface de vente pour la réservation des trajets
            et l'émission des billets.
          </p>
          
          <div class="buttons">
            <nuxt-link to="/Dahoboard/Auth" style="text-decoration: none !important;">
              <div class="button-start">
              <span>Commencez !</span>
              <i class="pi pi-arrow-right"></i>
            </div>
            </nuxt-link>
          </div>

        </div>
        <div class="description-logo">
          <img src="../assets/HBM.png" width="200px" alt="" srcset="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button';
export default {
  name:'auth',
  components: { Button },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style>
:root {
  --blue: rgb(7, 30, 74) ;
  --transparent: rgba(0, 0, 0, 0.4)
}

* {
  font-family: 'Ubuntu';
}
body {
  padding: 0;
  margin: 0;
}
#main {
  position: relative;
  background: url("../assets/couple.webp");
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
  padding-top: 200px;
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

.description {
  width:50%;
  line-height: 35px;
  color: white;
  font-size: 23px;
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
  background-color:white;
  color: var(--blue);
}

.button-start:hover > .pi {
  transition: display 2s ease;
  display: block;
}


@media screen and (max-width:788px) {

  .description {
      order:2;
      padding-top: 50px;
  }
  .description-logo {
  order:1
}
  .container-body {
    width: 90%;
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .description{
    width: 100%;
  }
}
</style>
