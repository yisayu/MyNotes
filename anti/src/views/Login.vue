<template>
  <div class="login" id="login">
      <el-row style="z-index: 1">
          <el-col :xs="0" :md="8"><div style="height: 200px;"></div></el-col>
          <el-col :xs="24" :md="8" class="center-block ">
              <div><img src="../../static/images/logo.png" alt=""></div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" id="searchForm">
                <el-form-item label="防伪码" prop="seccode">
                  <el-input v-model="ruleForm.seccode" ></el-input>
                </el-form-item>
              <el-row>
                <el-col :span="15"> <el-form-item label="验证码" prop="vercode">
                  <el-input v-model="ruleForm.vercode" ></el-input>
                </el-form-item></el-col>
                <el-col :span="9" class="ver">
                  <span @click="newCode('vcode')">{{vcode}}</span>
                </el-col>
              </el-row>
              <el-form-item label-width="0">
                <el-button @click="onSearch" class=" btn-4 search">查询</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        <el-col :md="2" style="height: 1px;"></el-col>
        <el-col :md="6">
          <button  class="btn-2 enter" @click="show = !show">企业入口 <br><span class="el-icon-arrow-down
"></span></button>
          <transition name="fade">
            <el-form :model="loginForm" :rules="login" ref="loginForm" label-width="100px" class="loginForm" v-show="show">
              <el-form-item label="企业编号" prop="compNum">
                <el-input type="text" v-model="loginForm.compNum" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="用户名" prop="compUsername">
                <el-input type="text" v-model="loginForm.compUsername" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="compPass">
                <el-input type="text" v-model="loginForm.compPass" auto-complete="off"></el-input>
              </el-form-item>
              <el-row>
                <el-col :span="15">
                  <el-form-item label="验证码" prop="compVercode" :span="12">
                    <el-input v-model="compVercode"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="9" class="ver">
                  <span @click="newCode('lcode')">{{lcode}}</span>
                </el-col>
              </el-row>
              <el-form-item label-width="0">
                <el-button type="primary" @click="onLogin" class="btn-4 search" style="margin-left: 15px;">登录</el-button>
              </el-form-item>
            </el-form>
          </transition>
        </el-col>
      </el-row>
  </div>
</template>
<script>

  /**
   * Copyright (c) 2016 hustcc
   * License: MIT
   * Version: %%GULP_INJECT_VERSION%%
   * GitHub: https://github.com/hustcc/canvas-nest.js
   **/
  import {creatNest} from '../../static/js/nest.js'
  export default {
    name: 'login',
    data() {
      var isNum = (rule,value,callback) => {
        if(isNaN(Number(value))) {
          return callback(new Error('必须为纯数字'));
        }
      }
      return {
        hello: proxy.bindServiceMethod({
          beanName: "helloService",  //服务名
          method: "sayHi"   //方法名
        }),
        show:false,
        vcode:'',
        lcode:'',
        compVercode:'',

        formLabelWidth: '120px',
        ruleForm: {
          seccode: '',
          vercode: '',
        },
        rules: {
          seccode: [
            { required: true, message: '防伪码不能为空', trigger: 'change' },
            { min: 16, max: 16, message: '防伪码为16位字符', trigger: 'change' },

          ],
          vercode: [
            { required: true, message: '防伪码不能为空', trigger: 'change' },
            { min: 5, max: 5, message: '验证码为5位字符'}
          ]
        },
      login:{
          compNum:[
            { required: true, message: '企业编号不能为空', trigger: 'change' },
            { min: 4, max: 4, message: '企业编号为4位数字'},
            { validator: isNum, trigger: 'blur' }
          ],
          compUsername:[
            { required: true, message: '用户名不能为空', trigger: 'change' },
          ],
          compPass:[
            { required: true, message: '密码不能为空', trigger: 'change' },
          ],
          compVercode:[
            { required: true, message: '验证码不能为空', trigger: 'change' },
            { min: 5, max: 5, message: '验证码为5位字符',trigger:'blur,change'}
          ]
      },
       loginForm: {
         compNum:'',
         compUsername: '',
         compPass:'',

        },
      }

    },
    methods: {
      onSearch () {
        this.$refs['ruleForm'].validate((valid) => {
          console.log('haha');
          if (valid) {
            console.log('123');
            return true;
          } else {
            console.log('error submit!!');
            return false;
          }
        });

      },
      onLogin() {
        this.$refs['loginForm'].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        if(this.lcode.toLowerCase() == this.loginForm.compVercode.toLowerCase()){

        }
      },
      newCode (codename) {
        var arrays = new Array(
          '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
          'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
          'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
          'u', 'v', 'w', 'x', 'y', 'z',
          'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
          'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
          'U', 'V', 'W', 'X', 'Y', 'Z'
        )
        if (codename == 'vcode') {
          this.vcode = ''
          // 重新初始化验证码
          // 随机从数组中获取四个元素组成验证码
          for (var i = 0; i < 5; i++) {
            // 随机获取一个数组的下标
            var r = parseInt(Math.random() * arrays.length)
            this.vcode += arrays[r]
          }
        } else {
          this.lcode = ''
          // 重新初始化验证码
          // 随机从数组中获取四个元素组成验证码
          for (var i = 0; i < 5; i++) {
            // 随机获取一个数组的下标
            var r = parseInt(Math.random() * arrays.length)
            this.lcode += arrays[r]
          }
        }
        }
      },
      mounted: function () {
        creatNest()
        this.newCode('vcode')
        this.newCode('lcode')
      },

    }
</script>
<style>
  .login {
    min-height: 100%;
    background: url("../../static/images/loginbg.jpg") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
  .login button {
    outline:none;
  }
  .login #searchForm {
    padding: 50px;
    border-radius: 5px;
  }
  .login .loginForm {
    border-radius: 3px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    background-color: rgba(10, 11, 5, 0.5);
    height:100%;
    padding: 20px;
    padding-left:0px;
  }
  .login label {
    font-size:18px;
    color: rgba(255, 242, 171,0.7);
  }
  .login input{
    border:1px solid rgba(255, 242, 171, 0.2);;
    background-color: rgba(0,0,0,0);
    height:40px;
    font-size:20px;
    color: rgba(87, 87, 87, 0.75);
  }
  .login .search {
    border:2px solid rgba(255, 242, 171, 0.5);
    color: rgba(255, 242, 171, 1);
    background-color: rgba(255, 242, 171, 0.1);
    width: 100%;
    font-size: 20px;
    line-height: 30px;
  }
  .login .enter{
    margin-top: 20px;
    border: 0px solid;
    color: rgba(255, 242, 171, 1);
    background-color: rgba(255, 242, 171, 0);
    width: 100%;
    font-size: 20px;
    line-height: 30px;
  }
  .login .ver {
    height: 40px;
    text-align: center;
  }
  .login .ver span{
    border-radius: 3px;
    display:inline-block;
    padding:0 20px;
    color: rgba(255, 215, 90, 0.44);
    font: 900 20px "Microsoft Yahei";
    line-height: 40px;
    background-color: rgba(0, 0, 0, 0.54);
    user-select: none;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0;
  }
  .login #searchForm:hover {
    transition: 1s;
    box-shadow: 0 0 10px #fff2ab;
  }
  .login .center-block {
    margin-top: 100px;
  }
  .login .center-block img{
    width: 100%;
    margin-bottom: 30px;
  }
  .login .el-form-item__label:before {
    content:''!important;
  }
</style>
