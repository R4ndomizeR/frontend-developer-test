const numbers = {
  formatThousand (value, delim = ' ') {
    return Number(value).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, `$1${delim}`)
  },
  parseThousand (value, delim = ' ') {
    return Number(value.replace(new RegExp(delim, 'g'), ''))
  }
}
export default numbers
