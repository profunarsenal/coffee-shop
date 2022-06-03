const links = {
  state: {
    header: {
      id: 0,
      link: "/",
      icon: "Logo.svg",
    },
    footer: {
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
  getters: {
    getHeaderLinks(state) {
      return {
        header: state.header,
        other: state.other
      }
    },
    getFooterLinks(state) {
      return {
        footer: state.footer,
        other: state.other
      }
    }
  }
}

export default links