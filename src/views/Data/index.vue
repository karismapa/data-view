<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <ChartAccess />
      </v-col>
      <v-col cols="4">
        <ChartUsage />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <ChartActive />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ChartActive from "./ChartActive.vue"
import ChartAccess from "./ChartAccess.vue"
import ChartUsage from "./ChartUsage.vue"

export default {
  components: {
    ChartActive,
    ChartAccess,
    ChartUsage
  }
};
</script>
