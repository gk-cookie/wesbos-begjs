console.log("starting");
setTimeout(function() {
  console.log("running");
}, 2000);
console.log("ending");

const go = document.querySelector('.go')

go.addEventListener('click', function(e) {
    const el = e.currentTarget;
    console.log(el);
    
})