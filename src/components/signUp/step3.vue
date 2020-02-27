<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="sign-step3">
    <div class="userinfo-content step3" :class="$i18n.locale">
      <div class="sign-title">{{ $t('login.step3Title') }}</div>
      <el-form-item prop="name">
        <el-input
          v-model.trim="ruleForm.name"
          class="short-input"
          :placeholder="$t('login.placeholderName')"
        >
          <span slot="prefix">{{ $t('login.name') }}</span>
        </el-input>
      </el-form-item>
      <el-form-item prop="country">
        <el-select
          class="short-input country"
          v-model="ruleForm.country"
          :placeholder="$t('login.placeholderCountry')"
        >
          <el-option
            v-for="item in countries"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
          <span slot="prefix">{{ $t('login.country') }}</span>
        </el-select>
      </el-form-item>
      <el-form-item prop="idCard">
        <el-input
          :placeholder="$t('login.placeholderId')"
          v-model="ruleForm.idCard"
          class="input-with-select"
        >
          <el-select v-model="idType" slot="prepend">
            <el-option :label="$t('login.id')" value="1"></el-option>
            <el-option :label="$t('login.passport')" value="2"></el-option>
          </el-select>
        </el-input>
      </el-form-item>

      <div class="row-spacebetween">
        <el-form-item prop="birthday">
          <el-date-picker
            class="birthday"
            v-model="ruleForm.birthday"
            prefix-icon="1"
            type="date"
            :placeholder="$t('login.placeholderBirthday')"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item prop="gender">
          <el-select
            class="short-input gender"
            v-model="ruleForm.gender"
            :placeholder="$t('login.placeholderGender')"
          >
            <el-option :label="$t('login.male')" value="1"></el-option>
            <el-option :label="$t('login.female')" value="2"></el-option>
            <span slot="prefix">{{ $t('login.gender') }}</span>
          </el-select>
        </el-form-item>
      </div>
      <el-form-item prop="address">
        <el-cascader
          class="address"
          v-model="ruleForm.address"
          :placeholder="$t('login.placeholderAddress')"
          :props="{ value: 'code', label: 'name' }"
          :options="addressOptions"
        ></el-cascader>
      </el-form-item>
      <el-form-item prop="detailedAddress">
        <el-input
          v-model.trim="ruleForm.detailedAddress"
          :placeholder="$t('login.detailedAddress')"
        ></el-input>
      </el-form-item>
    </div>
    <div class="userinfo-content step3" :class="$i18n.locale">
      <div class="sign-title">{{ $t('login.step4Title') }}</div>
      <div class="row-spacebetween column">
        <el-form-item prop="name2">
          <el-input
            v-model.trim="ruleForm.name2"
            class="short-input"
            :placeholder="$t('login.placeholderName')"
          >
            <span slot="prefix">{{ $t('login.name') }}</span>
          </el-input>
        </el-form-item>
        <el-form-item prop="concern">
          <el-select
            class="short-input concern"
            v-model="ruleForm.concern"
            :placeholder="$t('login.placeholder')"
          >
            <el-option :label="$t('login.male')" value="1"></el-option>
            <el-option :label="$t('login.female')" value="2"></el-option>
            <span slot="prefix">{{ $t('login.concern') }}</span>
          </el-select>
        </el-form-item>
      </div>
      <el-form-item prop="phone">
        <el-input
          v-model.trim="ruleForm.phone"
          class="other-phone"
          :placeholder="$t('login.placeholderOtherPhone')"
        >
          <span slot="prefix">{{ $t('login.phone') }}</span>
        </el-input>
      </el-form-item>
      <el-form-item prop="otherAddress">
        <el-cascader
          class="address"
          v-model="ruleForm.otherAddress"
          :placeholder="$t('login.placeholderAddress')"
          :props="{ value: 'code', label: 'name' }"
          :options="addressOptions"
        ></el-cascader>
      </el-form-item>
      <el-form-item prop="detailedAddress2">
        <el-input
          v-model.trim="ruleForm.detailedAddress2"
          :placeholder="$t('login.detailedAddress')"
        ></el-input>
      </el-form-item>
    </div>
    <p class="tip">{{ $t('login.note') }}</p>
    <div class="sign-btns">
      <el-button type="primary" @click="submitForm('ruleForm')">{{ $t('login.sign') }}</el-button>
      <el-button class="blue-btn">{{ $t('login.wait') }}</el-button>
    </div>
  </el-form>
</template>

