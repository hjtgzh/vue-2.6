module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': 2,
    'no-unused-expressions': 2, //禁止无用的表达式
    'no-var': 2, //禁用var，用let和const代替
    'no-unused-vars': 2, //不能有声明后未被使用的变量或参数
    'no-param-reassign': 2, //禁止给参数重新赋值
    'no-plusplus': 0, //禁止使用++，--
    'no-redeclare': 2 //禁止重复声明变量
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
