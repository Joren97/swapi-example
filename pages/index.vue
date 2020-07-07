<template>
  <section>
    <b-table :data="data" :columns="columns"></b-table>
  </section>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          field: "name",
          label: "Name"
        },
        {
          field: "height",
          label: "Height"
        },
        {
          field: "mass",
          label: "Mass"
        },
        {
          field: "hair_color",
          label: "Hair color"
        }
      ]
    };
  },
  computed: {
    data() {
      return this.$store.state.people.people;
    }
  },
  async fetch({ store }) {
    await store.dispatch("people/get");
  }
};
</script>