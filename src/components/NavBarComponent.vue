<template>
  <header>
    <ul
      class="
        header
        d-flex
        justify-content-center justify-content-md-start
        flex-wrap
      "
    >
      <nav-item classLink="header__item" :link="links.header.link">
        <img
          :src="require(`@/assets/logo/${links.header.icon}`)"
          :alt="links.header.icon"
        />
      </nav-item>
      <nav-item
        classLink="header__item"
        v-for="link of links.other"
        :key="link.id"
        :link="link.link"
        :text="link.text"
      />
    </ul>
  </header>
</template>

<script>
import NavItem from "@/components/NavItem.vue";

export default {
  components: { NavItem },

  data() {
    return {
      links: {
        header: {
          id: 0,
          link: "/",
          icon: "Logo.svg",
        },
        other: [
          {
            id: 1,
            link: "/our-coffee",
            text: "Our coffee",
          },
          {
            id: 2,
            link: "/goods",
            text: "For your pleasure",
          },
          {
            id: 3,
            link: "/contacts",
            text: "Contact us",
          },
        ],
      },
    };
  },
};
</script>
