<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/Namapembeli"
      >Add Pembeli</router-link
    >
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nama</th>
          <th scope="col">Alamat</th>
          <th scope="col">No tlp</th>
          <th scope="col">E-mail</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Clara Shintia</td>
          <td>Jakarta Utara</td>
          <td>08977575733</td>
          <td>Clara123@gmail.com</td>
          <td>
            <router-link class="btn btn-success" to="/Namabarang"
              >Edit </router-link
            >
            <button class="btn btn-danger">delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from "@/components/Slider.vue";


export default {
  name: "Home",
  components: {
    Slider,
  },
};
</script>
