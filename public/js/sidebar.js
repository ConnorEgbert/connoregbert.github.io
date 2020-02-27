
function toggle_sidebar() {
    const toggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('#sidebar');
    const checkbox = document.querySelector('#sidebar-checkbox');

    checkbox.checked = !checkbox.checked;
}