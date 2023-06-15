<template>
  <div>
    <el-form ref="registerForm" :model="registerform" :rules="rules" label-width="80px"  class="register-box">
      <h3 class="register-title">注册用户</h3>
      <el-form-item label="账号" prop="userName">
        <el-input type="text" placeholder="请输入账号" v-model="registerform.userName"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="registerform.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="logining" v-on:click="onSubmit()">注册</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
import { register } from '@/api'

export default{
  data() {
    return {
      logining: false,
      registerform: {
        userName: '',
        password: ''
      },
      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        userName: [
          {required: true, message: '账号不可为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不可为空', trigger: 'blur'}
        ]
      },
    }
  },
  methods: {
    onSubmit() {
      // 为表单绑定验证功能
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          this.logining=true
          let _this = this
          if (_this.logining == true) {
            register({ ...this.registerform }).then(res => {
              _this.logining=false
              if (res.code == -1) {
                _this.$message.error('用户名已存在');
              }
              if (res.code == '00000') {
                _this.$message({
                  message: '恭喜你，注册成功',
                  type: 'success'
                });
              //  localStorage.setItem('login',JSON.stringify(res.data.data));
                _this.$router.push({path:'/login'})
              }
            })
          }
        }
      });
    }
  }
}

</script>

<style>
.register-box {
  border: 1px solid #DCDFE6;
  width: 350px;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}
.register-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}
</style>
