const inputs = {
    fname: {
        type: 'text',
        name: 'fname',
        id: 'fname',
        pattern: "[A-Za-z\\-']+",
        className: 'form-input text',
        placeholder: 'First Name',
    },
    mname: {
        type: "text",
        name: "mname",
        pattern: "[A-Za-z\\-']+\\.?",
        id: "mname",
        className: 'form-input text',
        placeholder: 'Middle Name'
    },
    lname: {
        type: "text",
        name: "lname",
        pattern: "[A-Za-z\\-']+",
        id: "lname",
        className: 'form-input text',
        placeholder: 'Last Name'
    },
    dob: {
        type: "date",
        name: "dob",
        max: new Date().toJSON().substring(0, 10),
        id: "dob",
        className: 'form-input date'
    },
    phno: {
        type: "tel",
        name: "phno",
        id: "phno",
        pattern: '(\\+91 ?)?[0-9]{10}',
        className: 'form-input text',
        placeholder: 'Phone Number'
    },
    email: {
        type: "email",
        name: "email",
        id: "email",
        className: 'form-input text',
        placeholder: 'Email ID'
    },
    school: {
        type: "text",
        name: "school",
        id: "school",
        pattern: "[A-Za-z. '\\-&]+",
        className: 'form-input text',
        placeholder: "Name of School"
    },
    gname: {
        type: "text",
        name: "gname",
        id: "gname",
        pattern: "[A-Za-z .\\-']+",
        className: 'form-input text',
        placeholder: "Guardian's Full Name"
    },
    gphno: {
        type: "tel",
        name: "gphno",
        pattern: '(\\+91 ?)?[0-9]{10}',
        id: "gphno",
        className: 'form-input text',
        placeholder: "Guardian's Phone Number"
    }
}

const selects = {
    sex: {
        name: "sex",
        id: "sex",
        className: 'form-input select'
    },
    classStd: {
        name: "classStd",
        id: "classStd",
        className: 'form-input select'
    },
    rltn: {
        name: "rltn",
        id: "rltn",
        className: 'form-input select'
    },
    food: {
        name: 'food',
        id: "food",
        className: 'form-input select'
    }
}

const textareas = {
    address: {
        name: "address",
        id: "address",
        className: 'form-input textarea',
        placeholder: "Student's Residential Address"
    },
    medical: {
        name: "medical",
        id: "medical",
        className: 'form-input textarea',
        placeholder: 'Any medical conditions or allergies'
    }
}

const options = {
    sex: {
        default: '—— Click here to select ——',
        male: 'Male',
        female: 'Female',
        others: 'Others'
    },
    classStd: {
        default: '—— Click here to select ——',
        1: 'Class I',
        2: 'Class II',
        3: 'Class III',
        4: 'Class IV',
        5: 'Class V',
        6: 'Class VI',
        7: 'Class VII',
        8: 'Class VIII',
        9: 'Class IX',
        10: 'Class X',
        11: 'Class XI',
        12: 'Class XII'
    },
    rltn: {
        default: "—— Click here to select ——",
        father: "Father",
        mother: "Mother",
        uncleaunt: "Uncle/Aunt",
        grandparent: "Grandparent",
        eldersibling: "Elder sibling",
        other: "Other"
    },
    food: {
        default: "—— Click here to select ——",
        veg: "Veg",
        nonveg: "Non-Veg"
    }
}

export { inputs, selects, textareas, options }