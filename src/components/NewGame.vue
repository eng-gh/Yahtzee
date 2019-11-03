 <template>
   <input type="button" id="P1roll" value="Play a new game" @click="onClick" />
</template>

<script>
export default {
  name: "NewGame",
  data() {
    return {
    };
  },
  methods: {
      onClick()
      {
          this.$router.push('/yatzee')
          this.$store.commit('NewGame')
          
          
      }
  },
props: {


  }
};
</script>
 
