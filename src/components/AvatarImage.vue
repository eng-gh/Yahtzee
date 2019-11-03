<template>
    <img :src="'/images/p'+PName+'.png'" alt="avatar" :class="'avatarPic '+($store.state.Player[Pid].avatar===PName)" @click="$store.commit('ChooseAvatar',{Pid:Pid,PN:PName})"/>
</template>

<script>
export default {
  name: "AvatarImage",
  data() {
    return {
        Pid:this.pId,
        PName:this.picName
      //  sel:this.Sel
    };
  },
  methods: {
  },
props: {
    pId: Number,
    picName:Number
  //  Sel:Boolean

  }
};
</script>