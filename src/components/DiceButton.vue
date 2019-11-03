<template>
    <div v-bind:class="$store.state.Pdice[Pid][Did].cssName" 
    @click="$store.commit('Clickdice',{Pid:Pid,Did:Did})">
    </div>
</template>


<script>
export default {
  name: "DiceButton",
  data() {
    return {
        cssName:'dicecontainer pr'+this.playerId+this.diceId+' dice'+this.diceNumber,
        choosen:false,
        Pid:this.playerId,
        Did:this.diceId,
        dNumber:this.diceNumber
    };
  },
  methods: {

      onClick()
      {
          if(this.choosen)
          {
         this.cssName="dicecontainer pr"+this.playerId+this.diceId+" dice"+this.diceNumber
         this.choosen=false
         }
         else
         {
           this.cssName="dicecontainer pr"+this.playerId+this.diceId+"click dice"+this.diceNumber  
           this.choosen=true
         }

      }
  },
props: {
    playerId: Number,
    diceId:Number,
    diceNumber:Number

  }
};
</script>