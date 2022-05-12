function myFunction() {

    var name = document.getElementById("Name").value;
    var age = document.getElementById("Age").value;
    var phone = document.getElementById("Phone").value;
    var email = document.getElementById("Email").value;
    var address = document.getElementById("Address").value;
    var program = document.getElementById("Program").value;
    var id = document.getElementById("Id").value;
    var level = document.getElementById("Level").value;
    var section = document.getElementById("Section").value;

    if (name == "") {
        alert("Name must be filled out");
        return false
    }

    if(age == ""){
        alert("Age must be filled out.")
        return false
    }

    if(phone == ""){
        alert("Phone number must be filled out.")
        return false
    }

    if(email == ""){
        alert("Email address must be filled out.")
        return false
    }

    if(address == ""){
        alert("Mailing address must be filled out.")
        return false
    }

    if(program == ""){
        alert("Program must be filled out.")
        return false
    }

    if(id == ""){
        alert("ID number must be filled out.")
        return false
    }

    if(level == ""){
        alert("Year level must be filled out.")
        return false
    }

    if(section == ""){
        alert("Section must be filled out.")
        return false
    }

    document.getElementById("output").innerHTML = "Output:"
    document.getElementById("name").innerHTML = name;
    document.getElementById("age").innerHTML = age;
    document.getElementById("phone").innerHTML = phone;
    document.getElementById("email").innerHTML = email;
    document.getElementById("address").innerHTML = address;
    document.getElementById("program").innerHTML = program;
    document.getElementById("id").innerHTML = id;
    document.getElementById("level").innerHTML = level;
    document.getElementById("section").innerHTML = section;
}