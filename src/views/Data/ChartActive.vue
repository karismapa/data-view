<template>
	<v-card>
    <v-card-text>
      <p class="font-weight-light">Work Place</p>
    </v-card-text>
		<bar-chart :chart-data="datacollection" :options="datacollection.options"></bar-chart>
	</v-card>
</template>

<script>
import BarChart from './BarChart.js'

export default {
  components: {
    BarChart
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
        labels: ['Jakarta', 'Bekasi', 'Tangerang', 'Bandung', 'Semarang', 'Yogyakarta'],
        datasets: [
          {
            label: '# of Active Device',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }
        ],
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (20))
    }
  }
};
</script>