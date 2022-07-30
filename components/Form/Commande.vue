<template>
  <div class="">
    <div class="radio">
      <span class="radiobtn">
        <RadioButton :value="1" id="as" v-model="typeTrajet" />
        <label for="as">Aller simple</label>
      </span>
      <span class="radiobtn">
        <RadioButton :value="2" id="ar" v-model="typeTrajet" />
        <label for="ar">Aller retour</label>
      </span>
    </div>

    <div class="mt-2 flex flex-row flex-wrap gap-3">
      <div>
        <p for="Noms" class="mb-1 hsmall">Noms</p>
        <InputText type="text" id="Noms" />
      </div>

      <div>
        <p for="Prenoms" class="mb-1 hsmall">Prenoms</p>
        <InputText type="text" id="Prenoms" />
      </div>

      <div>
        <p for="Telephone" class="mb-1 hsmall">Telephone</p>
        <InputText type="text" id="Telephone" />
      </div>

      <div>
        <p for="Sexe" class="mb-1 hsmall">Sexe</p>
        <Dropdown
          v-model="selectedCity"
          :options="civilite"
          type="text"
          id="Sexe"
          optionLabel="name"
          optionValue="code"
        />
      </div>
    </div>

    <div class="mt-2 flex flex-row">
      <div>
        <p for="Provenance" class="mb-1 hsmall">Provenance</p>
        <AutoComplete
          id="Provenance"
          v-model="selectedCountry"
          :suggestions="filteredCountries"
          @complete="searchCountry($event)"
          :dropdown="true"
          field="name"
          forceSelection
        >
          <template #item="slotProps">
            <div class="country-item flex flex-row flex-nowrap">
              <img
                src="https://www.primefaces.org/diamond/javax.faces.resource/images/avatar/profile.jpg.xhtml;jsessionid=node0vnu6rlrmne3kv309n485vju0388174.node0?ln=demo"
                width="18"
              />
              <div class="ml-2">{{ slotProps.item.name }}</div>
            </div>
          </template>
        </AutoComplete>
      </div>
      <div class="ml-4">
        <p for="Destination" class="mb-1 hsmall">Destination</p>
        <AutoComplete
          id="Destination"
          v-model="selectedCountry"
          :suggestions="filteredCountries"
          @complete="searchCountry($event)"
          :dropdown="true"
          field="name"
          forceSelection
        >
          <template #item="slotProps">
            <div class="country-item flex flex-row flex-nowrap">
              <img
                src="https://www.primefaces.org/diamond/javax.faces.resource/images/avatar/profile.jpg.xhtml;jsessionid=node0vnu6rlrmne3kv309n485vju0388174.node0?ln=demo"
                width="18"
              />
              <div class="ml-2">{{ slotProps.item.name }}</div>
            </div>
          </template>
        </AutoComplete>
      </div>

      <div class="ml-4">
        <p for="Bus" class="mb-1 hsmall">Bus</p>
        <AutoComplete
          id="Bus"
          v-model="selectedCountry"
          :suggestions="filteredCountries"
          @complete="searchCountry($event)"
          :dropdown="true"
          field="name"
          forceSelection
        >
          <template #item="slotProps">
            <div class="country-item flex flex-row flex-nowrap">
              <img
                src="https://www.primefaces.org/diamond/javax.faces.resource/images/avatar/profile.jpg.xhtml;jsessionid=node0vnu6rlrmne3kv309n485vju0388174.node0?ln=demo"
                width="18"
              />
              <div class="hsmall px-3">4 PD</div>
              <div class="ml-2">{{ slotProps.item.name }}</div>
            </div>
          </template>
        </AutoComplete>
      </div>
    </div>

    <div class="mt-2 flex flex-row flex-wrap gap-3">
      <div>
        <p for="Depart" class="mb-1 hsmall">Date de Depart</p>
        <Calendar
          id="buttonbar"
          v-model="dateTime"
          autocomplete="on"
          dateFormat="dd-mm-yy"
          :showIcon="true"
          :showTime="true"
          :hideOnDateTimeSelect="true"
          :touchUI="true"
          :showButtonBar="true"
          
        />
      </div>

      <div v-if="typeTrajet == 2">
        <p for="Retour" class="mb-1 hsmall">Date de Retour</p>
        <Calendar
          id="buttonbar"
          v-model="dateTime"
          autocomplete="on"
          dateFormat="dd-mm-yy"
          :showIcon="true"
          :showTime="true"
          :hideOnDateTimeSelect="true"
          :touchUI="true"
          :showButtonBar="true"
        />
      </div>
    </div>

    <div class="radio mt-3">
      <span class="radiobtn">
        <RadioButton :value="1" id="ab" v-model="Bagage" />
        <label for="ab">Avec Bagages</label>
      </span>
      <span class="radiobtn">
        <RadioButton :value="2" id="sb" v-model="Bagage" />
        <label for="sb">Sans Bagages</label>
      </span>
    </div>

    <div class="mt-2 flex flex-row flex-wrap gap-3" v-if="Bagage == 1">
      <div>
        <p for="Qtite" class="mb-1 hsmall">Quantit&eacute;</p>
        <InputText type="text" id="Qtite" />
      </div>
      <div>
        <p for="Nom" class="mb-1 hsmall">Nom</p>
        <InputText type="text" id="Nom" />
      </div>

      <div>
        <p for="Description" class="mb-1 hsmall">Description</p>
        <InputText type="text" id="Description" />
      </div>
      <div>
        <p for="Fragilite" class="mb-1 hsmall">Fragilit&eacute;</p>
        <Dropdown
          v-model="Fragilite"
          :options="[
            { name: 'Est fragile', code: 'F' },
            { name: 'Non fragile', code: 'NF' },
          ]"
          type="text"
          id="Fragilite"
          optionLabel="name"
          optionValue="code"
        />
      </div>

      <div class="">
        <Button
          label="Ajouter un Bagage"
          icon="pi pi-plus"
          @click="
            BagageList.push({
              Quantite: 1,
              Nom: 'Sac Noir',
              Description: 'couleur rouge avec raillure',
              Fragilite: 'F',
            })
          "
          class="p-button-primary"
          iconPos="right"
        />
      </div>
    </div>

    <div class="mt-3 mb-5" v-if="Bagage == 1 && BagageList.length > 0">
      <DataTable :value="BagageList" responsiveLayout="scroll">
        <Column field="Quantite" header="Quantite"></Column>
        <Column field="Nom" header="Nom"></Column>
        <Column field="Description" header="Description"></Column>
        <Column field="Fragilite" header="Fragilite"> </Column>
        <Column>
          <template #body="slotProps">
            <Button
              icon="pi pi-times"
              @click="BagageList.splice(BagageList.indexOf(slotProps.data), 1)"
              class="p-button-danger"
              iconPos="right"
            />
          </template>
        </Column>
      </DataTable>
    </div>

    <div class="mt-4 mb-5">
        <p for="Note" class="mb-1 hsmall">Note</p>
        <Textarea v-model="Note" :autoResize="true" style="width:100%" rows="5" cols="30" />
    </div>

    <div class="mb-5 pb-5 mt-5 pt-4">
      <Button
        label="Enregristrez"
        icon="pi pi-check"
        class="p-button-success"
        iconPos="right"
      />
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";
import Calendar from "primevue/calendar";
import RadioButton from "primevue/radiobutton";
import AutoComplete from "primevue/autocomplete";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Row from "primevue/row";
import Textarea from 'primevue/textarea';

