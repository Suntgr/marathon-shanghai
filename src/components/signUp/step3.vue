<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="sign-step3">
    <div class="userinfo-content step3" :class="$i18n.locale">
      <div class="sign-title">{{ $t('login.step3Title') }}</div>
      <div class="row-spacebetween">
        <el-form-item prop="name">
          <el-input
            v-model.trim="ruleForm.name"
            class="short-input"
            @blur="converToPinnyin"
            :placeholder="$t('login.placeholderName')"
          >
            <span slot="prefix">{{ $t('login.name') }}</span>
          </el-input>
        </el-form-item>
        <el-form-item prop="namePingyin">
          <el-input
            v-model.trim="ruleForm.namePingyin"
            class="short-input"
            :placeholder="$t('login.placeholderPinyin')"
          >
            <span slot="prefix">{{ $t('login.pinyin') }}</span>
          </el-input>
        </el-form-item>
      </div>
      <div class="row-spacebetween">
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
        <el-form-item v-if="+this.user.phoneOrEmail" prop="userEmail">
          <el-input
            v-model.trim="ruleForm.userEmail"
            class="other-phone"
            :placeholder="$t('login.placeholderEmail')"
          >
            <span slot="prefix">{{ $t('login.email') }}</span>
          </el-input>
        </el-form-item>
        <el-form-item v-else prop="userPhone">
          <el-input
            v-model.trim="ruleForm.userPhone"
            class="other-phone"
            :placeholder="$t('login.placeholderOtherPhone')"
          >
            <span slot="prefix">{{ $t('login.phone') }}</span>
          </el-input>
        </el-form-item>
      </div>
      <el-form-item prop="idCard">
        <el-input
          :placeholder="$t('login.placeholderId')"
          v-model="ruleForm.idCard"
          class="input-with-select"
        >
          <el-select v-model="idType" slot="prepend">
            <el-option
              v-for="(item, index) in $t('login.idType')"
              :key="index"
              :label="item"
              :value="index"
            ></el-option>
          </el-select>
        </el-input>
      </el-form-item>

      <div class="row-spacebetween">
        <el-form-item prop="birthday">
          <el-date-picker
            class="birthday"
            v-model="ruleForm.birthday"
            value-format="yyyy-MM-dd"
            default-value="2000-10-01"
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
          <el-input v-model.trim="ruleForm.concern" class="concern">
            <span slot="prefix">{{ $t('login.concern') }}</span>
          </el-input>
          <!-- <el-select
            class="short-input concern"
            v-model="ruleForm.concern"
            :placeholder="$t('login.placeholder')"
          >
            <el-option
              v-for="(item, index) in $t('login.concernList')"
              :key="index"
              :label="item"
              :value="item"
            ></el-option>
            <span slot="prefix">{{ $t('login.concern') }}</span>
          </el-select> -->
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
      <el-button :loading="signing" type="primary" @click="submitForm('ruleForm')">{{
        $t('login.sign')
      }}</el-button>
      <el-button class="blue-btn">{{ $t('login.wait') }}</el-button>
    </div>
  </el-form>
</template>

<script>
// var pinyin = require('pinyin')
import pinyin from 'pinyin'
import addressOptions from '@/assets/js/address.js'
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
      signing: false,
      idType: 0,
      countries: [],
      ruleForm: {
        name: '',
        namePingyin: '',
        userPhone: '',
        userEmail: '',
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
        namePingyin: [
          { required: true, message: this.$t('login.placeholderName'), trigger: 'blur' }
        ],
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
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    '$i18n.locale'() {
      this.idType = this.$t('login.id')
      this.setBirthdayName()
      this.changeAddessName()
    }
  },
  created() {
    this.$apis.user.getCountries().then(({ data }) => {
      this.countries = data.list.map(e => ({ value: e.area_id, label: e.name }))
    })
    console.log(11, this.user)
    // if (+this.user.phoneOrEmail) {
    //   this.ruleForm.userEmail = ''
    //   this.rules.userEmail = [{ required: true, validator: validateAccount, trigger: 'blur' }]
    // } else {
    //   email = this.user.phoneOrEmail
    //   phone = '222'
    // }
  },
  mounted() {
    this.setBirthdayName()
    this.setAddressName()
    this.setBirthdayIcon()
  },
  methods: {
    converToPinnyin() {
      if (this.ruleForm.name) {
        const name = pinyin(this.ruleForm.name, { style: pinyin.STYLE_NORMAL })
        console.log(name)
        const firstUpperCase = ([first, ...rest]) => first.toUpperCase() + rest.join('')
        this.ruleForm.namePingyin = name.reduce((p, c) => {
          return p + ' ' + firstUpperCase(c[0])
        }, '')
        console.log(this.ruleForm.namePingyin)
      }
    },
    setBirthdayName() {
      document.querySelector('.birthday .el-input__icon').innerText = this.$t('login.birthday')
    },
    postInfo() {
      this.signing = true
      let email, phone
      if (+this.user.phoneOrEmail) {
        email = this.ruleForm.userEmail
        phone = this.user.phoneOrEmail
      } else {
        email = this.user.phoneOrEmail
        phone = this.ruleForm.userPhone
      }
      Promise.all([
        this.$apis.user.updateUserInfo({
          truename: this.ruleForm.name,
          full_name: this.ruleForm.namePingyin,
          nickname: this.user.nickname,
          gender: this.ruleForm.gender,
          card_type: this.idType,
          card_id: this.ruleForm.idCard,
          email,
          phone,
          country_id: this.ruleForm.country,
          birthday: this.ruleForm.birthday,
          provinces_id: this.ruleForm.address[0] + '0000',
          city_id: this.ruleForm.address[1] + '00',
          area_id: this.ruleForm.address[2],
          address: this.ruleForm.detailedAddress
        }),
        this.$apis.user.updateOtherInfo({
          truename: this.ruleForm.name2,
          relation: this.ruleForm.concern,
          phone: this.ruleForm.phone,
          provinces_id: this.ruleForm.otherAddress[0] + '0000',
          city_id: this.ruleForm.otherAddress[1] + '00',
          area_id: this.ruleForm.otherAddress[2],
          address: this.ruleForm.detailedAddress2
        })
      ])
        .then(() => {
          this.$emit('next')
        })
        .finally(() => {
          this.signing = false
        })
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.postInfo()
        } else {
          return false
        }
      })
    },
    setBirthdayIcon() {
      document.querySelector('.birthday .el-input__suffix').innerHTML =
        '<i class="el-select__caret el-input__icon el-icon-arrow-down"></i>'
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
  },
  beforeDestroy() {
    console.log(22, this.ruleForm)
    sessionStorage.setItem('user', JSON.stringify(this.ruleForm))
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
  &.zh-CN {
    .country .el-input--prefix {
      .el-input__inner {
        padding-left: 80px;
      }
    }
    .birthday .el-input__prefix .el-input__icon {
      width: 40px;
    }
    .concern {
      width: 240px;
      &.el-input--prefix {
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
        &.el-input--prefix {
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
  &.ja {
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
      width: 240px;
      &.el-input--prefix {
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
