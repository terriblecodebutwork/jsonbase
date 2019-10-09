import fetch from 'node-fetch'

const api = 'https://jsonbase.com/'

export default class Bucket {
    constructor(name) {
        this.name = name
    }

    async get(key) {
        let data = await fetch(api + this.name + '/' + key)
            .then(x => x.json())
        return data
    }

    async put(key, value) {
        let data = await fetch(api + this.name + '/' + key, {
            method: "PUT",
            body: JSON.stringify(value),
            headers: { 'content-type': 'application/json' }
        }).then(x => x.json())
        return data
    }
}

// Tests
//
// let demo_bucket = new Bucket('demo_bucket');
// demo_bucket.get('joe')
//     .then(data => console.log(data))

// demo_bucket.put('mike', {hello: 'mike'})
//     .then(data => console.log(data))
