<template>
    <input :disabled="$store.state.enabledisable[Pid]" type="button" value="Roll Dice" v-bind:id="Bid" v-on:click="$store.commit('Rolldice', Pid)">
</template>

<script>
export default {
  name: "RollButton",
  data() {
    return {
        Bid:"P"+this.bId+"roll",
        Pid:this.bId,
    };
  },
  methods: {
  },
props: {
    bId: Number

  }
};
</script>