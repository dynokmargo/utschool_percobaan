function hitungTotal() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let total = 0;
    let list = [];

    checkboxes.forEach(cb => {
        if (cb.checked) {
            total += parseInt(cb.value);
            list.push(cb.nextElementSibling.innerText.split(" - ")[0]);
        }
    });

    document.getElementById("total").innerText = "Rp " + total.toLocaleString("id-ID");
    document.getElementById("rincian").innerHTML = list.length > 0 ? "<b>Dipilih:</b><br>" + list.join("<br>") : "";
}

function resetMenu() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(cb => cb.checked = false);
    document.getElementById("total").innerText = "Rp 0";
    document.getElementById("rincian").innerHTML = "";
}

function showTab(tabId) {
    const sections = document.querySelectorAll(".menu-section");
    sections.forEach(sec => sec.classList.remove("active"));
    document.getElementById(tabId).classList.add("active");

    document.getElementById("btn-makanan").classList.remove("active");
    document.getElementById("btn-minuman").classList.remove("active");
    document.getElementById("btn-" + tabId).classList.add("active");
}
