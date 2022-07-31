<template>
  <div>
    <Toolbar class="mb-4">
      <template #start>
        <Button
          label="Nouveau"
          @click="$router.push('/dashboard/Agence/nouvelle-destination')"
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
          placeholder="Cherchez une destination"
          v-model="searchkey"
          @input="searchIt"
        />
      </span>
    </div>
    <DataTable
      v-if="searchkey != ''"
      :paginator="true"
      ref="Destinations"
      :selection="selectedDestination"
      :rows="10"
      :value="destinationFiltered"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[5, 10, 25]"
      currentPageReportTemplate="Bagage/Colis {first} / {last} sur {totalRecords} Bagage/Colis"
      responsiveLayout="scroll"
    >
      <template #header>
        <div class="flex flex-row justify-content-between">
          <p>Resultat de la recherche</p>

          <Button
            label="Exporter en CSV"
            class="p-button-warning text-white"
            @click="$refs.Destinations.exportCSV()"
          ></Button>
        </div>
      </template>
      <Column field="Code" header="Code"> </Column>
      <Column field="Titre" header="Titre"> </Column>
      <Column field="Ville" header="Ville"> </Column>
    </DataTable>

    <DataTable
      v-else
      :paginator="true"
      ref="Destinations"
      :selection="selectedDestination"
      :rows="10"
      :value="Destinations"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[5, 10, 25]"
      currentPageReportTemplate="Destinations {first} / {last} sur {totalRecords} Destinations"
      responsiveLayout="scroll"
    >
      <template #header>
        <div class="flex flex-row justify-content-end">
          <Button
            label="Exporter en CSV"
            class="p-button-warning text-white"
            @click="$refs.Destinations.exportCSV()"
          ></Button>
        </div>
      </template>

      <Column field="Code" header="Code"> </Column>
      <Column field="Titre" header="Titre"> </Column>
      <Column field="Ville" header="Ville"> </Column>
    </DataTable>

 
    <Dialog
      header="Importation excel"
      :visible="displayModalImportDestination"
      :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
      :style="{ width: '50vw' }"
      :modal="true"
    >
      <DataTable
        :paginator="true"
        ref="Destinations"
        :rows="10"
        :value="Destinations"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Destinations {first} / {last} sur {totalRecords} Destinations"
        responsiveLayout="scroll"
      >
        <Column field="Code" header="Code"> </Column>
      <Column field="Titre" header="Titre"> </Column>
      <Column field="Ville" header="Ville"> </Column>
      </DataTable>

      <template #footer>
        <Button
          label="Fermer"
          icon="pi pi-times"
          @click="displayModalImportDestination = false"
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
    Textarea,AutoComplete,Calendar,Dropdown,
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
      selectedDestination: [],
      searchkey: "",
      destinationFiltered: [],
      displayModalImportDestination: false,
      displayModalEnregDestination: false,
      Destinations: [
        {
          Code: "BZV",
          Titre: "Brazzavile",
          Ville: "Brazzavile"
        },
        {
            Code: "BZV",
          Titre: "Brazzavile",
          Ville: "Brazzavile"
        },
        {
            Code: "BZV",
          Titre: "Brazzavile",
          Ville: "Brazzavile"
        },
        {
            Code: "BZV",
          Titre: "Brazzavile",
          Ville: "Brazzavile"
        }
      ],
    };
  },
  methods: {
    searchIt() {
      this.destinationFiltered = this.Destinations.filter(
        (item) =>
          item.Titre.toLowerCase().indexOf(this.searchkey.toLowerCase()) > -1
      );
      console.log(this.destinationFiltered);
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
