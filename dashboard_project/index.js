function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "flex"
    const uparro = document.querySelector('#top_arro')
    uparro.style.display = "none"
    const sbar = document.querySelector('#search_bar')
    sbar.style.display = "none"

}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "none"
    const uparro = document.querySelector('#top_arro')
    uparro.style.display = "block"
    const sbar = document.querySelector('#search_bar')
    sbar.style.display = "block"
}