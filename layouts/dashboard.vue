<template>
  <div>
    <div class="hheader bshadow">
      <div class="logo">
        <nuxt-link to="/dashboard/Agence">
          <img alt="logo" src="@/assets/HBM.png" height="30" class="mr-2" />
        </nuxt-link>
      </div>

      <div>
        <SplitButton :model="items" class="bg-plain">
          <Button
            type="button"
            icon="pi pi-cog"
            label="Parametres"
            class="p-button-text p-button-plain"
            @click="toggle"
            aria-haspopup="true"
            aria-controls="overlay_menu"
          >
            <img
              alt="logo"
              class="logo-avatar"
              src="https://www.primefaces.org/diamond/javax.faces.resource/images/avatar/profile.jpg.xhtml;jsessionid=node0vnu6rlrmne3kv309n485vju0388174.node0?ln=demo"
             height="20px"
            />
            <span class="ml-2 flex align-items-center fsmall"
              >OCEAN DU NORD</span
            >
          </Button>
        </SplitButton>
        <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
      </div>
    </div>

    <div class="main-content">

        <div class="mleft">
            <div class="bshadow box-content">
                <nuxt-link to="/dashboard/Agence" style="text-decoration:none">
                    <div class="hmenu">
                    <i class="icons mdi mdi-monitor-dashboard"></i>
                    <span>Tableau de bord</span>
                </div>
                </nuxt-link>

                <nuxt-link to="/dashboard/Agence/liste/commande" style="text-decoration:none">
                    <div class="hmenu">
                       <i class="icons mdi mdi-shield-check-outline"></i>
                       <span>Billets Vendus</span>
                    </div>
                </nuxt-link>

                 <nuxt-link to="/dashboard/Agence/commande" style="text-decoration:none">
                    <div class="hmenu">
                    <i class="icons mdi mdi-text-box-check-outline"></i>
                    <span>Vente Billet</span>
                </div>
                </nuxt-link>

                <nuxt-link to="/dashboard/Agence/embarquement" style="text-decoration:none">
                    <div class="hmenu">
                    <i class="icons mdi mdi-flag-outline"></i>
                    <span>Embarquement</span>
                </div>
                </nuxt-link>

                

                <nuxt-link to="/dashboard/Agence/trajet" style="text-decoration:none">
                    <div class="hmenu">
                       <i class="icons mdi mdi-layers-search-outline"></i>
                       <span>Recherche de trajets</span>
                    </div>
                </nuxt-link>

                 <nuxt-link to="/dashboard/Agence/configuration-trajet" style="text-decoration:none">
                    <div class="hmenu">
                       <i class="icons mdi mdi-road-variant"></i>
                       <span>Configuration des trajets</span>
                    </div>
                </nuxt-link>

                 

                <nuxt-link to="/dashboard/Agence/bagage-colis" style="text-decoration:none">
                    <div class="hmenu">
                       <i class="icons mdi mdi-bag-personal"></i>
                       <span>Bagages et colis</span>
                    </div>
                </nuxt-link>

                <nuxt-link to="/dashboard/Agence/destination" style="text-decoration:none">
                    <div class="hmenu">
                       <i class="icons mdi mdi-bus-marker"></i>
                       <span>Destinations</span>
                    </div>
                </nuxt-link>

               

                <nuxt-link to="/dashboard/Agence/vehicule" style="text-decoration:none">
                    <div class="hmenu">
                       <i class="icons mdi mdi-train-car"></i>
                       <span>Vehicules</span>
                    </div>
                </nuxt-link>

                <nuxt-link to="/dashboard/Agence/passagers" style="text-decoration:none">
                    <div class="hmenu">
                       <i class="icons mdi mdi-car-child-seat"></i>
                       <span>Passagers</span>
                    </div>
                </nuxt-link>

                <nuxt-link to="" style="text-decoration:none">
                    <div class="hmenu">
                       <i class="icons mdi mdi-account-arrow-left-outline"></i>
                       <span>Remises</span>
                    </div>
                </nuxt-link>

                <nuxt-link to="" style="text-decoration:none">
                    <div class="hmenu">
                       <i class="icons mdi mdi-chart-bell-curve"></i>
                       <span>Analyse de l'activit&eacute;</span>
                    </div>
                </nuxt-link>

                <nuxt-link to="" style="text-decoration:none">
                    <div class="hmenu">
                       <i class="icons mdi mdi-account-supervisor"></i>
                       <span>Agents</span>
                    </div>
                </nuxt-link>

                <nuxt-link to="" style="text-decoration:none">
                    <div class="hmenu">
                       <i class="icons mdi mdi-cog"></i>
                       <span>Reglages</span>
                    </div>
                </nuxt-link>

            </div>
        </div>

        <div class="mright">
            <div class="bshadow box-content box-right">
                <Nuxt/>
            </div>
        </div>

    </div>

  </div>
