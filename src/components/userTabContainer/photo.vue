<template>
  <div class="photp-content">
    <div class="card" v-for="(photo, index) in photoPart" :key="index">
      <div class="title">
        <span>{{ photo.name }}</span>
        <span v-if="photo.more" class="more" @click="checkMore(index)"
          >MORE <i class="el-icon-plus"></i
        ></span>
      </div>
      <ul class="photo-list">
        <li class="photo-box" v-for="(item, idx) in photo.part" :key="idx">
          <img class="photo" :src="item.image_url" />
        </li>
        <li class="photo-box" v-for="i in 3" :key="i.id"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {},
  data() {
    return {
      photoList: []
    }
  },
  computed: {
    ...mapGetters('game', ['photoPart'])
  },
  created() {
    this.getPhoto()
  },
  mounted() {},
  methods: {
    ...mapActions('game', ['getPhoto']),
    checkMore(index) {
      this.$emit('photo')
      this.$store.commit('game/SET_ACTIVEDPHOTO', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.photp-content {
  flex: 1;
  margin-left: 30px;
  overflow: hidden;
  .card {
    background: #ffffff;
    border-radius: 3px;
    overflow: hidden;
    & + .card {
      margin-top: 30px;
    }
    .title {
      height: 68px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 32px;
      border-bottom: 1px solid #edf0f5;
      .more {
        cursor: pointer;
      }
      .el-icon-plus {
        color: #d7a746;
      }
    }
    .photo-list {
      display: flex;
      justify-content: space-between;
      padding: 28px 22px 18px;
      flex-wrap: wrap;
    }
    .photo-box {
      width: calc(20% - 20px);
      margin: 0 10px 10px;

      .photo {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &:empty {
        height: 0;
        margin-bottom: 0;
        border: none;
      }
    }
    .el-pagination {
      text-align: right;
      margin-bottom: 30px;
    }
  }
}
</style>
