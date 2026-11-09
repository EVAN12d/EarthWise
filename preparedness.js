// For checklist
const checkboxes = document.querySelectorAll('.check-item input');
const percentage = document.getElementById('percentage');
const taskCount = document.getElementById('taskCount');
const progressBar = document.getElementById('progressBar');

function updateProgress() {
    let completed = 0;
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            completed++;
        }
    });

    let total = checkboxes.length;
    let percent = Math.round((completed / total) * 100);

    percentage.textContent = percent + '%';
    taskCount.textContent = completed + ' of ' + total + ' tasks completed';
    progressBar.style.width = percent + '%';
}

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', updateProgress);
});

const regionContacts = {
    "Yangon Region": ["+95 1 392028, +95 1 392029, +95 1 392030", "No. 42 Kannar/Strand Road, Botahtaung Township, Yangon, The Republic of the Union of Myanmar.", "mrcsyangon@redcross.org.mm"],
    "Mandalay Region": ["+959 2597349133", "Between 79, 27*28 Street, Regional Health Office, Chanayetharzan Township, Mandalay Region.", "mrcsmandalay@redcross.org.mm"],
    "Sagaing Region": ["+959 265435723", "Between 20*21 Street, ChanMyaWady Ward, Monywar Township.", "mrcssagaing@redcross.org.mm"],
    "Bago Region": ["+959 254033315", "Corner of Pyitawthar and Pyitawaye Street, at Public Hospital, Bago Region.", "mrcsbago@redcross.org.mm"],
    "Magway Region": ["+959 401572156", "Pyitawthar Street, Pyitawthar Ward, Magway Township.", "mrcsmagway@redcross.org.mm"],
    "Ayeyarwady Region": ["+959 783801073", "Regional Health Office, Thitsar Street, Pathein Township.", "mrcsayeyarwady@redcross.org.mm"],
    "Tanintharyi Region": ["+959 695027208, +959 778708350", "Thitaw Street, Byaw Taw Wa Ward, Dawei Township.", "mrcstanintharyi@redcross.org.mm"],
    "Kachin State": ["+959 259716620", "Sumprabum Road, Ayar Ward, Myitkyina Township.", "mrcskachin@redcross.org.mm"],
    "Kayah State": ["+959 254307886", "No (7), Corner of Sithu Street and Oupaday Yone Street, Minsu Ward, Loikaw Township.", "mrcskayah@redcross.org.mm"],
    "Kayin State": ["+959 770060479", "Thiri Street, No (4) Ward, Hpaan Township, Kayin State.", "mrcskayin@redcross.org.mm"],
    "Chin State": ["+959 400305280", "No (353/B), Banku Street, Pyitawthar Ward, Hakha Township.", "mrcschin@redcross.org.mm"],
    "Mon State": ["+959 977115634, +959 255808058", "Uzina Pagoda Road, Panbetan Ward, Mawlamyine Township, Mon State.", "mrcsmon@redcross.org.mm"],
    "Rakhine State": ["+959 453074395", "Mayyu Street, Satyonesu Ward, Near Nursing Home, Sittwe Township, Rakhine State.", "mrcsrakhine@redcross.org.mm"],
    "Southern Shan State": ["+959 761965277", "Anouk Myo Pat Street, South of the Beekeeping Office, Taunggyi.", "mrcssouthernshan@redcross.org.mm"],
    "Northern Shan State": ["+959 403709089, +959 403728118", "No (1) Ward, Corner of Lanmadaw Street and AGD Bank, Lashio Township, Shan State.", "mrcsnorthernshan@redcross.org.mm"],
    "Eastern Shan State": ["+959 254866293", "Hwaykhar Village, Beside the Public Hospital and Nursing College, Kengtung Township.", "mrcseasternshan@redcross.org.mm"],
    "Nay Pyi Taw": ["+959 67 3419041, +959 67 3419046", "Razathingaha Road, Dekhinathiri, Nay Pyi Taw,The Republic of the Union of Myanmar.", "mrcsnaypyitaw@redcross.org.mm"]
};

function updateRegion() {
    let region = document.getElementById("regionSelect").value;
    let contact = regionContacts[region];

    document.getElementById("regionName").textContent = region;
    document.getElementById("regionPhone").textContent = contact[0];
    document.getElementById("regionPhone").href = "tel:" + contact[0].replaceAll(" ", "");
    document.getElementById("regionAddress").textContent = contact[1];
    document.getElementById("regionEmail").textContent = contact[2];
}

document.getElementById("regionSelect").addEventListener("change", updateRegion);

updateRegion();
updateProgress();