</template>

<script>
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";
import Toast from "primevue/toast";
import Button from "primevue/button";
export default {
  components: { Menu, Button, Avatar, Toast },
  name:'dashboard',
  data() {
    return {
      items: [
        {
          label: "Edit mon profil",
          icon: "pi pi-user",
          command: () => {},
        },
        {
          label: "Vous etes : Agent",
          icon: "pi pi-user",
          command: () => {  },
        },
        {
          label: "Deconnexion",
          icon: "pi pi-lock",
          command: () => {  },
        },
      ],
    };
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
    save() {
      this.$toast.add({
        severity: "success",
        summary: "Success",
        detail: "Data Saved",
        life: 3000,
      });
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400&display=swap');
body {
  margin: 0;
  padding: 0;
  font-family: 'Ubuntu' !important;
  background-color: rgba(244, 244, 245, 0.274);
  overflow: hidden;
}
.hheader {
    position: fixed;
    width: 100%;
    top:0;
    left:0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  background-color: white;
  justify-content: space-between;
  padding: 15px;
  height: 60px;
 background: #1565C0;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #1565C0, #1565C0);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #1565C0, #04095390); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  
}

.bshadow {
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.02),
    0 0px 0 1px rgba(10, 10, 10, 0.002);
}
.fsmall {
  font-size: 13px;
  font-weight: 300;
  font-family: 'Ubuntu' !important;
  color: white;
  white-space: nowrap;
}
.logo-avatar {
  position: relative;
  height: 35px;
  margin: 0;
  border-radius: 10px;
}

.main-content {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 70px;
}
.mleft {
    width: 25%;
    max-width: 100%;
    padding: 10px;
    background-color: white;
    
}

.mright {
    width: 72%;
    max-width: 100%;
    /* padding: 10px; */
    background-color: white;
    margin-left:20px;
}
.box-content {
    padding: 20px;
     height: 90vh;
    overflow-y: scroll;
     direction: rtl;
    background-color: white;
    border-radius: 5px;
    padding-bottom: 80px;
}
.box-content > * {
    direction: ltr;
}
	
	/* customize scrollbar css */
	.box-content::-webkit-scrollbar{
		width:10px;
		background-color:#ffffff;
	}
	.box-content::-webkit-scrollbar:horizontal{
		height:12px;
	}
	.box-content::-webkit-scrollbar-track{
		border:1px #ffffff solid;
		border-radius:10px;
		-webkit-box-shadow:0 0 6px #efe9e9b6 inset;
	}
	.box-content::-webkit-scrollbar-thumb{
		background-color:rgba(12, 9, 9, 0.148);
		border:1px solid #fff;
		border-radius:10px;
	}
	.box-content::-webkit-scrollbar-thumb:hover{
		background-color:rgba(12, 9, 9, 0.148);;
		border:1px solid #ffffff;
	}
	.box-content::-webkit-scrollbar-thumb:active{
		background-color:rgba(12, 9, 9, 0.148);;
		border:1px solid #ffffff;
	}

.hmenu {
    color: rgb(7, 30, 74);
    padding: 5px;
    font-size: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    white-space: nowrap;
}
.p-menuitem-text {
    font-size: 15px;
}

.hmenu > span {
    padding-left: 5px;
    white-space: nowrap;

}


.hmenu:hover {
    background-color: rgba(11, 45, 109, 0.08);
    color: black;
    border-radius: 4px;
    transition: all .4s ease-in;
}
.logo {
  background-color: rgba(255, 255, 255, 0.993);
  border-radius: 3px ;
  padding: 7px;
  padding-left: 15px;
  padding-right: 15px;
}
.box-right {
    direction: ltr;
    padding: 0;
}
.box-right > * {
    direction: ltr;
}
* {
  font-family: 'Ubuntu';
}

/* customize scrollbar css */
	::-webkit-scrollbar{
		width:10px;
		background-color:#ffffff;
	}
	::-webkit-scrollbar:horizontal{
		height:12px;
	}
	::-webkit-scrollbar-track{
		border:1px #ffffff solid;
		border-radius:10px;
		-webkit-box-shadow:0 0 6px #efe9e9b6 inset;
	}
	::-webkit-scrollbar-thumb{
		background-color:rgba(12, 9, 9, 0.148);
		border:1px solid #fff;
		border-radius:10px;
	}
	::-webkit-scrollbar-thumb:hover{
		background-color:rgba(12, 9, 9, 0.148);;
		border:1px solid #ffffff;
	}
	::-webkit-scrollbar-thumb:active{
		background-color:rgba(12, 9, 9, 0.148);;
		border:1px solid #ffffff;
	}
.p-inputtext,
.p-autocomplete,
.p-password,
.p-button {
  height: 45px;
}
</style>
