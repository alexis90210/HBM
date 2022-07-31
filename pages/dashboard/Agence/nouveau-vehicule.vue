<template>
  <div>
    <div class="theader flex flex-row" style="justify-content:space-between">
      <div>
        <p class="htitle">Nouveau vehicule</p>
        <p class="subtitle">
          Enregistrement
        </p>
      </div>

      <div>
        <Button label="Retour" icon="pi pi-arrow-left" class="p-button-warning text-white" @click="$router.go(-1)"></Button>
      </div>
    </div>

    <div class="chart-commande ml-4">
        
        <div>
            <p for="Code" class="mb-1 hsmall">Code</p>
            <InputText class="w100"></InputText>
        </div>

        <div>
            <p for="Titre" class="mb-1 hsmall">Titre</p>
            <InputText class="w100"></InputText>
        </div>

        <div>
            <p for="Capacite" class="mb-1 hsmall">Capacite</p>
            <InputText class="w100"></InputText>
        </div>

        <div>
            <p for="Type" class="mb-1 hsmall">Type</p>
            <Dropdown
          v-model="Type"
          :options="[
            { name: 'Siege', code: 'S' },
            { name: 'Couchette', code: 'C' },
            { name: 'Siege + coques bébés', code: 'SCB' },
          ]"
          type="text"
          id="Type"
          optionLabel="name"
          optionValue="code"
        />
        </div>

        <div class="mt-6">
            <Button label="Enregistrez" class="p-button-primary"></Button>
        </div>


    </div>
  </div>
</template>

<script>
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";

export default {
  components: { Button , InputText, Dropdown},
  layout(context) {
    return "dashboard";
  },
  data() {
    return {
      Type:''
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
.w100 {
    width:70%
}
</style>
