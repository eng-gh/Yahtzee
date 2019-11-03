<template>
 <div id="mainboard">
        <div id="ResaultTable"> 
            <table id="ResultTable1" border="1">
<tr>
    <th></th>
    <th width='50'>{{ $store.state.Player[0].name }}</th>
    <th width='50'>{{ $store.state.Player[1].name }}</th>
</tr>
<tr>
    <td>Ones</td>
    <td><ResaultComponent :resault-type="'ones'" :p-id="0"></ResaultComponent></td>
    <td><ResaultComponent :resault-type="'ones'" :p-id="1"></ResaultComponent></td>
</tr>
<tr>
    <td>Twos</td>
    <td><ResaultComponent :resault-type="'twos'" :p-id="0"></ResaultComponent></td>
    <td><ResaultComponent :resault-type="'twos'" :p-id="1"></ResaultComponent></td>
</tr>
<tr>
    <td>Threes</td>
    <td><ResaultComponent :resault-type="'threes'" :p-id="0"></ResaultComponent></td>
    <td><ResaultComponent :resault-type="'threes'" :p-id="1"></ResaultComponent></td>
</tr>
<tr>
    <td>Fours</td>
    <td><ResaultComponent :resault-type="'fours'" :p-id="0"></ResaultComponent></td>
    <td><ResaultComponent :resault-type="'fours'" :p-id="1"></ResaultComponent></td>
</tr>
<tr>
    <td>Fives</td>
    <td><ResaultComponent :resault-type="'fives'" :p-id="0"></ResaultComponent></td>
    <td><ResaultComponent :resault-type="'fives'" :p-id="1"></ResaultComponent></td>
</tr>
<tr>
    <td>Sixes</td>
    <td><ResaultComponent :resault-type="'sixes'" :p-id="0"></ResaultComponent></td>
    <td><ResaultComponent :resault-type="'sixes'" :p-id="1"></ResaultComponent></td>
</tr>
<tr>
    <th colspan="3"> </th>

</tr>
<tr>
    <td>Three of akind</td>
    <td><ResaultComponent :resault-type="'threeOfAkind'" :p-id="0"></ResaultComponent></td>
    <td><ResaultComponent :resault-type="'threeOfAkind'" :p-id="1"></ResaultComponent></td>
</tr>
<tr>
    <td>Four of a kind</td>
    <td><ResaultComponent :resault-type="'fourOfAkind'" :p-id="0"></ResaultComponent></td>
    <td><ResaultComponent :resault-type="'fourOfAkind'" :p-id="1"></ResaultComponent></td>
</tr>
<tr>
    <td>Full House</td>
    <td><ResaultComponent :resault-type="'fullHouse'" :p-id="0"></ResaultComponent></td>
    <td><ResaultComponent :resault-type="'fullHouse'" :p-id="1"></ResaultComponent></td>
</tr>
<tr>
    <td>Small Straight</td>
    <td><ResaultComponent :resault-type="'smallStraight'" :p-id="0"></ResaultComponent></td>
    <td><ResaultComponent :resault-type="'smallStraight'" :p-id="1"></ResaultComponent></td>
</tr>
<tr>
    <td>Large Straight</td>
    <td><ResaultComponent :resault-type="'largeStraight'" :p-id="0"></ResaultComponent></td>
    <td><ResaultComponent :resault-type="'largeStraight'" :p-id="1"></ResaultComponent></td>
</tr>
<tr>
    <td>Chance</td>
    <td><ResaultComponent :resault-type="'chance'" :p-id="0"></ResaultComponent></td>
    <td><ResaultComponent :resault-type="'chance'" :p-id="1"></ResaultComponent></td>
</tr>
<tr>
    <td>Yahtzee</td>
    <td><ResaultComponent :resault-type="'yahtzee'" :p-id="0"></ResaultComponent></td>
    <td><ResaultComponent :resault-type="'yahtzee'" :p-id="1"></ResaultComponent></td>
</tr>
<tr>
    <th>Total Score</th>
    <th><ResaultComponent :resault-type="'total'" :p-id="0"></ResaultComponent></th>
    <th><ResaultComponent :resault-type="'total'" :p-id="1"></ResaultComponent></th>
</tr>
</table>

        </div>
        <div id="player1board">

                <AvatarDiv id="player1image" :p-id="0"></AvatarDiv>
            <div id="player1table"> 
                <div class="dicecontainer"></div>
                <div class="dicecontainer"></div>
                <div class="dicecontainer"></div>
                <div class="dicecontainer"></div>
                <div class="dicecontainer"></div>
            </div>
            <div id="player1Roll"><RollButton :b-id="0"></RollButton></div> 
            

           <dice-button v-for="(Dice,index) in $store.state.Pdice[0]" v-bind:key="'0' + index" v-bind:dice-number="Dice.number" v-bind:dice-id="index" v-bind:player-id="0">

           </dice-button>


        </div>


        <div id="player2board">
           
<AvatarDiv id="player2image" :p-id="1"></AvatarDiv>
                <div id="player2table"> 
                        <div class="dicecontainer"></div>
                        <div class="dicecontainer"></div>
                        <div class="dicecontainer"></div>
                        <div class="dicecontainer"></div>
                        <div class="dicecontainer"></div>
               
                </div>
                <div id="player2Roll">
                    <RollButton :b-id="1"></RollButton>
                </div> 
           <dice-button v-for="(Dice,index) in $store.state.Pdice[1]" v-bind:key="'1' + index" v-bind:dice-number="Dice.number" v-bind:dice-id="index" v-bind:player-id="1">

           </dice-button>


        </div>
    </div>
</template>
<script>
import DiceButton from '@/components/DiceButton.vue'
import RollButton from '@/components/RollButton.vue'
import ResaultComponent from '@/components/ResaultComponent.vue'
import AvatarDiv from '@/components/AvatarDiv.vue'
export default {
  name: 'comp',
  components: {
    DiceButton,
    RollButton,
    ResaultComponent,
    AvatarDiv
  }
}
</script>
