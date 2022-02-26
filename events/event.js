const events = require('events')

const event = new events.EventEmitter()

event.on('click', function(value){
    console.log(`${value} is clicked`)
})

event.emit("click", "Button")
