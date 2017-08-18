<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm" >
    <el-col :md="8" class="center-block">
      <el-form-item label="新密码" prop="newPass">
        <el-input type="password" v-model="ruleForm.newPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">修改密码</el-button>
      </el-form-item>
    </el-col>

  </el-form>
</template>
<script>
  export default {
      data() {
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.ruleForm2.checkPass !== '') {
              this.$refs.ruleForm2.validateField('checkPass');
            }
            callback();
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.ruleForm.pass) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
        var newPass = (rule, value, callback) => {
          if(value === '') {
            callback(new Error('请输入新密码'));
          }else if(value.length() > 16 || value.length() < 6) {
            callback(new Error('密码必须为6到16位'))
          }
        }
        return{
          passMod: proxy.bindServiceMethod({
            beanName: "helloService",
            method: "sayHi"
          }),
          ruleForm: {
            pass:'',
            checkPass:'',
            newPass:''
          },
          rules: {
            pass:[
              {validator: validatePass ,trigger:'blur'}
            ],
            checkPass: [
              {validator: validatePass2,trigger:'blur'}
            ],
            newPass: [
              {validator: newPass,trigger:'blur'}
            ]
          }
        }
      },
    methods: {
        submitForm(ruleForm) {
          this.$refs[ruleForm].validate((valid) => {
            if (valid) {
              this.passMod({})
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        }
    }
  }
</script>

<style scoped>

</style>
