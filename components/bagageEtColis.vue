<template>
  <div>
    <Toolbar class="mb-4">
      <template #start>
        <Button
          label="Nouveau"
          @click="$router.push('/dashboard/Agence/envoie-bagage')"
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
          placeholder="Cherchez un bagage/colis"
          v-model="searchkey"
          @input="searchIt"
        />
      </span>
    </div>
    <DataTable
      v-if="bagageColisFiltered.length > 0 && searchkey != ''"
      :paginator="true"
      ref="BagageColis"
      :selection="selectedBagages"
      :rows="10"
      :value="bagageColisFiltered"
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
            @click="$refs.BagageColis.exportCSV()"
          ></Button>
        </div>
      </template>
      <Column field="Qtite" header="Qtite"> </Column>
      <Column field="Nom" header="Nom"> </Column>
      <Column field="Description" header="Description"> </Column>
      <Column field="Fragilite" header="Fragilite"> </Column>
      <Column field="Proprietaire" header="Proprietaire"></Column>
      <Column field="mobile" header="Mobile"></Column>
      <Column field="Trajet" header="Trajet"></Column>
      <Column field="Depart" header="Depart"></Column>
      <Column field="Vehicule" header="Vehicule"></Column>
      <Column field="Etat" header="Etat"></Column>
    </DataTable>

    <DataTable
      v-else
      :paginator="true"
      ref="BagageColis"
      :selection="selectedBagages"
      :rows="10"
      :value="Bagages"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[5, 10, 25]"
      currentPageReportTemplate="BagageColis {first} / {last} sur {totalRecords} BagageColis"
      responsiveLayout="scroll"
    >
      <template #header>
        <div class="flex flex-row justify-content-end">
          <Button
            label="Exporter en CSV"
            class="p-button-warning text-white"
            @click="$refs.BagageColis.exportCSV()"
          ></Button>
        </div>
      </template>

      <Column field="Qtite" header="Qtite"> </Column>
      <Column field="Nom" header="Nom"> </Column>
      <Column field="Description" header="Description"> </Column>
      <Column field="Fragilite" header="Fragilite"> </Column>
      <Column field="Proprietaire" header="Proprietaire"></Column>
      <Column field="mobile" header="Mobile"></Column>
      <Column field="Trajet" header="Trajet"></Column>
      <Column field="Depart" header="Depart"></Column>
      <Column field="Vehicule" header="Vehicule"></Column>
      <Column field="Etat" header="Etat"></Column>
    </DataTable>

 
    <Dialog
      header="Importation excel"
      :visible="displayModalImportBagage"
      :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
      :style="{ width: '50vw' }"
      :modal="true"
    >
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
        <Button
          label="Fermer"
          icon="pi pi-times"
          @click="displayModalImportBagage = false"
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
      selectedBagages: [],
      searchkey: "",
      bagageColisFiltered: [],
      displayModalImportBagage: false,
      displayModalEnregBagage: false,
      Bagages: [
        {
          Qtite: "2",
          Nom: "Lit",
          Proprietaire: "Ngoyi alexis",
          Description: "Noire",
          Fragilite: "NF",
          Trajet: "BZVPNR",
          Depart: "12/07/2022 06:07",
          Vehicule: "343",
          Etat: "Paye",
          mobile: "069500886",
        },
        {
          Qtite: "1",
          Nom: "TV",
          Description: "Ecran plat",
          Fragilite: "F",
          Proprietaire: "Ngoyi Joseph",
          Trajet: "BZVPNR",
          Depart: "12/07/2022 06:07",
          Vehicule: "343",
          Etat: "Paye",
          mobile: "069500886",
        },
        {
          Qtite: "14",
          Nom: "Pagnes",
          Description: "Blue",
          Fragilite: "NF",
          Proprietaire: "Ngoyi Junior",
          Trajet: "BZVPNR",
          Depart: "12/07/2022 06:07",
          Vehicule: "343",
          Etat: "Paye",
          mobile: "069500886",
        },
      ],
    };
  },
  methods: {
    searchIt() {
      this.bagageColisFiltered = this.Bagages.filter(
        (item) =>
          item.Nom.toLowerCase().indexOf(this.searchkey.toLowerCase()) > -1
      );
      console.log(this.bagageColisFiltered);
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
