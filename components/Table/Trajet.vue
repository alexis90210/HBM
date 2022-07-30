<template>
  <div>
    <div class="flex flex-row justify-content-end my-3">
        <Button label="Exporter en CSV" class="p-button-primary" @click="$refs.Trajets.exportCSV()"></Button>
    </div>
    <DataTable
      :paginator="true"
      ref="Trajets"
      :rows="10"
      :value="getFiltre"
       paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
      currentPageReportTemplate="Trajets {first} / {last} sur {totalRecords} Trajets"
      responsiveLayout="scroll"
    >
      <template #header>
        <div
          class="table-header flex flex-column md:flex-row md:justiify-content-between"
        >
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText 
             v-model="filters"
            placeholder="Search..." />
          </span>
        </div>
      </template>

      <Column field="Trajet" header="Trajet"></Column>
      <Column field="Code" header="Code"></Column>
      <Column field="Vehicules" header="Vehicules"></Column>
      <Column field="Heure" header="Heure"> </Column>
      <Column field="Prix" header="Prix"> </Column>
      <Column>
        <!-- <template #body="slotProps">
          <div>
            {{ slotProps.data.Code }}
          </div>
        </template> -->
      </Column>
    </DataTable>
  </div>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Row from "primevue/row";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
export default {
  components: {
    DataTable,
    Column,
    Row,
    InputText,
    Button
  },
  data() {
    return {
      filters:'',
      trajets: [
        {
          Trajet: "Brazzaville - Pointe Noire",
          Code: "BZVPNR",
          Vehicules: "123, 435, 3567",
          Heure: "08h",
          Prix: "15000",
        },
        {
          Trajet: "Brazzaville - Pointe Noire",
          Code: "BZVPNR",
          Vehicules: "123, 435, 3567",
          Heure: "08h",
          Prix: "15000",
        },
        {
          Trajet: "Brazzaville - Pointe Noire",
          Code: "BZVPNR",
          Vehicules: "123, 435, 3567",
          Heure: "08h",
          Prix: "15000",
        },
        {
          Trajet: "Brazzaville - Pointe Noire",
          Code: "BZVPNR",
          Vehicules: "123, 435, 3567",
          Heure: "08h",
          Prix: "15000",
        },
      ],
    };
  },
  computed:{
    getFiltre() {
     this.trajets.filter( row => {
            const Trajet = row.Trajet.toString().toLowerCase()
           return Trajet.includes(this.filters.toLowerCase())
        })
        return this.trajets
    }
  },
  computed:{

  }
};
</script>

<style>
td {
    font-size: 14px;
}
</style>
