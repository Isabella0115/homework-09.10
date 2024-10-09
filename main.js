document.addEventListener("DOMContentLoaded", function() {
    // Create header
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to the Main Page";
    header.appendChild(h1);

    // Create nav
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "login.html";
    a.textContent = "Log in";
    li.appendChild(a);
    ul.appendChild(li);
    nav.appendChild(ul);
    header.appendChild(nav);

    // Create main content
    const main = document.createElement("main");

    // Create left sidebar
    const leftSidebar = document.createElement("aside");
    leftSidebar.className = "left-sidebar";
    const sidebarContent = document.createElement("p");
    sidebarContent.textContent = "This is the sidebar content. It can contain links, information, or anything else.";
    leftSidebar.appendChild(sidebarContent);
    main.appendChild(leftSidebar);

    // Create main section
    const section = document.createElement("section");
    section.className = "content";

    const innerSection1 = document.createElement("div");
    innerSection1.className = "inner-section";
    const innerContent1 = document.createElement("p");
    innerContent1.textContent = "This is the first section of the main content. Here you can introduce the main features of your site.";
    innerSection1.appendChild(innerContent1);
    section.appendChild(innerSection1);

    const innerSection2 = document.createElement("div");
    innerSection2.className = "inner-section";
    const innerContent2 = document.createElement("p");
    innerContent2.textContent = "This is the second section of the main content. Provide additional details and information here.";
    innerSection2.appendChild(innerContent2);
    section.appendChild(innerSection2);

    main.appendChild(section);

    // Create footer
    const footer = document.createElement("footer");
    footer.className = "footer";
    const footerContent = document.createElement("p");
    footerContent.textContent = "© 2024 Your Website. All rights reserved.";
    footer.appendChild(footerContent);

    // Append elements to body
    document.body.appendChild(header);
    document.body.appendChild(main);
    document.body.appendChild(footer); // Fix: Append footer to body, not main
});
