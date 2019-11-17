<template>
	<div class="card-setting">
		<v-card class="mx-auto">
			<v-card-title>
				Login
			</v-card-title>
			<v-card-text>
				Pressing the Log In button to proceed.
			</v-card-text>
      <br>
			<v-form>
				<v-row no-gutters>
					<v-col cols="4" offset="4">
						<v-text-field
							label="User ID"
							outlined
							clearable
							required
						></v-text-field>
					</v-col>
					<v-col cols="4" offset="4">
						<v-text-field
							label="Password"
							outlined
							clearable
							required
						></v-text-field>
					</v-col>
				</v-row>
			</v-form>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn class="primary" :to="{path:'/'}">Log In</v-btn>
			</v-card-actions>
		</v-card>
	</div>
</template>

<style>
.card-setting {
	margin: auto;
  width: 500px;
}
</style>