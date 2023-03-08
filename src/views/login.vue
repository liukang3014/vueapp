<template>
  <!-- 登陆页面 -->
  <div class="login">
    <div id="cont">
      <h1>用户登陆</h1>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="auto"
        class="demo-ruleForm"
      >
        <el-form-item label="账户" prop="username">
          <el-input
            type=""
            v-model="ruleForm.username"
            autocomplete="off"
            prefix-icon="el-icon-user"
            placeholder="输入账号"
            maxlength="12"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="ruleForm.password"
            autocomplete="off"
            prefix-icon="el-icon-view"
            placeholder="输入密码"
            maxlength="16"
            type="password"
          ></el-input>
        </el-form-item>

        <el-form-item label="验证码">
          <div class="cont-div">
            <el-form-item prop="code">
              <el-input
                placeholder="输入验证码"
                prefix-icon="el-icon-link"
                v-model.number="ruleForm.code"
                maxlength="4"
              ></el-input>
            </el-form-item>

            <div class="block">
              <el-image
                style="width: 100px; height: 37px"
                :src="url"
                @click="imagefn"
              ></el-image>
            </div>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
/* 引用UUID包 */
import { v4 as uuidv4 } from "uuid";
// console.log(uuidv4());
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      //账户
      if (!/^[^0-9]\w{5,12}$/.test(value) || value == "") {
        callback("账号格式错误");
      } else {
        callback();
      }
    };
    //密码
    var validatePass2 = (rule, value, callback) => {
      if (/^[^0-9]\w{5,12}$/.test(value)) {
        callback();
      } else if (value == "") {
        callback(new Error("密码不能为空"));
      } else {
        callback(new Error("密码输入错误"));
      }
    };
    //验证码
    var checkAge = (rule, value, callback) => {
      if (!value == "") {
        callback();
      } else {
        callback(new Error("验证码格式错误"));
      }
    };
    return {
      /* 输入框内容 */
      ruleForm: {
        username: "",
        password: "",
        code: "",
      },
      rules: {
        username: [{ validator: validatePass, trigger: "blur" }],
        password: [{ validator: validatePass2, trigger: "blur" }],
        code: [{ validator: checkAge, trigger: "blur" }],
      },
      url: "",
      codeurl: "",
      times: 0,
    };
  },
  /* Vue生命周期函数 */
  created() {
    /* 调用UUID计时器 */
    this.codeurls();
    /* 设置刷新时间 */
    this.times = setInterval(() => {
      this.codeurls();
    }, 1000 * 60);
  },
  /* Vue生命周期函数 */
  beforeDestroy() {
    clearInterval(this.times);
  },
  methods: {
    /* 提交后发送POST请求 */
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http({
            url: "api/supersignin",
            method: "post",
            data: `username=${this.ruleForm.username}&password=${this.ruleForm.password}&uuid=${this.codeurl}&text=${this.ruleForm.code}`,
          })
            .then((res) => {
              this.$message({
                message: res.data.msg,
                type: "success",
              });
              this.$router.push("/login");
            })
            .catch((err) => {
              // console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    /* UUID刷新函数 */
    codeurls() {
      this.codeurl = uuidv4();
      this.url = `https://www.chengzier.cn:8000/api/generateimagecode?uuid=${this.codeurl}`;
    },
    /* 输入框清空函数 */
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    /* 点击调用UUID刷新函数 */
    imagefn() {
      this.codeurls();
    },
  },
};
</script>
<style >
#cont > .el-form-item__content {
  margin-left: 0 !important;
}
</style>
<style lang='less' scoped>
h1 {
  text-align: center;
  color: rgb(93, 143, 237);
  font-family: "楷体";
}
.login {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(https://img.zcool.cn/community/01481157b3bf640000018c1b025d2c.png@1280w_1l_2o_100sh.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
#cont {
  width: 400px;
  height: auto;
  transform: translate(-50%, 100px);
  position: absolute;
  left: 50%;
}

/* 样式修改 */
.el-form-item__content {
  margin-left: 0;
}
.blocks {
  margin: 0 auto;
}
.cont-div {
  display: flex;
  justify-content: space-between;
}
.cont-div > div {
  width: 140px;
  // height: 100%;
}
#cont > .el-input {
  background: transparent;
}
#cont {
  color: #fff !important;
}
</style>
