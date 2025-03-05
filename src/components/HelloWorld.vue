<script setup>
import { ref } from "vue";
const count = ref(0);

async function share() {
  try {
    const res = await fetch("/Agrimens-logo-2.png");
    const blob = await res.blob();
    console.log(blob);
    const file = new File(
      [blob],
      `${blob.type.split("/")[0]}.${blob.type.split("/")[1]}`,
      { type: blob.type }
    );
    navigator.share({
      title: "Test",
      text: "Aqui vai minha pontuação no simulado agrinvest, tente você também",
      url: "/teste/?text=test",
      files: [file],
    });
  } catch (err) {
    error.value = err;
    console.error(err);
  }
}
</script>

<template>
  <img height="250px" src="/Agrimens-logo-2.png" alt="" />
  <div class="card">
    <button type="button" @click="share">Share</button>
  </div>
</template>

<style scoped>
img {
  border-radius: 15px;
  border: 2px solid transparent;
  transition: border-color 0.25s;
}
img:hover {
  border-color: #646cff;
}
</style>
