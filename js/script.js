// ----------------------------------------------------------------------------
//                         making the header sticky
// ----------------------------------------------------------------------------

const headerTop = document.getElementById('header-top')

window.addEventListener('scroll', hideHeader)

function hideHeader() {
    if (window.scrollY > headerTop.offsetHeight + 50) {
        headerTop.classList.add('hide-header-top')
        headerTop.parentNode.style.width = '100%'
        headerTop.parentNode.style.position = 'fixed'
    } else {
        headerTop.classList.remove('hide-header-top')
        headerTop.parentNode.style = ''
    }
}

// ----------------------------------------------------------------------------
//                                  Ending
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
//                         filter collapse functionality
// ----------------------------------------------------------------------------

const filterToggleCheckBox = document.getElementById('filter-toggle-btn')
const navToggleBtn = document.querySelector('.nav-toggle-btn')

navToggleBtn.addEventListener('click', () => {
    filterToggleCheckBox.checked = false
})

// ----------------------------------------------------------------------------
//                                  Ending
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
//                         filter collapse functionality
// ----------------------------------------------------------------------------

const filterCollapseBtn = document.querySelectorAll('#filter-collapse')
const filterCollapseHeading = document.querySelectorAll('.filter-collaps-heading')

filterCollapseBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentNode.parentNode.classList.toggle('show-filter')
    })
});

filterCollapseHeading.forEach(heading => {
    heading.addEventListener('click', () => {
        heading.parentNode.classList.toggle('show-filter')
    })
});

// ----------------------------------------------------------------------------
//                                  Ending
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
//                Product Image Show function in product page
// ----------------------------------------------------------------------------

const productImgBig = document.getElementById('product-main-img')
const productImgSmall = document.querySelectorAll('.product-small-img')

productImgSmall.forEach(image => {
    image.addEventListener('click', () => {
        productImgBig.src = image.src
    })
})

// ----------------------------------------------------------------------------
//                                  Ending
// ----------------------------------------------------------------------------