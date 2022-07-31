<template>
  <div>
    <div class="theader">
      <div>
        <p class="htitle">Passagers</p>
        <p class="subtitle">
          Liste journaliers des Passagers
        </p>
      </div>
    </div>

    <div class="chart-commande ml-4">
        <Passagers/>
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";
import Passagers from "../../../components/Passagers.vue";


export default {
  components: { Button, Passagers },
  layout(context) {
    return "dashboard";
  },
  data() {
    return {
      
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

</style>
