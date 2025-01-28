<template>
  <div role="button" class="btn">{{ text || "Click" }}</div>
</template>

<script setup>
const props = defineProps(["text"]);

const text = ref(props.text);
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  color: $dark_text;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0);
  padding: 1rem;
  width: fit-content;
  text-align: center;
  border-radius: 1rem;
  border: $primary 5px solid;
  box-shadow: inset 0 0 0 3px #ffffff;
  -webkit-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  box-shadow: 13px 13px 37px -3px rgba(0, 0, 0, 0.57);
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    transition: all 0.3s ease;
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background-color: $primary;
    color: $light_text;
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
}

.dark-mode {
  .btn {
    color: $light_text;

    &:hover {
      color: $dark_text;
      background-color: $primary;
      cursor: pointer;
    }
  }
}
</style>
