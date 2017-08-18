<template>
  <div>
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="红包总金额" >
        <el-col :span="5">
          <el-input v-model="form.total"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="红包类型">
        <el-col :span="5">
          <el-select v-model="form.type" placeholder="红包类型">
            <el-option label="普通红包" value="1"></el-option>
            <el-option label="裂变红包" value="2"></el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-select v-model="form.amountType" placeholder="红包金额类型">
          <el-option label="固定金额" value="1"></el-option>
          <el-option label="完全随机金额" value="2"></el-option>
          <el-option label="主金额随机（小数点后固定）" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="固定金额部分" >
        <el-col :span="5">
          <el-input v-model="form.fixedAmount"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="随机金额部分最大金额" >
        <el-col :span="5">
          <el-input v-model="form.maxAmount"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="随机金额部分最小金额" >
        <el-col :span="5">
          <el-input v-model="form.minAmount"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">设置红包</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        redPacketSet:proxy.bindServiceMethod({beanName:'helloSevice',method:'sayHi'}),
        form: {
          total:'',
          type:'',
          amountType:'',
          fixedAmount:'',
          maxAmount:'',
          minAmount:''
        }
      }
    },
    methods: {
      onSubmit() {
        this.redPacketSet(this.form)
          .then(function(json){if(json.body.result){
            alert('设置成功')
          }else {
            alert('设置失败')
          }
          })
          .fail(function() {
          errorMsg(e)
        })
      }
    }
  }
</script>

<style scoped>
  .success {
    background-color: #5FB878;
  }
</style>
