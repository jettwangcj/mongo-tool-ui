<template>
  <div>
    <el-form ref="loginForm" :model="loginform" :rules="rules" label-width="80px" class="login-box" >
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="userName">
        <el-input type="text" placeholder="请输入账号" v-model="loginform.userName"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="loginform.password"/>
      </el-form-item>
      <div style="text-align: center;">
        <router-link :to="{ path: '/register'}">还没有账号？去注册</router-link>
        <el-form-item>
          <el-button type="primary" :loading="logining" v-on:click="onSubmit()">登录</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
import { login } from '@/api'

export default{
  components: {

  },
  name: "Login",
  data() {
    return {
      activeName: 'first',
      logining:false,
      loginform: {
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

      // 对话框显示和隐藏
      // dialogVisible: false
    }
  },
  methods: {
    onSubmit() {
      // console.log(this.form)
      // 为表单绑定验证功能
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.logining=true
          let _this = this
          if (_this.logining == true) {
            login({ ...this.loginform }).then(function (res) {
              _this.logining=false
              if (res.code == 'B0001') {
                _this.$message.error(res.msg);
              }else if (res.code == '00000') {
                _this.$message({
                  message: '恭喜你，登录成功',
                  type: 'success'
                });
                localStorage.setItem('auth', res.data['loginAuth']);
                localStorage.setItem('userName', res.data['userName']);
                _this.$router.replace({path:'/main'})
              }
            })
          }

        }
        // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
        // this.$router.push("/main");
        // } else {

        //   // return false;
        // }
      });
    }
  }
}

</script>

<style scoped>
.login-box {
  border: 1px solid #DCDFE6;
  width: 350px;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}

.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}
</style>
