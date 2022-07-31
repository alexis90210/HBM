<template>
  <div>
    <div class="theader flex flex-row" style="justify-content:space-between">
      <div>
        <p class="htitle">Enregistrement d'un Bagage ou d'un Colis</p>
        <p class="subtitle">
          Enregistrez un colis
        </p>
      </div>

      <div>
        <Button label="Retour" icon="pi pi-arrow-left" class="p-button-warning text-white" @click="$router.go(-1)"></Button>
      </div>
    </div>

    <div class="chart-commande ml-4">
      <EnregistrementBagage/>
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";
import EnregistrementBagage from "../../../components/Form/EnregistrementBagage.vue"; 

export default {
  components: { Button, EnregistrementBagage },
  layout(context) {
    return "dashboard";
  },
  data() {
    return {
      
    };
  },
  methods: {
 
  },
};
</script>

<style>
.htitle {
  font-size: 18px;
  padding: 0;
  margin: 0;
}
.subtitle {
  font-size: 12px;
  padding: 0;
}
.theader {
  border-bottom: 1px solid rgba(128, 128, 128, 0.184);
  border-bottom-style: inset;
  padding: 10px;
  padding-left: 25px;
  padding-top: 25px;
}
.chart-commande {
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 30px;
}

</style>
