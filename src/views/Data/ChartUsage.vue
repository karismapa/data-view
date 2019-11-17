<template>
	<v-card height="100%">
    <v-card-text>
      <p class="font-weight-light">Daily Usage</p>
    </v-card-text>
    <br>
		<doughnut-chart :chart-data="datacollection"></doughnut-chart>
	</v-card>
</template>

<script>
import DoughnutChart from './DoughnutChart.js'

export default {
  components: {
    DoughnutChart
  },
  data () {
    return {
      datacollection: null
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: ['ESP8266', 'ESP32', 'Raspberry Pi'],
        datasets: [
          {
            backgroundColor: ['rgba(28, 78, 128, 0.4)', 'rgba(165, 216, 221, 0.4)', 'rgba(234, 106, 71, 0.4)'],
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50))
    }
  }
};
</script>