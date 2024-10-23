window.onload = function() {
    if (!document.cookie.includes('cookieConsent=true')) {
        let consentBanner = document.createElement('div');
        consentBanner.innerHTML = `
            <div class="cookie-banner">
                This website uses cookies to ensure you get the best experience. 
                <button id="acceptCookies">Accept</button>
            </div>
        `;
        document.body.appendChild(consentBanner);
        
        document.getElementById('acceptCookies').onclick = function() {
            document.cookie = "cookieConsent=true; max-age=" + 60*60*24*30 + ";";
            consentBanner.style.display = 'none';
        };
    }
};





