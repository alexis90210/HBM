<template>
  <div>
    <!-- this.commandsFiltered  -->
    <div class="table-header flex flex-column flex-row mb-4">
      <span class="p-input-icon-left">
        <i class="pi pi-search"></i>
        <InputText
          placeholder="Cherchez une reservation"
          v-model="searchkey"
          @input="searchIt"
        />
      </span>
    </div>
    <DataTable
      v-if="commandsFiltered.length > 0 && searchkey != ''"
      :paginator="true"
      ref="Commandes"
      :rows="10"
      :value="commandsFiltered"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[5, 10, 25]"
      currentPageReportTemplate="Commandes {first} / {last} sur {totalRecords} Commandes"
      responsiveLayout="scroll"
    >
      <template #header>
        <div class="flex flex-row justify-content-between">
          <p>Resultat de la recherche</p>

          <Button
            label="Exporter en CSV"
            class="p-button-warning text-white"
            @click="$refs.Commandes.exportCSV()"
          ></Button>
        </div>
      </template>

      <Column field="Noms" header="Noms"></Column>
      <Column field="Prenoms" header="Prenoms"></Column>
      <Column field="Mobile" header="Mobile"></Column>
      <Column field="Type" header="Type"></Column>
      <Column field="Trajet" header="Trajet"> </Column>
      <Column field="Vehicule" header="Vehicule"> </Column>
      <Column field="Depart" header="Depart"> </Column>
      <Column field="Retour" header="Retour"> </Column>
      <Column field="Note" header="Note"> </Column>
      <Column field="Prix" header="Prix"> </Column>
      <Column> 
        <Button label="Bagages" class="p-button-primary"></Button>
      </Column>
    </DataTable>

    <DataTable
      v-else
      :paginator="true"
      ref="Commandes"
      :rows="10"
      :value="Commandes"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[5, 10, 25]"
      currentPageReportTemplate="Commandes {first} / {last} sur {totalRecords} Commandes"
      responsiveLayout="scroll"
    >
      <template #header>
        <div class="flex flex-row justify-content-end">
          <Button
            label="Exporter en CSV"
            class="p-button-warning text-white"
            @click="$refs.Commandes.exportCSV()"
          ></Button>
        </div>
      </template>

      <Column field="Noms" header="Noms"></Column>
      <Column field="Prenoms" header="Prenoms"></Column>
      <Column field="Mobile" header="Mobile"></Column>
      <Column field="Type" header="Type"></Column>
      <Column field="Trajet" header="Trajet"> </Column>
      <Column field="Vehicule" header="Vehicule"> </Column>
      <Column field="Depart" header="Depart"> </Column>
      <Column field="Retour" header="Retour"> </Column>
      <Column field="Note" header="Note"> </Column>
      <Column field="Prix" header="Prix"> </Column>
      <Column> 
       <template #body="slotProps">
        <div :id="slotProps.index">
           <Button label="Bagages" class="p-button-primary" @click="displayModalBagage = true"></Button>
        </div>
       </template>
      </Column>
    </DataTable>

    <Dialog header="Bagages" :visible="displayModalBagage" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '50vw'}" :modal="true">
            <DataTable
      :paginator="true"
      ref="Bagages"
      :rows="10"
      :value="Bagages"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[5, 10, 25]"
      currentPageReportTemplate="Bagages {first} / {last} sur {totalRecords} Bagages"
      responsiveLayout="scroll"
    >
    <Column field="Qtite" header="Qtite"> </Column>
    <Column field="Nom" header="Nom"> </Column>
    <Column field="Description" header="Description"> </Column>
    <Column field="Fragilite" header="Fragilite"> </Column>
    </DataTable>
            
            <template #footer>
                <Button label="Fermer" icon="pi pi-times" @click="displayModalBagage = false" autofocus />
            </template>
        </Dialog>
    
  </div>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Row from "primevue/row";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Dialog from 'primevue/dialog';


export default {
  components: {
    Dialog,
    DataTable,
    Column,
    Row,
    InputText,
    Button,
  },
  data() {
    return {
      
      searchkey: "",
      commandsFiltered: [],
      displayModalBagage:false,
      Bagages:[
        {

          Qtite: "2",
          Nom: "Sac",
          Description: "Noire",
          Fragilite: "F",
        },
      ],
      Commandes: [
        {

          Trajet: "BZVPNR",
          Noms: "Ngoyi",
          Prenoms: "Alexis",
          Mobile: "05550043",
          Type: "H",
          Vehicule: "120",
          Depart: "19/07/2022 06h00",
          Retour:  "19/07/2022 06h00",
           Note: "Personne fragile",
            Prix: "15000",
        },
        {

          Trajet: "BZVPNR",
          Noms: "LEKAKA",
          Prenoms: "Viny",
          Mobile: "05550043",
          Type: "H",
          Vehicule: "120",
          Depart: "19/07/2022 06h00",
          Retour:  "19/07/2022 06h00",
           Note: "Personne fragile",
            Prix: "15000",
        },
      ],
    };
  },
  methods: {
    searchIt() {
      this.commandsFiltered = this.Commandes.filter(
        (item) =>
          item.Noms.toLowerCase().indexOf(this.searchkey.toLowerCase()) > -1
      );
      console.log(this.commandsFiltered);
    },
   
  },
  computed: {},
};
</script>

<style>
td {
  font-size: 14px;
}
th {
  font-size: 13px;
}
</style>
