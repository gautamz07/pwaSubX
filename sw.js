// install service worker
self.addEventListener('install' , evt => {
  console.log('Service worker installed !!')
})

// activate service workerl
self.addEventListener('activate' , evt => {
  console.log('Service worker activated !!')
})