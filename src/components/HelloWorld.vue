<script setup>
import { toBlob } from "html-to-image";
import { ref } from "vue";
const text = ref(
  "Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis."
);

const node = ref();

async function share() {
  try {
    const res = await toBlob(node.value);
    console.log(res);
    const img = new File([res], "filename.png", { type: res.type });
    console.log(img);
    navigator.share({
      title: "Test",
      text: "Aqui vai minha pontuação no simulado agrinvest, tente você também",
      url: "/teste/?text=test",
      files: [img],
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
