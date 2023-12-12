const primaryHeader = document.querySelector('.nav')
const scrollWatcher = document.createElement('div')

scrollWatcher.setAttribute('.data-scroll-watcher', '')
primaryHeader.before(scrollWatcher)

const navObserver = new IntersectionObserver((entries) => {
    console.log(entries)
    primaryHeader.classList.toggle('sticking')
})

navObserver.observe(scrollWatcher)