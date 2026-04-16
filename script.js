let data = [
  {
    id: 1,
    paragraph: "Java is a powerful, object-oriented programming language widely used for building enterprise-level applications, Android apps, and large systems. It follows the principle of 'write once, run anywhere' using the Java Virtual Machine (JVM)."
  },
  {
    id: 2,
    paragraph: "Python is a high-level, easy-to-learn programming language known for its simple syntax and readability. It is widely used in web development, data science, artificial intelligence, automation, and scripting."
  },
  {
    id: 3,
    paragraph: "JavaScript is a versatile programming language mainly used for web development. It allows developers to create interactive and dynamic web pages, and it runs directly in the browser as well as on servers using Node.js."
  }
];


function display(){
    let cards = "";

    for(let i in data){
        cards += `
        <div class="card">
            <div class="top">${data[i].id}</div>
            <p class="paragraph">${data[i].paragraph}</p>
            <button class="btn">Read More</button>
        </div>`;
    }

    let containerref = document.getElementById("container");
    containerref.innerHTML = cards;
}

display();