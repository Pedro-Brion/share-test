<script setup>
import { useHead } from "@unhead/vue";
import { useSeoMeta } from "@unhead/vue";
import { toBlob } from "html-to-image";
import { ref } from "vue";
const text = ref("Teste");

const node = ref();
useHead({
  title: "KKKKKKKKKKKKKKKKKKKKKK",
  bodyAttrs: {
    style: "background: salmon; color: cyan;",
  },
});
useSeoMeta({
  // <!-- Open Graph / Facebook -->
  ogType: "website",
  ogUrl: "https://social-sharing-test.netlify.app",
  ogTitle: "Samurais - Sua equipe de desenvolvimento",
  ogDescription: "Confira minha pontuação nos simulados",
  ogImage:
    "https://social-sharing-test.netlify.app/Agrimens-logo-2-shortned.jpg?v=1",
  ogImageWidth: "1024",
  ogImageHeight: "1024",

  // <!-- Twitter -->
  twitterCard: "summary_large_image",
  twitterUrl: "https://social-sharing-test.netlify.app",
  twitterTitle: "Samurais Dev - Sua equipe de desenvolvimento",
  twitterDescription: "Confira minha pontuação nos simulados",
  twitterImage:
    "https://social-sharing-test.netlify.app/Agrimens-logo-2-shortned.jpg?v=1",
});

async function share() {
  try {
    const res = await toBlob(node.value);
    console.log(res);
    const img = new File([res], "filename.png", { type: res.type });
    console.log(img);
    navigator.share({
      text: "Aqui vai minha pontuação no simulado agrinvest, tente você também - https://social-sharing-test.netlify.app/",
    });
  } catch (err) {
    console.error(err);
  }
}
</script>

<template>
  <div class="card-test" ref="node">
    <img height="250px" src="/Agrimens-logo-2.png" alt="" />
    <div>
      <h2>Aqui vai o texto</h2>
      <p class="text">{{ text }}</p>
    </div>
  </div>
  <div class="card">
    <button type="button" @click="share">Share</button>
  </div>
  <input v-model="text" type="text" />
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

.card-test {
  display: flex;
  gap: 18px;
  padding: 12px;
  border-radius: 14px;
  border: 2px solid white;
  background-color: #3c3040;
}

.text {
  width: 250px;
  text-align: justify;
}
</style>
