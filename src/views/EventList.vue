<template>
  <div>
    <h1>Event for {{ user.user.name}}</h1>
    <EventCard v-for="event in event.events" :key="event.id" :event="event" />
    <template v-if="page != 1">
      <router-link :to="{ name: 'EventList', query: { page: page - 1 } }" rel="prev">Prev Page</router-link>|
    </template>
    <router-link :to="{ name: 'EventList', query: { page: page + 1 } }">Next Page</router-link>
  </div>
</template>
<script>
import EventCard from "@/components/EventCard.vue";
import { mapState } from "vuex";

export default {
  components: {
    EventCard
  },

  beforeCreate () {
    this.$store.dispatch("event/fetchEvents", {
      perPage: 3, // <-- How many items to display per page
      page: this.page // <-- What page we're on
    });
  },
  computed: {
    page() {
      // What page we're currently on
      return parseInt(this.$route.query.page) || 1;
    },
     hasNextPage() {
          return this.event.eventsTotal > this.page * this.perPage
        },
     ...mapState(['event', 'user'])
  }
};
</script>