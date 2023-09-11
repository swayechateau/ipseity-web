<script>
export default {
  props: ['comments'],
  data: () => ({
    user: 'anno',
    avatar: '/media/image/avatar/anonymous.png'
  })
}
</script>
<template>
  <v-card class="mt-3">
    <v-list>
      <v-list-tile v-for="(item, i) in comments" :key="i" avatar>
        <v-list-tile-avatar>
          <img :src="item.avatar ? item.avatar : avatar" />
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-sub-title
            v-text="item.user ? item.user : user"
          ></v-list-tile-sub-title>
          <v-list-tile-title
            v-html="item.text"
          ></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-card-title>
      <v-spacer />
      <v-btn outline>Comment</v-btn>
    </v-card-title>
  </v-card>
</template>
