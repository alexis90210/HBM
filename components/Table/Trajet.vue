<template>
  <div>
    <!-- this.trajetsFiltered  -->
    <div class="table-header flex flex-column flex-row mb-4">
      <span class="p-input-icon-left">
        <i class="pi pi-search"></i>
        <InputText
          placeholder="Cherchez un trajet"
          v-model="searchkey"
          @input="searchIt"
        />
      </span>
    </div>
    <DataTable
      v-if="trajetsFiltered.length > 0 && searchkey != ''"
      :paginator="true"
      ref="Trajets"
      :rows="10"
      :value="trajetsFiltered"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[5, 10, 25]"
      currentPageReportTemplate="Trajets {first} / {last} sur {totalRecords} Trajets"
      responsiveLayout="scroll"
    >
      <template #header>
        <div class="flex flex-row justify-content-between">
          <p>Resultat de la recherche</p>

          <Button
            label="Exporter en CSV"
            class="p-button-warning text-white"
            @click="$refs.Trajets.exportCSV()"
          ></Button>
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

    <DataTable
      v-else
      :paginator="true"
      ref="Trajets"
      :rows="10"
      :value="trajets"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[5, 10, 25]"
      currentPageReportTemplate="Trajets {first} / {last} sur {totalRecords} Trajets"
      responsiveLayout="scroll"
    >
      <template #header>
        <div class="flex flex-row justify-content-end">
          <Button
            label="Exporter en CSV"
            class="p-button-warning text-white"
            @click="$refs.Trajets.exportCSV()"
          ></Button>
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
    Button,
  },
  data() {
    return {
      searchkey: "",
      trajetsFiltered: [],
      trajets: [
        {
          Trajet: "Brazzaville k - Pointe Noire",
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
  methods: {
    searchIt() {
      this.trajetsFiltered = this.trajets.filter(
        (item) =>
          item.Trajet.toLowerCase().indexOf(this.searchkey.toLowerCase()) > -1
      );
      console.log(this.trajetsFiltered);
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
