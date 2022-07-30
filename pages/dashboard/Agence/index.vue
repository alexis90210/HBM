<template>
  <div>
    <div class="theader">
      <div>
        <p class="htitle">Tableau de bord</p>
        <p class="subtitle">Vue globale des activit&eacute;s</p>
      </div>
    </div>
    <div class="card-stats">
        <div class="card">
            <div>
              <p class="text-white hsmall" style="margin:0; padding:0">Commande</p>
              <p class="text-white fsbig"  style="margin:0; margin-top: 8px;">1657</p>
            </div>
            <i class="mdi mdi-shield-check-outline fsbig text-white" style="opacity:.7"></i>
        </div>

        <div class="card">
            <div>
              <p class="text-white hsmall" style="margin:0; padding:0">V&eacute;hicules</p>
              <p class="text-white fsbig"  style="margin:0; margin-top: 8px;">17</p>
            </div>
            <i class="mdi mdi-train-car fsbig text-white" style="opacity:.7"></i>
        </div>

        <div class="card">
            <div>
              <p class="text-white hsmall" style="margin:0; padding:0">Trajets</p>
              <p class="text-white fsbig"  style="margin:0; margin-top: 8px;">8</p>
            </div>
            <i class="mdi mdi-layers-search-outline fsbig text-white" style="opacity:.7"></i>
        </div>

        <div class="card">
            <div>
              <p class="text-white hsmall" style="margin:0; padding:0">Agents</p>
              <p class="text-white fsbig"  style="margin:0; margin-top: 8px;">170</p>
            </div>
            <i class="mdi mdi-account-supervisor fsbig text-white" style="opacity:.7"></i>
        </div>
    </div>

   <div class="chart-commande">
     <client-only>
      <VueApexCharts
        type="line"
        height="350"
        :options="chartOptions"
        :series="series"
      ></VueApexCharts>
    </client-only>
   </div>
  </div>
</template>

<script>
import Button from "primevue/button";
import VueApexCharts from "vue-apexcharts";
export default {
  components: { Button, VueApexCharts },
  layout(context) {
    return "dashboard";
  },
  data() {
    return {
      series: [
        {
          name: "Billet",
          data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
        },
        forecastDataPoints: {
          count: 7,
        },
        stroke: {
          width: 5,
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "1/11/2000",
            "2/11/2000",
            "3/11/2000",
            "4/11/2000",
            "5/11/2000",
            "6/11/2000",
            "7/11/2000",
            "8/11/2000",
            "9/11/2000",
            "10/11/2000",
            "11/11/2000",
            "12/11/2000",
            "1/11/2001",
            "2/11/2001",
            "3/11/2001",
            "4/11/2001",
            "5/11/2001",
            "6/11/2001",
          ],
          tickAmount: 10,
          labels: {
            formatter: function (value, timestamp, opts) {
              return opts.dateFormatter(new Date(timestamp), "dd MMM");
            },
          },
        },
        title: {
          text: "Commandes",
          align: "left",
          style: {
            fontSize: "13px",
            color: "#000000aa",
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            gradientToColors: ["#FDD835"],
            shadeIntensity: 1,
            type: "horizontal",
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100],
          },
        },
        yaxis: {
          min: -10,
          max: 40,
        },
      },
    };
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
  padding:10px;
 background: #1565C0;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #1565C0, #1565C0);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #1565C0, #4b0c0a90); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  
}

.fsbig {
  font-size: 27px;
  font-weight: 600;
}
.hsmall {
  font-size: 13px;
}

</style>
