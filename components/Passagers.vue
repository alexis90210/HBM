<template>
  <div>
    <!-- <client-only>
      <FullCalendar
      :selectable="true"
      @event-selected="null"
      :events="events"
      :config="{
        locale: 'fr',
      }"
    ></FullCalendar>
    </client-only> -->
    <div class="flex flex-row gap-4 mb-3">
      <div class="flex flex-column">
        <Calendar
            placeholder="Filtrer par Mois"
          id="multiple"
          v-model="monthpicker"
          selectionMode="multiple"
          :manualInput="false"
          :hideOnDateTimeSelect="true"
        />
      </div>

      <div class="flex flex-column">
        <span class="p-input-icon-left">
          <i class="pi pi-search"></i>
          <InputText
            placeholder="Cherchez un passager"
            v-model="searchkey"
            @input="searchIt"
          />
        </span>
      </div>

      <div>
        <div class="flex flex-column">
       
        </div>
      </div>
    </div>

    <DataTable
      v-if="searchkey != ''"
      :paginator="true"
      ref="Passagers"
      :selection="selectedPassager"
      :rows="10"
      :value="passagerFiltered"
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
            @click="$refs.Passagers.exportCSV()"
          ></Button>
        </div>
      </template>
      <Column field="Ticket" header="Ticket"> </Column>
      <Column field="Nom" header="Nom"> </Column>
      <Column field="Mobile" header="Mobile"> </Column>
      <Column field="Sexe" header="Sexe"> </Column>
      <Column field="Depart" header="Depart"> </Column>
      <Column field="Destination" header="Destination"> </Column>
      <Column field="Provenance" header="Provenance"> </Column>
      <Column field="Vehicule" header="Vehicule"> </Column>
    </DataTable>

    <DataTable
      v-else
      :paginator="true"
      ref="Passagers"
      :selection="selectedPassager"
      :rows="10"
      :value="Passagers"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[5, 10, 25]"
      currentPageReportTemplate="Passagers {first} / {last} sur {totalRecords} Passagers"
      responsiveLayout="scroll"
    >
      <template #header>
        <div class="flex flex-row justify-content-end">
          <Button
            label="Exporter en CSV"
            class="p-button-warning text-white"
            @click="$refs.Passagers.exportCSV()"
          ></Button>
        </div>
      </template>

      <Column field="Ticket" header="Ticket"> </Column>
      <Column field="Nom" header="Nom"> </Column>
      <Column field="Mobile" header="Mobile"> </Column>
      <Column field="Sexe" header="Sexe"> </Column>
      <Column field="Depart" header="Depart"> </Column>
      <Column field="Destination" header="Destination"> </Column>
      <Column field="Provenance" header="Provenance"> </Column>
      <Column field="Vehicule" header="Vehicule"> </Column>
    </DataTable>

    <Dialog
      header="Importation excel"
      :visible="displayModalImportPassagers"
      :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
      :style="{ width: '50vw' }"
      :modal="true"
    >
      <DataTable
        :paginator="true"
        ref="Passagers"
        :rows="10"
        :value="Passagers"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Passagers {first} / {last} sur {totalRecords} Passagers"
        responsiveLayout="scroll"
      >
        <Column field="Ticket" header="Ticket"> </Column>
        <Column field="Nom" header="Nom"> </Column>
        <Column field="Mobile" header="Mobile"> </Column>
        <Column field="Sexe" header="Sexe"> </Column>
        <Column field="Depart" header="Depart"> </Column>
        <Column field="Destination" header="Destination"> </Column>
        <Column field="Provenance" header="Provenance"> </Column>
        <Column field="Vehicule" header="Vehicule"> </Column>
      </DataTable>

      <template #footer>
        <Button
          label="Fermer"
          icon="pi pi-times"
          @click="displayModalImportPassagers = false"
          autofocus
        />
      </template>
    </Dialog>
  </div>
</template>

<script type="module">
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Row from "primevue/row";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import FileUpload from "primevue/fileupload";
import Toolbar from "primevue/toolbar";
import Dialog from "primevue/dialog";
import Dropdown from "primevue/dropdown";
import Textarea from "primevue/textarea";
import AutoComplete from "primevue/autocomplete";
import Calendar from "primevue/calendar";
// import { FullCalendar } from "vue-full-calendar";
// import "fullcalendar/dist/fullcalendar.css";
// import 'fullcalendar/dist/locale/fr'

export default {
  components: {
    DataTable,
    Textarea,
    // FullCalendar,
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
      dateTime: null,
      monthpicker: null,
      yearpicker: null,
      selectedPassager: [],
      searchkey: "",
      passagerFiltered: [],
      displayModalImportPassagers: false,
      displayModalEnregPassagers: false,
      Passagers: [
        {
          Ticket: "TN123210043",
          Nom: "Ngoyi alexis",
          Mobile: "056550778",
          Destination: "Brazzavile",
          Provenance: "Pointe Noire",
          Trajet: "BZVPNR",
          Sexe: "H",
          Vehicule: "TNR123",
          Depart: "22/06/2022 06:30",
        },
      ],

      events: [
        {
          title: "event1",
          start: "2022-01-01",
        },
        {
          title: "event2",
          start: "2022-01-05",
          end: "2022-01-07",
        },
        {
          title: "event3",
          start: "2022-01-09T12:30:00",
          allDay: false,
        },
      ],
    };
  },
  methods: {
    searchIt() {
      this.passagerFiltered = this.Passagers.filter(
        (item) =>
          item.Nom.toLowerCase().indexOf(this.searchkey.toLowerCase()) > -1
      );
      console.log(this.passagerFiltered);
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
