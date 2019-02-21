<template>
  <div>
    <div class="goods">
      <div class="meu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item, index) in goods" :key="index" class="menu-item">
            <span class="textborder-1px">
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        goods: [
          { name: '小笼包'},
          { name: '水饺'}
        ]
      }
    }
  }
</script>
<style lang="stylus">
  .goods
    display flex
</style>
