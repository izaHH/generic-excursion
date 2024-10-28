// GTM script to be inserted in the <head> section
const gtmNoscript_head = `
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KBSP5MMB');</script>
<!-- End Google Tag Manager -->`;

// Insert the GTM script in the <head> section on DOMContentLoaded
document.addEventListener("DOMContentLoaded", function(){
    const head = document.head;
    if(head){
        head.insertAdjacentHTML('afterbegin', gtmNoscript_head);
    }
});

// GTM noscript element to be inserted in the <body> section
const gtmNoscript_body = `
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KBSP5MMB"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
`;

// Insert the GTM noscript code as the first child of the <body> tag
document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    if (body) {
        body.insertAdjacentHTML('afterbegin', gtmNoscript_body);
    }
});
