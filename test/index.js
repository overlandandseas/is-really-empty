const isEmpty = require('../index')


if(isEmpty([]) && !isEmpty([1])) {
  console.log('test pass')
} else {
  console.log('test fail')
}
