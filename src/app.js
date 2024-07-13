/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function createDomains() {
    let pronoun = ["my", "your", "our"];
    let adj = ["great", "awesome", "best", "beautiful", "exciting"];
    let noun = ["website", "business", "company", "restaurant", "e-commerce"];
    let domains = [];

    pronoun.forEach(pronombre => {
      adj.forEach(adjetivo => {
        noun.forEach(sujeto => {
          let lastTwoLetters = sujeto.slice(-2);
          let restOfString = sujeto.slice(0, -2);
          let domain = `${pronombre}${adjetivo}${restOfString}.${lastTwoLetters}`;
          domains.push(domain);
        });
      });
    });

    let numeroRandom = Math.floor(Math.random() * domains.length);
    return domains[numeroRandom];
  }

  let domainName = createDomains();

  let elementDomain = window.document.querySelector("#domain");

  elementDomain.innerHTML = domainName;

  let domainButton = document.querySelector("#generate-domain");

  domainButton.addEventListener("click", () => {
    let nuevoDomain = createDomains();
    elementDomain.innerHTML = nuevoDomain;
  });
};
