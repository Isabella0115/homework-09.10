document.addEventListener("DOMContentLoaded", function() {
    // Create header
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Login Page";
    header.appendChild(h1);

    // Create nav
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "index.html";
    a.textContent = "Home";
    li.appendChild(a);
    ul.appendChild(li);
    nav.appendChild(ul);
    header.appendChild(nav);

    // Create main content
    const main = document.createElement("main");
    const section = document.createElement("section");
    section.className = "login-section";

    const h2 = document.createElement("h2");
    h2.textContent = "Login Form";
    section.appendChild(h2);

    const intro = document.createElement("p");
    intro.textContent = "Please enter your credentials to log in.";
    section.appendChild(intro);

    // Create form
    const form = document.createElement("form");
    form.action = "#";
    form.method = "post";
    const labelUsername = document.createElement("label");
    labelUsername.for = "username";
    labelUsername.textContent = "Username: ";
    const inputUsername = document.createElement("input");
    inputUsername.type = "text";
    inputUsername.id = "username";
    inputUsername.name = "username";

    const labelPassword = document.createElement("label");
    labelPassword.for = "password";
    labelPassword.textContent = "Password: ";
    const inputPassword = document.createElement("input");
    inputPassword.type = "password";
    inputPassword.id = "password";
    inputPassword.name = "password";

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Login";

    form.appendChild(labelUsername);
    form.appendChild(inputUsername);
    form.appendChild(document.createElement("br"));
    form.appendChild(labelPassword);
    form.appendChild(inputPassword);
    form.appendChild(document.createElement("br"));
    form.appendChild(submitButton);
    section.appendChild(form);
    main.appendChild(section);

    // Append elements to body
    document.body.appendChild(header);
    document.body.appendChild(main);
});
