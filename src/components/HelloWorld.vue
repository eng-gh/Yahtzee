<template>
  <div class="hello">
    <div class="playercontainer">

    <fieldset class="player1container"><legend> Player1 </legend>
      <div class="playername"><PlayerInput :p-id="0"></PlayerInput></div>
      <div id="player1avatar">

        <AvatarImage :pic-name="1" :p-id="0"></AvatarImage>
        <AvatarImage :pic-name="2" :p-id="0"></AvatarImage>
        <AvatarImage :pic-name="3" :p-id="0"></AvatarImage>
        <AvatarImage :pic-name="4" :p-id="0"></AvatarImage>
        <AvatarImage :pic-name="5" :p-id="0"></AvatarImage>
        <AvatarImage :pic-name="6" :p-id="0"></AvatarImage>

      </div>
    </fieldset>


    <fieldset class="player1container"><legend> Player2 </legend>
            <div class="playername"><PlayerInput :p-id="1"></PlayerInput></div>
      <div id="player2avatar">
        <AvatarImage :pic-name="1" :p-id="1"></AvatarImage>
        <AvatarImage :pic-name="2" :p-id="1"></AvatarImage>
        <AvatarImage :pic-name="3" :p-id="1"></AvatarImage>
        <AvatarImage :pic-name="4" :p-id="1"></AvatarImage>
        <AvatarImage :pic-name="5" :p-id="1"></AvatarImage>
      </div>
      </fieldset>   
    <div class="playersubmit">
        <NewGame></NewGame>
    </div>
    </div>
  </div>
</template>

<script>

import PlayerInput from '@/components/PlayerInput.vue'
import AvatarImage from '@/components/AvatarImage.vue'
import NewGame from '@/components/NewGame.vue'

export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  methods: {},
  props: {
    msg: String
  },
    components: {
    PlayerInput,
    AvatarImage,
    NewGame
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #cd191a;
}
</style>
