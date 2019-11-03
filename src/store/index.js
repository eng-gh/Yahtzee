import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    Pdice:[[
      {number:1,choosen:false,cssName:'dicecontainer pr11 dice1'},
      {number:2,choosen:false,cssName:'dicecontainer pr12 dice2'},
      {number:3,choosen:false,cssName:'dicecontainer pr13 dice3'},
      {number:4,choosen:false,cssName:'dicecontainer pr14 dice4'},
      {number:5,choosen:false,cssName:'dicecontainer pr15 dice5'}],
    [
      {number:1,choosen:false,cssName:'dicecontainer pr21 dice1'},
      {number:2,choosen:false,cssName:'dicecontainer pr22 dice2'},
      {number:3,choosen:false,cssName:'dicecontainer pr23 dice3'},
      {number:4,choosen:false,cssName:'dicecontainer pr24 dice4'},
      {number:5,choosen:false,cssName:'dicecontainer pr25 dice5'}
    ]],
    gamestarted:false,
    rolltimes:[0,3],
    playerTurn:[false,false],
    enabledisable:[false,true],
    Player:
    [
    {
    ones:null,
    onesChoosen:false,
    twos:null,
    twosChoosen:false,
    threes:null,
    threesChoosen:false,
    fours:null,
    foursChoosen:false,
    fives:null,
    fivesChoosen:false,
    sixes:null,
    sixesChoosen:false,
    threeOfAkind:null,
    threeOfAkindChoosen:false,
    fourOfAkind:null,
    fourOfAkindChoosen:false,
    fullHouse:null,
    fullHouseChoosen:false,
    smallStraight:null,
    smallStraightChoosen:false,
    largeStraight:null,
    largeStraightChoosen:false,
    chance:null,
    chanceChoosen:false,
    yahtzee:null,
    yahtzeeChoosen:false,
    total:0,
    name:'Player1',
    avatar:1
    }
      ,
    {
      ones:null,
      onesChoosen:false,
      twos:null,
      twosChoosen:false,
      threes:null,
      threesChoosen:false,
      fours:null,
      foursChoosen:false,
      fives:null,
      fivesChoosen:false,
      sixes:null,
      sixesChoosen:false,
      threeOfAkind:null,
      threeOfAkindChoosen:false,
      fourOfAkind:null,
      fourOfAkindChoosen:false,
      fullHouse:null,
      fullHouseChoosen:false,
      smallStraight:null,
      smallStraightChoosen:false,
      largeStraight:null,
      largeStraightChoosen:false,
      chance:null,
      chanceChoosen:false,
      yahtzee:null,
      yahtzeeChoosen:false,
      total:0,
      name:'Player2',
      avatar:2
    }
    ]
  },
  mutations: {
  
    Rolldice(state, amount) {
    
          if(amount===0)
          {
              for(let i=0;i<state.Pdice[0].length;i++)
                if(!state.Pdice[0][i].choosen)
                {
                state.Pdice[0][i].number=Math.floor(Math.random() * Math.floor(6))+1;
                state.Pdice[0][i].cssName = "dicecontainer pr1"+(i+1)+" dice"+state.Pdice[0][i].number
              }
          }
          if(amount===1)
          {
            for(let i=0;i<state.Pdice[1].length;i++)
            if(!state.Pdice[1][i].choosen)
            {
            state.Pdice[1][i].number=Math.floor(Math.random() * Math.floor(6))+1;
            state.Pdice[1][i].cssName = "dicecontainer pr2"+(i+1)+" dice"+state.Pdice[1][i].number
          }

          }
          state.rolltimes[amount]++
          //console.log(state.enabledisable, amount, typeof amount)
          if(state.rolltimes[amount]===3)
          {
            
            Vue.set(state.enabledisable, amount, true)
            let otherplayer= (amount+1)%2
            //Vue.set(state.enabledisable, otherplayer, false)
            Vue.set(state.rolltimes, otherplayer, 0)
      
          }

          Vue.set(state.playerTurn, amount, true)
        // console.log(state.enabledisable[0])
        //   console.log(state.enabledisable[1])
          
        // state.enabledisable[0]=true
        // state.enabledisable[1]=false

        //Vue.set(state.enabledisable, 0, true)
        // Vue.set(state.enabledisable, 1, false)

         /************************Customize Resault */

         let chance=0
         let ones=0
         let twos=0
         let threes=0
         let fours=0
         let fives=0
         let sixes=0

         for(let i=0;i<state.Pdice[amount].length;i++)
         {
           chance+=state.Pdice[amount][i].number

        
           if(state.Pdice[amount][i].number===1)
           ones +=1
           if(state.Pdice[amount][i].number===2)
           twos +=2
           if(state.Pdice[amount][i].number===3)
           threes +=3
           if(state.Pdice[amount][i].number===4)
           fours +=4
           if(state.Pdice[amount][i].number===5)
           fives +=5
           if(state.Pdice[amount][i].number===6)
           sixes +=6
         }
           /**************Ones */
           if(!state.Player[amount].onesChoosen)
           state.Player[amount].ones=ones
          /***************Twos */
           if(!state.Player[amount].twosChoosen)
           state.Player[amount].twos=twos
          /****************Threes */
           if(!state.Player[amount].threesChoosen)
           state.Player[amount].threes=threes
          /*****************Fours */
           if(!state.Player[amount].foursChoosen)
           state.Player[amount].fours=fours
          /*******************Fives */
           if(!state.Player[amount].fivesChoosen)
           state.Player[amount].fives=fives
          /**************Sixes */
           if(!state.Player[amount].sixesChoosen)
           state.Player[amount].sixes=sixes
          
           /***********Three Of A kind */
           if(!state.Player[amount].threeOfAkindChoosen)
           state.Player[amount].threeOfAkind=0
           if((ones>=3 || twos>=6 || threes>=9 || fours>=12 || fives>=15 || sixes>=18) && !state.Player[amount].threeOfAkindChoosen)
           state.Player[amount].threeOfAkind=chance
           
            /************* Four Of A kind*/
            if(!state.Player[amount].fourOfAkindChoosen)
            state.Player[amount].fourOfAkind=0
           if((ones>=4 || twos>=8 || threes>=12 || fours>=16 || fives>=20 || sixes>=24) && !state.Player[amount].fourOfAkindChoosen)
           state.Player[amount].fourOfAkind=chance
           /****************Yahtzee */
           if(!state.Player[amount].yahtzeeChoosen)
           state.Player[amount].yahtzee=0
           if((ones===5 || twos===10 || threes===15 || fours===20 || fives===25 || sixes===30) && !state.Player[amount].yahtzeeChoosen)
           state.Player[amount].yahtzee=50
          
           /***************Large Straight */
           if(!state.Player[amount].largeStraightChoosen)
           state.Player[amount].largeStraight=0
           if((twos===2 && threes===3 && fours===4 && fives===5)&& (sixes===6 || ones==1) && !state.Player[amount].largeStraightChoosen)
           state.Player[amount].largeStraight=40
          
           /****************Small Straight */
           if(!state.Player[amount].smallStraightChoosen)
           state.Player[amount].smallStraight=0
           if((twos===2 && threes===3 && fours===4 && fives===5)&& (sixes===6 || ones==1) && !state.Player[amount].smallStraightChoosen)
           state.Player[amount].smallStraight=30
          
           if(ones>=1 && twos>=2 && threes>=3 && fours>=4 && !state.Player[amount].smallStraightChoosen)
           state.Player[amount].smallStraight=30
          
           if(twos>=2 && threes>=3 && fours>=4 && fives>=5 && !state.Player[amount].smallStraightChoosen)
           state.Player[amount].smallStraight=30

           if(threes>=3 && fours>=4 && fives>=5 && sixes>=6 && !state.Player[amount].smallStraightChoosen)
           state.Player[amount].smallStraight=30

           /***********Full House */
           if(!state.Player[amount].fullHouseChoosen)
           state.Player[amount].fullHouse=0

           if(ones===3 && (twos===4 || threes===6 || fours===8 || fives===10 || sixes===12) && !state.Player[amount].fullHouseChoosen)
           state.Player[amount].fullHouse=25

           if(twos===6 && (ones===2 || threes===6 || fours===8 || fives===10 || sixes===12) && !state.Player[amount].fullHouseChoosen)
           state.Player[amount].fullHouse=25
           
           if(threes===9 && (ones===2 || twos===4 || fours===8 || fives===10 || sixes===12) && !state.Player[amount].fullHouseChoosen)
           state.Player[amount].fullHouse=25

           if(fours===12 && (ones===2 || threes===6 || twos===4 || fives===10 || sixes===12) && !state.Player[amount].fullHouseChoosen)
           state.Player[amount].fullHouse=25
          
           if(fives===15 && (ones===2 || threes===6 || fours===8 || twos===4 || sixes===12) && !state.Player[amount].fullHouseChoosen)
           state.Player[amount].fullHouse=25
          
           if(sixes===18 && (ones===2 || threes===6 || fours===8 || fives===10 || twos===4) && !state.Player[amount].fullHouseChoosen)
           state.Player[amount].fullHouse=25

           if(!state.Player[amount].chanceChoosen)
           state.Player[amount].chance=chance
         


         /*   if(state.Player[0].name==='Computer')
           {
            this.commit('getbigestResault',0)
           }
        */
        
    },


    Clickdice(state,PD) {
      
      let Pid=PD.Pid+1
      let Did=PD.Did+1

      if(!state.playerTurn[PD.Pid])
        return

      if(state.Pdice[PD.Pid][PD.Did].choosen)
      {
        state.Pdice[PD.Pid][PD.Did].cssName="dicecontainer pr"+Pid+Did+" dice"+state.Pdice[PD.Pid][PD.Did].number
        
        state.Pdice[PD.Pid][PD.Did].choosen=false
     }
     else
     {
      state.Pdice[PD.Pid][PD.Did].cssName="dicecontainer pr"+Pid+Did+"click dice"+state.Pdice[PD.Pid][PD.Did].number 
      state.Pdice[PD.Pid][PD.Did].choosen=true
     }
     
    },
    ChooseResult(state,PR) {
      let Pid=PR.Pid
      let Rtype=PR.Rtype


      switch(Rtype){
        case 'ones':  { if(state.Player[Pid].onesChoosen) 
                        return 
                        else state.Player[Pid].onesChoosen=true
                      }
        break
        case 'twos': { if(state.Player[Pid].twosChoosen) 
          return 
          else state.Player[Pid].twosChoosen=true
        }
        break
        case 'threes': { if(state.Player[Pid].threesChoosen) 
          return 
          else state.Player[Pid].threesChoosen=true
        }
        break
        case 'fours': { if(state.Player[Pid].foursChoosen) 
          return 
          else state.Player[Pid].foursChoosen=true
        }
        break
        case 'fives': { if(state.Player[Pid].fivesChoosen) 
          return 
          else state.Player[Pid].fivesChoosen=true
        }
        break
        case 'sixes': { if(state.Player[Pid].sixesChoosen) 
          return 
          else state.Player[Pid].sixesChoosen=true
        }
        break
        case 'threeOfAkind': { if(state.Player[Pid].threeOfAkindChoosen) 
          return 
          else state.Player[Pid].threeOfAkindChoosen=true
        }
        break
        case 'fourOfAkind': { if(state.Player[Pid].fourOfAkindChoosen) 
          return 
          else state.Player[Pid].fourOfAkindChoosen=true
        }
        break
        case 'fullHouse': { if(state.Player[Pid].fullHouseChoosen) 
          return 
          else state.Player[Pid].fullHouseChoosen=true
        }
        break
        case 'smallStraight': { if(state.Player[Pid].smallStraightChoosen) 
          return 
          else state.Player[Pid].smallStraightChoosen=true
        }
        break
        case 'largeStraight': { if(state.Player[Pid].largeStraightChoosen) 
          return 
          else state.Player[Pid].largeStraightChoosen=true
        }
        break
        case 'chance': { if(state.Player[Pid].chanceChoosen) 
          return 
          else state.Player[Pid].chanceChoosen=true
        }
        break
        case 'yahtzee': { if(state.Player[Pid].yahtzeeChoosen) 
          return 
          else state.Player[Pid].yahtzeeChoosen=true
        }
        break
      }

      /*************Reset all un choosen Resaults */
      state.Player[Pid].ones = state.Player[Pid].onesChoosen?state.Player[Pid].ones:null
      state.Player[Pid].twos = state.Player[Pid].twosChoosen?state.Player[Pid].twos:null
      state.Player[Pid].threes = state.Player[Pid].threesChoosen?state.Player[Pid].threes:null
      state.Player[Pid].fours = state.Player[Pid].foursChoosen?state.Player[Pid].fours:null
      state.Player[Pid].fives = state.Player[Pid].fivesChoosen?state.Player[Pid].fives:null
      state.Player[Pid].sixes = state.Player[Pid].sixesChoosen?state.Player[Pid].sixes:null
      state.Player[Pid].threeOfAkind = state.Player[Pid].threeOfAkindChoosen?state.Player[Pid].threeOfAkind:null
      state.Player[Pid].fourOfAkind = state.Player[Pid].fourOfAkindChoosen?state.Player[Pid].fourOfAkind:null
      state.Player[Pid].fullHouse = state.Player[Pid].fullHouseChoosen?state.Player[Pid].fullHouse:null
      state.Player[Pid].smallStraight = state.Player[Pid].smallStraightChoosen?state.Player[Pid].smallStraight:null
      state.Player[Pid].largeStraight = state.Player[Pid].largeStraightChoosen?state.Player[Pid].largeStraight:null
      state.Player[Pid].chance = state.Player[Pid].chanceChoosen?state.Player[Pid].chance:null
      state.Player[Pid].yahtzee = state.Player[Pid].yahtzeeChoosen?state.Player[Pid].yahtzee:null

      /*****************Enable the other dice Roll Button  */
      Vue.set(state.enabledisable, Pid, true)
      let otherplayer= (Pid+1)%2
      Vue.set(state.enabledisable, otherplayer, false)
      Vue.set(state.rolltimes, otherplayer, 0)
      Vue.set(state.playerTurn, Pid, false)


      /**************Return all Dices to orginal Postions */

      for(let i=0;i<state.Pdice[0].length;i++)
      {
      state.Pdice[0][i].cssName = "dicecontainer pr1"+(i+1)+" dice"+state.Pdice[0][i].number
      state.Pdice[0][i].choosen=false
      state.Pdice[1][i].cssName = "dicecontainer pr2"+(i+1)+" dice"+state.Pdice[1][i].number
      state.Pdice[1][i].choosen=false
      }


      state.Player[0].total=state.Player[0].ones+state.Player[0].twos+state.Player[0].threes+
      state.Player[0].fours+state.Player[0].fives+state.Player[0].sixes+state.Player[0].threeOfAkind+
      state.Player[0].fourOfAkind+state.Player[0].fullHouse+state.Player[0].smallStraight+
      state.Player[0].largeStraight+state.Player[0].chance+state.Player[0].yahtzee

      state.Player[1].total=state.Player[1].ones+state.Player[1].twos+state.Player[1].threes+
      state.Player[1].fours+state.Player[1].fives+state.Player[1].sixes+state.Player[1].threeOfAkind+
      state.Player[1].fourOfAkind+state.Player[1].fullHouse+state.Player[1].smallStraight+
      state.Player[1].largeStraight+state.Player[1].chance+state.Player[1].yahtzee



      ///////////////End Function
    },
    ChooseAvatar(state,PD) {
      
      let Pid=PD.Pid
      let PName=PD.PN

      state.Player[Pid].avatar=PName
    }
    
    ,

    NewGame(state)
    {
      for(let i=0;i<state.Pdice[0].length;i++)
      {
        state.Pdice[0][i].number= i+1;
        state.Pdice[0][i].choosen= false;
        state.Pdice[0][i].cssName= 'dicecontainer pr1'+(i+1)+' dice'+(i+1);
        state.Pdice[1][i].number= i+1;
        state.Pdice[1][i].choosen= false;
        state.Pdice[1][i].cssName= 'dicecontainer pr2'+(i+1)+' dice'+(i+1);
      }

      Vue.set(state.rolltimes, 0, 0)
      Vue.set(state.rolltimes, 1, 3)
      Vue.set(state.playerTurn, 0, false)
      Vue.set(state.playerTurn, 1, false)
      Vue.set(state.enabledisable, 0, false)
      Vue.set(state.enabledisable, 1, true)

      state.Player[0].ones=state.Player[0].twos=state.Player[0].threes=state.Player[0].fours=state.Player[0].fives=state.Player[0].sixes=state.Player[0].threeOfAkind=state.Player[0].fourOfAkind=
      state.Player[0].fullHouse=state.Player[0].smallStraight=state.Player[0].largeStraight=state.Player[0].chance=state.Player[0].yahtzee=null
     
      state.Player[1].ones=state.Player[1].twos=state.Player[1].threes=state.Player[1].fours=state.Player[1].fives=state.Player[1].sixes=state.Player[1].threeOfAkind=state.Player[1].fourOfAkind=
      state.Player[1].fullHouse=state.Player[1].smallStraight=state.Player[1].largeStraight=state.Player[1].chance=state.Player[1].yahtzee=null
     
      state.Player[0].onesChoosen=state.Player[0].twosChoosen=state.Player[0].threesChoosen=
      state.Player[0].foursChoosen=state.Player[0].fivesChoosen=state.Player[0].sixesChoosen=
      state.Player[0].threeOfAkindChoosen=state.Player[0].fourOfAkindChoosen=state.Player[0].fullHouseChoosen=
      state.Player[0].smallStraightChoosen=state.Player[0].largeStraightChoosen=state.Player[0].chanceChoosen=state.Player[0].yahtzeeChoosen=false

      state.Player[1].onesChoosen=state.Player[1].twosChoosen=state.Player[1].threesChoosen=
      state.Player[1].foursChoosen=state.Player[1].fivesChoosen=state.Player[1].sixesChoosen=
      state.Player[1].threeOfAkindChoosen=state.Player[1].fourOfAkindChoosen=state.Player[1].fullHouseChoosen=
      state.Player[1].smallStraightChoosen=state.Player[1].largeStraightChoosen=state.Player[1].chanceChoosen=state.Player[1].yahtzeeChoosen=false
   
      state.Player[0].total=state.Player[1].total=0


      /********************Computer auto play */
/*       if(state.Player[0].name==='Computer')
      {
        this.commit('Rolldice',0)
      } */

    }
    
  },
  actions: {
  },
  modules: {
  }
})
