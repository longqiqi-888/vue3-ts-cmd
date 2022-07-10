// 1.切换环境-手动更改
// const BASE_URL = 'http://tao.org/dev'
// const BASE_NAME = 'dev'

// const BASE_URL = 'http://tao.org/prod'
// const BASE_NAME = 'prod'

// const BASE_URL = 'http://tao.org/test'
// const BASE_NAME = 'test'

// 2.根据 process.env.NODE_ENV 不同环境值不一样（这种方法用最多）
// 通过definedPlugin注入不同的值
// let BASE_URL = ''
// let BASE_NAME = ''

// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = 'http://tao.org/dev'
//   BASE_NAME = 'dev'
// } else if (process.env.NODE_ENV === 'production') {
//   BASE_URL = 'http://tao.org/prod'
//   BASE_NAME = 'prod'
// } else {
//   BASE_URL = 'http://tao.org/test'
//   BASE_NAME = 'test'
// }

// export { BASE_NAME, BASE_URL }
