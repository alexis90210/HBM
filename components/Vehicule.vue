<template>
  <div>
    <Toolbar class="mb-4">
      <template #start>
        <Button
          label="Nouveau"
          @click="$router.push('/dashboard/Agence/nouveau-vehicule')"
          icon="pi pi-plus"
          class="p-button-success mr-2"
        />
      </template>

      <template #end>
        <FileUpload
          mode="basic"
          accept=".xls"
          :maxFileSize="1000000"
          label="Import"
          chooseLabel="Importer Excel"
          class="mr-2 inline-block"
        />
      </template>
    </Toolbar>

    <div class="table-header flex flex-column flex-row mb-4">
      <span class="p-input-icon-left">
        <i class="pi pi-search"></i>
        <InputText
          placeholder="Cherchez un vehicule"
          v-model="searchkey"
          @input="searchIt"
        />
      </span>
    </div>
    <DataTable
      v-if="searchkey != ''"
      :paginator="true"
      ref="Vehicules"
      :selection="selectedVehicule"
      :rows="10"
      :value="vehiculeFiltered"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[5, 10, 25]"
      currentPageReportTemplate="Vehicule {first} / {last} sur {totalRecords} Vehicule"
      responsiveLayout="scroll"
    >
      <template #header>
        <div class="flex flex-row justify-content-between">
          <p>Resultat de la recherche</p>

          <Button
            label="Exporter en CSV"
            class="p-button-warning text-white"
            @click="$refs.Vehicules.exportCSV()"
          ></Button>
        </div>
      </template>
     <Column field="Code" header="Code"> </Column>
      <Column field="Titre" header="Titre"> </Column>
      <Column field="Capacite" header="Capacite"> </Column>
      <Column field="Type" header="Type"> </Column>
    </DataTable>

    <DataTable
      v-else
      :paginator="true"
      ref="Vehicules"
      :selection="selectedVehicule"
      :rows="10"
      :value="Vehicules"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[5, 10, 25]"
      currentPageReportTemplate="Vehicules {first} / {last} sur {totalRecords} Vehicules"
      responsiveLayout="scroll"
    >
      <template #header>
        <div class="flex flex-row justify-content-end">
          <Button
            label="Exporter en CSV"
            class="p-button-warning text-white"
            @click="$refs.Vehicules.exportCSV()"
          ></Button>
        </div>
      </template>

      <Column field="Code" header="Code"> </Column>
      <Column field="Titre" header="Titre"> </Column>
      <Column field="Capacite" header="Capacite"> </Column>
      <Column field="Type" header="Type"> </Column>
    </DataTable>

 
    <Dialog
      header="Importation excel"
      :visible="displayModalImportVehicules"
      :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
      :style="{ width: '50vw' }"
      :modal="true"
    >
      <DataTable
        :paginator="true"
        ref="Vehicules"
        :rows="10"
        :value="Vehicules"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Vehicules {first} / {last} sur {totalRecords} Vehicules"
        responsiveLayout="scroll"
      >

         
        <Column field="Code" header="Code"> </Column>
      <Column field="Titre" header="Titre"> </Column>
      <Column field="Capacite" header="Capacite"> </Column>
      <Column field="Type" header="Type"> </Column>
      </DataTable>

      <template #footer>
        <Button
          label="Fermer"
          icon="pi pi-times"
          @click="displayModalImportVehicules = false"
          autofocus
        />
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
import FileUpload from "primevue/fileupload";
import Toolbar from "primevue/toolbar";
import Dialog from 'primevue/dialog';
import Dropdown from "primevue/dropdown";
import Textarea from 'primevue/textarea';
import AutoComplete from "primevue/autocomplete";
import Calendar from "primevue/calendar";

export default {
  components: {
    DataTable,
    Textarea,
    AutoComplete,
    Calendar,
    Dropdown,
    Dialog,
    Toolbar,
    FileUpload,
    Column,
    Row,
    InputText,
    Button,
  },
  data() {
    return {
      dateTime:null,
      selectedVehicule: [],
      searchkey: "",
      vehiculeFiltered: [],
      displayModalImportVehicules: false,
      displayModalEnregVehicules: false,
      Vehicules: [
        {
          Code: "TN123",  
          Titre: "16 places",
          Capacite: "Brazzavile",
          Type:'Siege'
        }
      ],
    };
  },
  methods: {
    searchIt() {
      this.vehiculeFiltered = this.Vehicules.filter(
        (item) =>
          item.Titre.toLowerCase().indexOf(this.searchkey.toLowerCase()) > -1
      );
      console.log(this.vehiculeFiltered);
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
.form-modal {
    height: 50vh;
    overflow-y: scroll;
}
</style>
