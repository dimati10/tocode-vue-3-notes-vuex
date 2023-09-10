<template>
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" :items="getNotesFromState" />
</template>

<script>
import Form from "@/components/Notes/Form";
import List from "@/components/Notes/List";
import getNotesFromStorage from "@/utils/storage.js";

export default {
  components: { Form, List },
  data() {
    return {
      // notes: [
      //   {
      //     title: "Learn Vue 3",
      //     tags: ["work"],
      //   },
      //   {
      //     title: "Finish course",
      //     tags: ["work", "home"],
      //   },
      // ],
    };
  },
  mounted() {
    // this.getNotes();
    getNotesFromStorage('notes', this.$store, 'setNotes');
  },
  watch: {
    getNotesFromState: {
      handler(updatedList) {
        localStorage.setItem("notes", JSON.stringify(updatedList));
      },
      deep: true,
    },
  },
  methods: {
    // * get / set notes
    // getNotes() {
    //   const localNotes = localStorage.getItem("notes");
    //   if (localNotes) {
    //     // this.notes = JSON.parse(localNotes);
    //     this.$store.dispatch("setNotes", JSON.parse(localNotes));
    //   }
    // },

    // * submit note
    handleSubmit({title, tags}) {
      const note = {
        title: title,
        tags: tags,
      };
      this.$store.dispatch("setNote", note);
    },

    // * remove note
    handleRemove(index) {
      this.$store.dispatch("removeNote", index);
    },
  },

  computed: {
    getNotesFromState() {
      return this.$store.getters.getNotesFromState;
    },
  },
};
</script>