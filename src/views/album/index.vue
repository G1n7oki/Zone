<template>
  <div class="album">
    <el-card>
      <el-button type="primary" @click="createAlbum">创建相册</el-button>
      <!-- Album list -->
      <ul class="album-list">
        <li
            v-for="item in 10"
            :key="item"
            class="album-list-item"
            @click="routerJump(item)"
        >
          <el-image
              fit="cover"
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa2.att.hudong.com%2F27%2F81%2F01200000194677136358818023076.jpg&refer=http%3A%2F%2Fa2.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613530400&t=a277a71f0d5180090cd024441b08c09d"
              style="width: 139px; height: 129px"
          >
            <div slot="placeholder" class="image-slot">
             <i class="el-icon-loading" />
            </div>
          </el-image>
          <div class="number-wrapper">
            <div class="content">10</div>
          </div>
          <div class="describe-dropdown">
            <div class="describe">相册描述相册描述相册描述相册描述相册描述</div>
            <div class="dropdown">
              <el-dropdown @command="handleCommand($event, 1)">
              <span class="el-dropdown-link">
                <i class="el-icon-setting dropdown-setting" />
              </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="update">
                    <i class="el-icon-edit" />
                    编辑
                  </el-dropdown-item>
                  <el-dropdown-item command="delete">
                    <i class="el-icon-delete" />
                    删除
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </li>
      </ul>
      <!-- /Album list -->
      <Pagination />
    </el-card>
    <!-- Dialog -->
    <el-dialog
        :title="title"
        :visible.sync="dialogVisible"
    >
      <el-form
        :model="form"
        :rules="rules"
        label-width="80px"
      >
        <el-form-item label="相册名称" prop="name">
          <el-input size="small" />
        </el-form-item>
        <el-form-item label="相册描述">
          <el-input size="small" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSave">保存</el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- /Dialog -->
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
export default {
  name: 'album',
  components: {
    Pagination
  },
  data() {
    return {
      form: {},
      rules: {
        name: [{ require: true, message: '相册名称不能为空', trigger: 'blur' }]
      },
      dialogVisible: false,
      title: '',
      titleMap: ['创建相册', '编辑相册']
    }
  },
  methods: {
    createAlbum() {
      this.title = this.titleMap[0]
      this.dialogVisible = true
    },
    handleCommand(type, raw) {
      console.log(type)
      console.log(raw)
      switch (type) {
        case 'update': this.updateAlbum()
          break
        case 'delete': this.deleteAlbum()
          break
        default:
          break
      }
    },
    updateAlbum() {
      this.title = this.titleMap[1]
      this.dialogVisible = true
    },
    deleteAlbum() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {

      }).catch(() => {})
    },
    handleSave() {},
    routerJump(id) {
      this.$router.push({ path: '/picture', query: { id } })
    }
  }
}
</script>

<style lang="scss" scoped>
.album-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
}
.album-list-item {
  position: relative;
  padding: 10px;
  border-radius: 4px;
  background-color: #2e2e2e;
  margin-bottom: 30px;
  margin-right: 30px;

  .number-wrapper {
    width: 139px;
    height: 129px;
    background-color: rgba(0, 0, 0, .3);
    position: absolute;
    right: 10px;
    top: 10px;

    .content {
      position: absolute;
      color: #fff;
      font-size: 26px;
      right: 10px;
      bottom: 10px;
    }
  }

  .describe-dropdown {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    .describe {
      width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
      color: #A6A6A6;
    }

    .dropdown-setting {
      font-size: 14px;
      color: #A6A6A6;
    }
  }
}
</style>
