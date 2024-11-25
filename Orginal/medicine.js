// Drug Information Data
const drugData = {
    'A': [
        "Abilify",
        "Acetaminophen",
        "Actos",
        "Adderall",
        "Advair Diskus",
        "Aleve",
        "Alprazolam",
        "Amoxicillin",
        "Aspirin",
        "Atorvastatin"
    ],
    'B': [
        "Benadryl",
        "Betamethasone",
        "Bactrim",
        "Biaxin",
        "Bystolic",
        "Boniva",
        "Belviq",
        "Benzonatate",
        "Bisoprolol",
        "Brilinta"
    ],
    'C': [
        "Cymbalta",
        "Ciprofloxacin",
        "Crestor",
        "Celexa",
        "Coumadin",
        "Clonazepam",
        "Cialis",
        "Citalopram",
        "Claritin",
        "Clozapine"
    ],
    'D': [
        "Doxycycline",
        "Diazepam",
        "Dexilant",
        "Diovan",
        "Depakote",
        "Dulcolax",
        "Dilaudid",
        "Duloxetine",
        "Dextroamphetamine",
        "Diclofenac"
    ],
    'E': [
        "Eliquis",
        "Erythromycin",
        "Effexor",
        "Estradiol",
        "Ezetimibe",
        "Excedrin",
        "Epipen",
        "Elavil",
        "Enbrel",
        "Etoposide"
    ],
    'F': [
        "Flonase",
        "Famotidine",
        "Furosemide",
        "Flagyl",
        "Flexeril",
        "Fentanyl",
        "Flomax",
        "Fluoxetine",
        "Farxiga",
        "Fioricet"
    ],
    'G': [
        "Gabapentin",
        "Glipizide",
        "Glyburide",
        "Gleevec",
        "Griseofulvin",
        "Gemfibrozil",
        "Guaifenesin",
        "Geodon",
        "Gentamicin",
        "Glucophage"
    ],
    'H': [
        "Hydrochlorothiazide",
        "Humira",
        "Heparin",
        "Hydrocodone",
        "Hydroxychloroquine",
        "Haldol",
        "Hyzar",
        "Humalog",
        "Halcion",
        "Hydrea"
    ],
    'I': [
        "Ibuprofen",
        "Imitrex",
        "Imodium",
        "Inderal",
        "Ivermectin",
        "Isosorbide",
        "Invokana",
        "Invega",
        "Intron",
        "Iodoquinol"
    ],
    'J': [
        "Januvia",
        "Jentadueto",
        "Jardiance",
        "Jakafi",
        "Jetrea",
        "Jalyn",
        "Jemperli",
        "Juxtapid",
        "Jivi",
        "Jeuveau"
    ],
    'K': [
        "Ketorolac",
        "Klor-Con",
        "Klonopin",
        "Kybella"
    ],
    'L': [
        "Labetalol",
        "Lamotrigine",
        "Lansoprazole",
        "Levothyroxine",
        "Lidocaine",
        "Lisinopril",
        "Loratadine",
        "Lovastatin",
        "Lithium"
    ],
    'M': [
        "Metformin",
        "Metoprolol",
        "Montelukast",
        "Mirtazapine",
        "Methotrexate",
        "Morphine",
        "Meloxicam",
        "Miconazole"
    ],
    'N': [
        "Naproxen",
        "Nitroglycerin",
        "Nifedipine",
        "Nortriptyline",
        "Nystatin"
    ],
    'O': [
        "Omeprazole",
        "Oxycodone",
        "Olanzapine",
        "Ondansetron"
    ],
    'P': [
        "Paroxetine",
        "Prednisone",
        "Propranolol",
        "Pantoprazole"
    ],
    'Q': [
        "Quetiapine",
        "Quinapril"
    ],
    'R': [
        "Ritalin",
        "Rosuvastatin",
        "Ropinirole",
        "Remicade"
    ],
    'S': [
        "Sertraline",
        "Simvastatin",
        "Sildenafil",
        "Sitagliptin"
    ],
    'T': [
        "Tramadol",
        "Trazodone",
        "Tamsulosin",
        "Topiramate"
    ],
    'U': [
        "Ulipristal",
        "Ursodiol"
    ],
    'V': [
        "Venlafaxine",
        "Varenicline",
        "Valacyclovir",
        "Vancomycin"
    ],
    'W': [
        "Warfarin",
        "Wixela Inhub"
    ],
    'X': [
        "Xalatan",
        "Xanax"
    ],
    'Y': [
        "Yaz",
        "Yervoy"
    ],
    'Z': [
        "Zoloft",
        "Zetia",
        "Zyrtec",
        "Zofran"
    ]
};

// Function to Show Drugs for Selected Letter
function showDrugs(letter) {
    const drugListContainer = document.getElementById("drug-list");

    // Clear any previous content
    drugListContainer.innerHTML = "";

    // Check if drugs are available for the selected letter
    if (drugData[letter] && drugData[letter].length > 0) {
        const ul = document.createElement("ul"); // Create an unordered list
        ul.classList.add("drug-list");

        drugData[letter].forEach(drug => {
            const li = document.createElement("li");
            li.classList.add("drug-item");
            li.textContent = drug;

            // Attach click event to show modal
            li.onclick = () => showModal(drug);

            ul.appendChild(li);
        });

        drugListContainer.appendChild(ul);
    } else {
        drugListContainer.innerHTML = `<p>No drugs available for the letter ${letter}.</p>`;
    }
}

// Function to Show the Modal
function showModal(drugName) {
    const modal = document.getElementById("drug-modal");
    const drugTitle = document.getElementById("drug-title");
    const drugImg = document.getElementById("drug-img");
    const drugInfo = document.getElementById("drug-info");
    const drugInstructions = document.getElementById("drug-instructions");

    // Construct the image path dynamically based on the drug name
    const imagePath = `Images/drugs/${drugName}.jpg`;

    // Example data for modal; populate this with actual details
    const drugDetails = {
        img: imagePath,
        info: `Detailed information about ${drugName} is currently not available.`,
        instructions: `Instructions for taking ${drugName} will be provided here.`
    };

    // Populate the modal with data
    drugTitle.textContent = drugName;
    drugImg.src = drugDetails.img;
    drugImg.alt = `Image of ${drugName}`;
    drugInfo.textContent = drugDetails.info;
    drugInstructions.textContent = drugDetails.instructions;

    // Display the modal
    modal.style.display = "block";
}


// Function to Close the Modal
function closeModal() {
    const modal = document.getElementById("drug-modal");
    modal.style.display = "none";
}

// Close the modal if clicked outside the content area
window.onclick = function (event) {
    const modal = document.getElementById("drug-modal");
    if (event.target === modal) {
        closeModal();
    }
};
