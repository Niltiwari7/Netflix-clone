<template>
  <div class="browse-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Stranger Things</h1>
        <p class="hero-description">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
        </p>
        <div class="hero-buttons">
          <button class="btn btn-play">▶ Play</button>
          <button class="btn btn-info">ℹ More Info</button>
        </div>
      </div>
    </div>

    <!-- Movie Categories -->
    <div class="categories">
      <div class="category">
        <h2>Trending Now</h2>
        <div class="movie-row">
          <div class="movie-card" v-for="i in 6" :key="i">
            Movie {{ i }}
          </div>
        </div>
      </div>

      <div class="category">
        <h2>Popular on Netflix</h2>
        <div class="movie-row">
          <div class="movie-card" v-for="i in 6" :key="i">
            Movie {{ i }}
          </div>
        </div>
      </div>

      <div class="category">
        <h2>Top Rated</h2>
        <div class="movie-row">
          <div class="movie-card" v-for="i in 6" :key="i">
            Movie {{ i }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrowsePage',
  data() {
    return {
      // Add your data here
    }
  }
}
</script>

<style scoped>
.browse-page {
  background-color: #141414;
  color: white;
  min-height: 100vh;
}

.hero {
  height: 80vh;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3), #141414),
              url('https://images.unsplash.com/photo-1574267432644-f74f8ec512c3?w=1920') center/cover;
  display: flex;
  align-items: center;
  padding: 0 4rem;
}

.hero-content {
  max-width: 600px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.hero-description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.4;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
}

.btn-play {
  background-color: white;
  color: black;
}

.btn-play:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

.btn-info {
  background-color: rgba(109, 109, 110, 0.7);
  color: white;
}

.btn-info:hover {
  background-color: rgba(109, 109, 110, 0.5);
}

.categories {
  padding: 2rem 4rem;
}

.category {
  margin-bottom: 3rem;
}

.category h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.movie-row {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding: 0.5rem 0;
}

.movie-card {
  min-width: 200px;
  height: 300px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s;
}

.movie-card:hover {
  transform: scale(1.05);
}

.movie-row::-webkit-scrollbar {
  height: 8px;
}

.movie-row::-webkit-scrollbar-thumb {
  background-color: #555;
  border-radius: 4px;
}
</style>