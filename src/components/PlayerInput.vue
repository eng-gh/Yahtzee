<template>
    <input v-model="$store.state.Player[Pid].name">
</template>

<script>
export default {
  name: "PlayerInput",
  data() {
    return {
        Pid:this.pId,
    };
  },
  methods: {
  },
props: {
    pId: Number

  }
};
</script>