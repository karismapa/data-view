<template>
	<v-card>
    <v-card-text>
      <p class="font-weight-light">Access/4-hour</p>
    </v-card-text>
		<line-chart :chart-data="datacollection" :options="datacollection.options"></line-chart>
	</v-card>
</template>

<script>
import LineChart from './LineChart.js'

export default {
  components: {
    LineChart
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
      let label = ['12am', '04am', '08am', '12pm', '04pm', '08pm', '12am'], data = [[], [], []]

      for (var i=0; i<7; i++) {
        data[0].push(this.getRandomInt())
        data[1].push(this.getRandomInt())
        data[2].push(this.getRandomInt())
      }

      this.datacollection = {
        labels: label,
        datasets: [
          {
            label: 'ESP8266',
            backgroundColor: '#1c4e80',
            data: data[0],
            fill: false
          },
          {
            label: 'ESP32',
            backgroundColor: '#a5d8dd',
            data: data[1],
            fill: false
          },
          {
            label: 'Raspberry Pi',
            backgroundColor: '#ea6a47',
            data: data[2],
            fill: false
          }
        ],
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (10))
    }
  }
};
</script>