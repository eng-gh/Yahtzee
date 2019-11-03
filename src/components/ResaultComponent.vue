<template>
    <div  v-bind:id="Pid" :class="getplayercss()" v-on:click="$store.commit('ChooseResult', {Pid:Pid,Rtype:Rtype})">{{ getplayer() }} </div>
</template>

<script>
export default {
  name: "ResaultComponent",
  data() {
    return {
        Rtype:this.resaultType,
        Rid:this.resaultType+this.pId,
        Pid:this.pId,
        getplayer:()=>{
          switch (this.resaultType) {
            case 'ones': return this.$store.state.Player[this.pId].ones
            case 'twos': return this.$store.state.Player[this.pId].twos
            case 'threes': return this.$store.state.Player[this.pId].threes
            case 'fours': return this.$store.state.Player[this.pId].fours
            case 'fives': return this.$store.state.Player[this.pId].fives
            case 'sixes': return this.$store.state.Player[this.pId].sixes
            case 'threeOfAkind': return this.$store.state.Player[this.pId].threeOfAkind
            case 'fourOfAkind': return this.$store.state.Player[this.pId].fourOfAkind
            case 'fullHouse': return this.$store.state.Player[this.pId].fullHouse
            case 'smallStraight': return this.$store.state.Player[this.pId].smallStraight
            case 'largeStraight': return this.$store.state.Player[this.pId].largeStraight
            case 'chance': return this.$store.state.Player[this.pId].chance
            case 'yahtzee': return this.$store.state.Player[this.pId].yahtzee
            case 'total': return this.$store.state.Player[this.pId].total
            default: return "0"
          }
        },
        getplayercss:()=>{
          switch (this.resaultType) {
            case 'ones': return 'Resaultcss'+this.$store.state.Player[this.pId].onesChoosen
            case 'twos': return 'Resaultcss'+this.$store.state.Player[this.pId].twosChoosen
            case 'threes': return 'Resaultcss'+this.$store.state.Player[this.pId].threesChoosen
            case 'fours': return 'Resaultcss'+this.$store.state.Player[this.pId].foursChoosen
            case 'fives': return 'Resaultcss'+this.$store.state.Player[this.pId].fivesChoosen
            case 'sixes': return 'Resaultcss'+this.$store.state.Player[this.pId].sixesChoosen
            case 'threeOfAkind': return 'Resaultcss'+this.$store.state.Player[this.pId].threeOfAkindChoosen
            case 'fourOfAkind': return 'Resaultcss'+this.$store.state.Player[this.pId].fourOfAkindChoosen
            case 'fullHouse': return 'Resaultcss'+this.$store.state.Player[this.pId].fullHouseChoosen
            case 'smallStraight': return 'Resaultcss'+this.$store.state.Player[this.pId].smallStraightChoosen
            case 'largeStraight': return 'Resaultcss'+this.$store.state.Player[this.pId].largeStraightChoosen
            case 'chance': return 'Resaultcss'+this.$store.state.Player[this.pId].chanceChoosen
            case 'yahtzee': return 'Resaultcss'+this.$store.state.Player[this.pId].yahtzeeChoosen
            case 'total': return 'Resaultcss'+this.$store.state.Player[this.pId].total
            default: return "0"
          }

        }
    };
  },
  methods: {
  },
props: {
    pId: Number,
    resaultType:String

  }
};
</script>