<script>
import addressOptions from '../../assets/js/address.js'
export default {
  components: {},
  data() {
    const validateIdCard = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('login.placeholderId')))
        return
      }
      callback()
    }
    const validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('login.placeholderOtherPhone')))
        return
      }
      const isPhone = /^1[3456789]\d{9}$/.test(value)
      if (!isPhone) {
        callback(new Error(this.$t('login.errPhone')))
        return
      }
      callback()
    }
    return {
      addressOptions,
      idType: this.$t('login.id'),
      countries: [
        { value: 1, label: '中国' },
        { value: 2, label: '日本' }
      ],
      ruleForm: {
        name: '',
        country: '',
        idCard: '',
        birthday: '',
        gender: '',
        address: [],
        detailedAddress: '',
        name2: '',
        concern: '',
        phone: '',
        otherAddress: [],
        detailedAddress2: ''
      },
      rules: {
        name: [{ required: true, message: this.$t('login.placeholderName'), trigger: 'blur' }],
        country: [
          { required: true, message: this.$t('login.placeholderCountry'), trigger: 'change' }
        ],
        idCard: [{ validator: validateIdCard, trigger: 'blur' }],
        birthday: [
          { required: true, message: this.$t('login.placeholderBirthday'), trigger: 'blur' }
        ],
        gender: [
          { required: true, message: this.$t('login.placeholderGender'), trigger: 'change' }
        ],
        address: [
          { required: true, message: this.$t('login.placeholderAddress'), trigger: 'change' }
        ],
        detailedAddress: [
          { required: true, message: this.$t('login.detailedAddress'), trigger: 'blur' }
        ],
        name2: [{ required: true, message: this.$t('login.placeholderName'), trigger: 'blur' }],
        concern: [{ required: true, message: this.$t('login.placeholder'), trigger: 'change' }],
        phone: [{ validator: validatePhone, trigger: 'blur' }],
        otherAddress: [
          { required: true, message: this.$t('login.placeholderAddress'), trigger: 'change' }
        ],
        detailedAddress2: [
          { required: true, message: this.$t('login.detailedAddress'), trigger: 'blur' }
        ]
      }
    }
  },
  watch: {
    '$i18n.locale'() {
      this.idType = this.$t('login.id')
      this.setBirthdayName()
      this.changeAddessName()
    }
  },
  created() {},
  mounted() {
    this.setBirthdayName()
    this.setAddressName()
    this.setBirthdayIcon()
    const a = document.querySelector('.el-cascader.address .el-input .el-input__prefix')
    console.log(a)
  },
  methods: {
    setBirthdayName() {
      document.querySelector('.birthday .el-input__icon').innerText = this.$t('login.birthday')
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$emit('next')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    setBirthdayIcon() {
      document.querySelector(
        '.birthday .el-input__suffix'
      ).innerHTML = `<i class="el-select__caret el-input__icon el-icon-arrow-down"></i>`
    },
    setAddressName() {
      document.querySelectorAll('.el-cascader.address .el-input').forEach(node => {
        const dom = document.createElement('span')
        dom.innerText = this.$t('login.address')
        dom.className = 'el-input__prefix'
        node.appendChild(dom)
      })
    },
    changeAddessName() {
      document
        .querySelectorAll('.el-cascader.address .el-input .el-input__prefix')
        .forEach(node => (node.innerText = this.$t('login.address')))
    }
  }
}
</script>

<style lang="scss">
.userinfo-content.step3 {
  & + .userinfo-content {
    margin-top: 30px;
  }
  .short-input {
    display: block;
    width: 240px;
  }
  &.cn {
    .country .el-input--prefix {
      .el-input__inner {
        padding-left: 80px;
      }
    }
    .birthday .el-input__prefix .el-input__icon {
      width: 40px;
    }
    .concern {
      .el-input--prefix {
        .el-input__inner {
          padding-left: 105px;
        }
      }
    }
    .other-phone {
      width: 240px;
    }
    .address {
      .el-input--suffix .el-input__inner,
      .el-cascader__label {
        padding-left: 75px;
        line-height: 42px;
      }
    }
  }
  &.en {
    .short-input {
      width: 300px;
    }
    .el-input--prefix {
      .el-input__inner {
        padding-left: 55px;
      }
    }
    .country .el-input--prefix {
      .el-input__inner {
        padding-left: 115px;
      }
    }
    .gender {
      width: 240px;
      .el-input--prefix {
        .el-input__inner {
          padding-left: 65px;
        }
      }
    }
    .birthday {
      &.el-input--prefix {
        .el-input__inner {
          padding-left: 70px;
        }
      }
      &.el-input__prefix {
        .el-input__icon {
          width: 60px;
        }
      }
    }
    .row-spacebetween.column {
      flex-direction: column;
      align-items: flex-start;
      .concern {
        width: 100%;
        .el-input--prefix {
          .el-input__inner {
            padding-left: 180px;
          }
        }
      }
    }
    .address {
      .el-input--suffix .el-input__inner,
      .el-cascader__label {
        padding-left: 125px;
        line-height: 42px;
      }
    }
  }
  &.jp {
    .el-input--prefix {
      .el-input__inner {
        padding-left: 65px;
      }
    }
    .birthday .el-input__prefix .el-input__icon {
      width: 80px;
      text-align: left;
    }
    .concern {
      .el-input--prefix {
        .el-input__inner {
          padding-left: 120px;
        }
      }
    }
    .other-phone {
      &.el-input--prefix {
        .el-input__inner {
          padding-left: 80px;
        }
      }
    }
    .address {
      .el-input--suffix .el-input__inner,
      .el-cascader__label {
        padding-left: 95px;
        line-height: 42px;
      }
    }
  }
  .birthday {
    .el-input__icon {
      text-align: left;
    }
    // .el-icon-arrow-down {
    //   width: 25px;
    //   text-align: center;
    //   right: 10px;
    // }
  }
  .input-with-select {
    width: 500px;
    .el-select .el-input {
      width: 130px;
      margin-top: 0;
    }
    .el-input__inner {
      color: #4a4a4a;
      text-align: left;
      padding-left: 10px;
    }
    .el-input-group__prepend {
      background-color: #fff;
    }
  }
  .row-spacebetween {
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .short-input {
      width: 240px;
    }
  }
  .el-date-editor {
    width: 240px;
  }
  .birthday {
    .el-input__icon {
      font-style: normal;
      line-height: 42px;
    }
  }
  .el-cascader {
    display: block;
    margin-top: 30px;
    .el-input {
      margin-top: 0;
    }
  }
}
.sign-step3 {
  .tip {
    width: 500px;
    line-height: 1.5;
    color: #d83838;
    font-size: 14px;
    margin-top: 30px;
  }
  .sign-btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0;
    .el-button {
      width: 240px;
    }
  }
}
</style>
