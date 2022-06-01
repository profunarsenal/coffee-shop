<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <nav-item classLink="footer__item" :link="links.header.link">
              <img
                :src="require(`@/assets/logo/${links.header.icon}`)"
                :alt="links.header.icon"
              />
            </nav-item>
            <nav-item
              classLink="footer__item"
              v-for="link of links.other"
              :key="link.id"
              :link="link.link"
              :text="link.text"
            />
          </ul>
        </div>
      </div>
      <img
        class="beanslogo"
        src="@/assets/logo/Beans_logo_dark.svg"
        alt="Beans logo"
      />
    </div>
  </footer>
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
          icon: "Logo_black.svg",
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
