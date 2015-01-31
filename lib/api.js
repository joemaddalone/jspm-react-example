import jsonp from 'jsonp'

class Api {
  constructor() {
    this.Url = "http://www.filltext.com/?rows=100&name={firstName}"
  }

  load() {
    return new Promise((resolve, reject) => {
      jsonp(this.Url, (err, data) => {
        err ? reject(err) : resolve(data)
      })
    })
  }
}

export default new Api()
