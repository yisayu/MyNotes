<template>
  <div>
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="防伪码" >
        <el-col :span="5">
          <el-input v-model="form.sCode"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="查询时间段">
        <el-col :span="5">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.sTime" style="width: 100%;"></el-date-picker>
        </el-col>
      <el-col class="line text-center" :span="1" >-</el-col>
        <el-col :span="5">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.eTime" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="redPackList"
      border
      style="width: 100%">
      <el-table-column
        prop="ID"
        label="红包ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sCode"
        label="防伪码"
        width="180">
      </el-table-column>
      <el-table-column
        prop="amount"
        label="红包金额">
      </el-table-column>
      <el-table-column
        prop="billNo"
        label="订单号">
      </el-table-column>
      <el-table-column
        prop="openid"
        label="用户">
      </el-table-column>
      <el-table-column
        prop="amount"
        label="红包金额">
      </el-table-column>
      <el-table-column
        prop="remark"
        label="错误信息">
      </el-table-column>
      <el-table-column
        prop="result"
        label="发送结果">
        <template scope="scope">
          {{scope.row.tag === 0 ? '发送失败' : '发送成功'}}
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="pagination"
      @current-change="handleCurrentChange"
      :page-size="10"
      layout="total, prev, pager, next"
      :total="total">
    </el-pagination>
  </div>

</template>
<script>
  export default {
      data() {
        return {
          redPacketSearch:proxy.bindServiceMethod({beanName:'helloSevice',method:'sayHi'}),
          redPackList:[],
          total:1000,
          form: {
            sCode: '',
            sTime: '',
            eTime: '',
            pageNum:1
          }
        }
      },
    methods: {
      onSubmit() {
        this.redPacketSearch(this.form).then(function(json){
          this. redPackList = json.body
        }).fail(function(e){
          errorMsg(e)
        })
      },
      handleCurrentChange(val) {
        this.form.pageNum = val;
        this.redPacketSearch(this.form).then(function(json){
          this. redPackList = json.body
          this.total = json.body.length
        }).fail(function(e){
          errorMsg(e)
        })
      },
    }
  }
</script>

<style >
.pagination {
  margin-top: 30px;
}
</style>
