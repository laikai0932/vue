<template>
    <el-dialog :visible.sync="$store.state.dailog.show" title="提示">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
</template>

<script>
export default {
  name: 'dailog'
}
</script>

<style scoped>

</style>
