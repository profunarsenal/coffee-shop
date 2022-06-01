<template>
  <li :class="classLink">
    <router-link :to="link">
      {{ text }}
      <slot></slot>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    classLink: {
      required: true,
      type: String,
    },
    link: {
      required: true,
      type: String,
    },
    text: {
      required: false,
      type: String,
    },
  },
};
</script>