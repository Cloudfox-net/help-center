

// Search suggestions
function searchSuggestion(val) {
  const input = document.getElementById('search');
  input.value = val;
}


// Cursor
options = {
  "outerStyle": "disable",
  "hoverEffect": "pointer-blur",
  "hoverItemMove": false,
  "defaultCursor": false,
  "outerWidth": 30,
  "outerHeight": 30
}
magicMouse(options);


// Duvidas
function duvidas(evt) {

  var i, duvida;

  duvida = document.querySelectorAll(".duvidas article");
  for (i = 0; i < duvida.length; i++) {
    duvida[i].classList.remove("active")
  }

  evt.currentTarget.parentElement.className = "active";
}


// Category buttons menu
function categoryButtonMark() {

  var i, categoryButton, categoryContainer, conta, ferramentas, integracoes;
  categoryButton = document.querySelectorAll('.category_bt');
  categoryContainer = document.querySelector('.category_container');
  conta = document.querySelector('.category_bt.conta');
  ferramentas = document.querySelector('.category_bt.ferramentas');
  integracoes = document.querySelector('.category_bt.integracoes');

  for (i = 0; i < categoryButton.length; i++) {
    // categoryButton[i].classList.remove("active");

    if (window.location.href.indexOf("/conta") > -1) {
      conta.classList.add("active");
      categoryContainer.classList.add("conta");

    } else if (window.location.href.indexOf("/ferramentas") > -1) {
      ferramentas.classList.add("active");
      categoryContainer.classList.add("ferramentas");

    } else if (window.location.href.indexOf("/integracoes") > -1) {
      integracoes.classList.add("active");
      categoryContainer.classList.add("integracoes");

    }

  }
}
categoryButtonMark();



// Copy to clipboard
function copyURL() {

  var copyText = document.getElementById("inputURL");
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(copyText.value);

  var tooltip = document.getElementById("tooltip_clipboard");
  tooltip.innerHTML = "Copiado!";
}
function outTooltip() {
  var tooltip = document.getElementById("tooltip_clipboard");
  tooltip.innerHTML = "Copiar URL";
}



// Reading progress bar
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".reading_progress_bar", {
    width: '100%',
    scrollTrigger: {
      scroller: ".content",
      trigger: ".post_container article",
      start: "top center",
      end: "bottom top",
      scrub: true,
      markers: false
    }
  });

});



// lunr
// {% assign counter = 0 %}
// var documents = [{% for page in site.pages %}{% if page.url contains '.xml' or page.url contains 'assets' %}{% else %}{
//     "id": {{ counter }},
//     "url": "{{ site.url }}{{ page.url }}",
//     "title": "{{ page.title }}",
//     "body": "{{ page.content | markdownify | replace: '.', '. ' | replace: '</h2>', ': ' | replace: '</h3>', ': ' | replace: '</h4>', ': ' | replace: '</p>', ' ' | strip_html | strip_newlines | replace: '  ', ' ' | replace: '"', ' ' }}"{% assign counter = counter | plus: 1 %}
//     }, {% endif %}{% endfor %}{% for page in site.without-plugin %}{
//     "id": {{ counter }},
//     "url": "{{ site.url }}{{ page.url }}",
//     "title": "{{ page.title }}",
//     "body": "{{ page.content | markdownify | replace: '.', '. ' | replace: '</h2>', ': ' | replace: '</h3>', ': ' | replace: '</h4>', ': ' | replace: '</p>', ' ' | strip_html | strip_newlines | replace: '  ', ' ' | replace: '"', ' ' }}"{% assign counter = counter | plus: 1 %}
//     }, {% endfor %}{% for page in site.posts %}{
//     "id": {{ counter }},
//     "url": "{{ site.url }}{{ page.url }}",
//     "title": "{{ page.title }}",
//     "body": "{{ page.date | date: "%Y/%m/%d" }} - {{ page.content | markdownify | replace: '.', '. ' | replace: '</h2>', ': ' | replace: '</h3>', ': ' | replace: '</h4>', ': ' | replace: '</p>', ' ' | strip_html | strip_newlines | replace: '  ', ' ' | replace: '"', ' ' }}"{% assign counter = counter | plus: 1 %}
//     }{% if forloop.last %}{% else %}, {% endif %}{% endfor %}];

// var idx = lunr(function () {
//     this.ref('id')
//     this.field('title')
//     this.field('body')

//     documents.forEach(function (doc) {
//         this.add(doc)
//     }, this)
// });
// function lunr_search(term) {
//     document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
//     if(term) {
//         document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
//         //put results on the screen.
//         var results = idx.search(term);
//         if(results.length>0){
//             //console.log(idx.search(term));
//             //if results
//             for (var i = 0; i < results.length; i++) {
//                 // more statements
//                 var ref = results[i]['ref'];
//                 var url = documents[ref]['url'];
//                 var title = documents[ref]['title'];
//                 var body = documents[ref]['body'].substring(0,160)+'...';
//                 document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
//             }
//         } else {
//             document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
//         }
//     }
//     return false;
// }



// Apply mouse pointer class on markdown links
// const articleLinks = document.querySelectorAll(".post_container article a");
// function applyMagicLink() {
//   for (i = 0; i < articleLinks.length; i++) {
//     articleLinks[i].classList.add("magic-hover");
//   }
// }
// applyMagicLink();

