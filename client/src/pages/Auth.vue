<template>
  <v-container 
  fluid
  class="auth-container d-flex align-center justify-center">
     <!-- Overlay -->
      <div class="auth-overlay"></div>
      <h1 class="netflix-logo mb-6">NETFLIX</h1>
      <v-card
        elevation="10"
        max-width="400"
        width="100%"
        class="auth-card pa-8"
      >

        <h2 class="text-white mb-6 text-center font-weight-bold">Sign In</h2>

        <v-text-field
          label="Email"
          variant="outlined"
          density="comfortable"
          class="mb-4"
          hide-details
          color="netflixRed"
        />

        <v-text-field
          label="Password"
          type="password"
          variant="outlined"
          density="comfortable"
          class="mb-6"
          hide-details
          color="netflixRed"
        />
        <v-btn
          block
          size="large"
          color="netflixRed"
          class="mb-4"
        >Sign In</v-btn>

        <div class="d-flex justify-space-between text-caption text-grey">
          <v-checkbox label="Remember me"
          density="compact"
          />
          <a href="#"
            class="text-grey text-decoration-none"
            >Need help?</a>
        </div>
        <div class="mt-8 text-grey text-caption">
          New to Netflix?
          <span class="text-white font-weight-bold cursor-pointer">Sign up now</span>
        </div>
    </v-card>
   
  </v-container>
</template>
<script></script>
<style>
  .header_text{
    color: red
  }
  .auth-container{
    min-height: 100vh;
    width: 100%;
    background-image: url(../assets/netflix-bg.jpg);
    background-size: cover;
    background-position: center;
    position: relative;
  }
  .auth-overlay{
    position:absolute;
    inset:0;
    background: rgba(0,0,0,0.6);
    z-index: 0;
  }
  .auth-card {
    z-index : 2;
    background-color: rgba(0,0,0,0.75);
    color: white;
  }
  
  .netflix-logo {
    color:#e50914;
    font-size:40px;
    font-weight: bold;
    position: absolute;
    top:20px;
    left:20px
  }
</style>
