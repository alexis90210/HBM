<template>
  <div>
    <div class="theader" >
      <div>
        <p class="htitle">Configuration des trajets</p>
        <p class="subtitle">
          Enregistrez un trajet
        </p>
      </div>
    </div>

    <div class="chart-commande ml-4">        
        <div>
            <p for="No" class="mb-1 hsmall"> #Code</p>
            <InputText class="w100"></InputText>
        </div>

        <div class="mt-2 flex flex-row flex-wrap gap-3">
        <div>
          
        <p for="De" class="mb-1 hsmall">De</p>
        <AutoComplete
          id="De"
          
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
      <div class="">
        <p for="A" class="mb-1 hsmall">A</p>
        <AutoComplete
          id="A"
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
    </div>

    <div class="mt-2 flex flex-row flex-wrap gap-3">
       <div>
        <p for="Depart" class="mb-1 hsmall">Heure debut</p>
        <Calendar
          id="buttonbar"
          v-model="dateTime"
          autocomplete="on"
          :showIcon="true"
           :showTime="true" 
           :showSeconds="true"
          :hideOnDateTimeSelect="true"
          :touchUI="true"
          :showButtonBar="true"
          :timeOnly="true"
          
        />
      </div>
       <div>
        <p for="Arrivee" class="mb-1 hsmall">Heure Arrivee</p>
        <Calendar
          id="buttonbar"
          v-model="dateTime"
          autocomplete="on"
          :showIcon="true"
           :showTime="true" 
           :showSeconds="true"
          :hideOnDateTimeSelect="true"
          :touchUI="true"
          :showButtonBar="true"
          :timeOnly="true"
          
        />
      </div>
    </div>

    <div class="mt-2 flex flex-row flex-wrap gap-3">
        <div>
          
        <p for="Vehicules" class="mb-1 hsmall">Vehicules</p>
        <AutoComplete
          id="Vehicules"
          
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
      <div class="">
        <p for="Prix" class="mb-1 hsmall">Prix</p>
        <InputText></InputText>
      </div>
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
import AutoComplete from "primevue/autocomplete";
import Calendar from "primevue/calendar";

export default {
  components: { Button , InputText, AutoComplete , Calendar},
  layout(context) {
    return "dashboard";
  },
  data() {
    return {
      selectedCountry: null,
      dateTime:null,
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
.w100 {
    width:70%
}
</style>
