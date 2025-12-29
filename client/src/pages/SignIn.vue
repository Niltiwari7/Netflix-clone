<template>
  <v-container
    fluid
    class="auth-container d-flex align-center justify-center px-4 px-sm-0"
  >
    <!-- Dark Overlay -->
    <div class="auth-overlay"></div>

    <!-- Netflix Logo -->
    <h1
      class="netflix-logo"
      :class="{ 'logo-mobile': smAndDown }"
    >
      NETFLIX
    </h1>

    <!-- Login Card -->
    <v-card
      elevation="10"
      max-width="400"
      width="100%"
      class="auth-card"
      :class="smAndDown ? 'pa-6' : 'pa-8'"
    >
      <h2
        class="text-white text-center font-weight-bold"
        :class="smAndDown ? 'text-h5 mb-6' : 'text-h4 mb-6'"
      >
        Sign In
      </h2>

      <!-- Email -->
      <v-text-field
        label="Email"
        variant="outlined"
        density="comfortable"
        class="mb-4"
        hide-details
        color="netflixRed"
      />

      <!-- Password -->
      <v-text-field
        label="Password"
        type="password"
        variant="outlined"
        density="comfortable"
        class="mb-6"
        hide-details
        color="netflixRed"
      />

      <!-- Login Button -->
      <v-btn
        block
        size="large"
        color="netflixRed"
        class="mb-4"
      >
        Log In
      </v-btn>

      <!-- Remember + Help -->
      <div
        class="d-flex align-center text-caption text-grey justify-space-between"
      >
        <v-checkbox
          label="Remember me"
          density="compact"
          hide-details
        />

        <a
          href="#"
          class="text-grey text-decoration-none"
          :class="smAndDown ? 'ml-3' : ''"
        >
          Need help?
        </a>
      </div>

      <!-- Signup -->
      <div class="mt-8 text-grey text-caption">
        New to Netflix?
        <span class="text-white font-weight-bold cursor-pointer">
          Sign up now
        </span>
      </div>
    </v-card>
  </v-container>
</template>

<script setup>
import { useDisplay } from 'vuetify'

const { smAndDown } = useDisplay()
</script>

<style scoped>
.auth-container {
  min-height: 100vh;
  width: 100%;
  background-image: url('../assets/netflix-bg.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  padding-top: 80px;
}

/* Overlay */
.auth-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 0;
}

/* Card */
.auth-card {
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  margin: 0 16px;
}

/* Logo */
.netflix-logo {
  color: #e50914;
  font-size: 40px;
  font-weight: bold;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 2;
}

/* Mobile Logo */
.logo-mobile {
  font-size: 28px;
  top: 12px;
  left: 12px;
}

/* Mobile adjustments */
@media (max-width: 600px) {
  .auth-container {
    background-position: center top;
    padding-top: 60px;
  }
  
  .auth-card {
    margin: 0 12px;
  }
  
  .netflix-logo {
    font-size: 24px;
    top: 16px;
    left: 16px;
  }
}
</style>
