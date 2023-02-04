$(async function(){
    await fetch('/data/login', {
        method:'delete'
    })
    location.href='/login.html'
})()