export default {
  components: {
    Button,
    RadioButton,
    AutoComplete,
    InputText,
    Dropdown,
    DataTable,
    Column,
    Row,
    Calendar,
    Textarea
  },
  data() {
    return {
      Note:'',
      BagageList: [],
      dateTime: null,
      typeTrajet: 1,
      Bagage: 2,
      Fragilite: null,
      selectedCountry: null,
      selectedCity: null,
      civilite: [
        { name: "Homme", code: "H" },
        { name: "Femme", code: "E" },
        { name: "Enfant", code: "EN" },
      ],
      countries: [
        { name: "Berlin", value: "Berlin" },
        { name: "Frankfurt", value: "Frankfurt" },
        { name: "Hamburg", value: "Hamburg" },
        { name: "Munich", value: "Munich" },
        { name: "Berlin", value: "Berlin" },
        { name: "Frankfurt", value: "Frankfurt" },
        { name: "Hamburg", value: "Hamburg" },
        { name: "Munich", value: "Munich" },
        { name: "Berlin", value: "Berlin" },
        { name: "Frankfurt", value: "Frankfurt" },
        { name: "Hamburg", value: "Hamburg" },
        { name: "Munich", value: "Munich" },
        { name: "Berlin", value: "Berlin" },
        { name: "Frankfurt", value: "Frankfurt" },
        { name: "Hamburg", value: "Hamburg" },
        { name: "Munich", value: "Munich" },
      ],
      filteredCountries: [],
    };
  },
  methods: {
    searchCountry(event) {
      setTimeout(() => {
        if (!event.query.trim().length) {
          this.filteredCountries = [...this.countries];
        } else {
          this.filteredCountries = this.countries.filter((country) => {
            return country.name
              .toLowerCase()
              .startsWith(event.query.toLowerCase());
          });
        }
      }, 250);
    },
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

.card-stats {
  display: flex;
  height: 100px;
  padding: 10px;
  padding-top: 20px;
  width: 100%;
  gap: 20px;
}
.card {
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  width: 30%;
  padding: 10px;
  background: #1565c0; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #1565c0,
    #1565c0
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #1565c0,
    #4b0c0a90
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.fsbig {
  font-size: 27px;
  font-weight: 600;
}
.hsmall {
  font-size: 13px;
}
.radio {
  display: flex;
  align-items: center;
  flex-direction: row;
  white-space: nowrap;
  gap: 25px;
}
.radiobtn {
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 7px;
  flex-direction: row;
  white-space: nowrap;
}
</style>
