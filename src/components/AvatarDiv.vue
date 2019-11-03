<template>
    <div :class="'avatar'+$store.state.Player[Pid].avatar"></div>
</template>

<script>
export default {
  name: "AvatarDiv",
  data() {
    return {
        Pid:this.pId
    };
  },
  methods: {
  },
props: {
    pId: Number

  }
};
</script>