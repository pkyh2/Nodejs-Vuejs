<template>
  <div class="ground">
    <Header/>
    <Memo/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './Footer.vue'
import Header from './Header.vue'
import Memo from './Memo.vue'

export default {
  components: { Header, Footer, Memo },
}
</script>