(()=>{var e,t=document.getElementById("buttonInstall");window.addEventListener("beforeinstallprompt",(function(n){n.preventDefault(),e=n,t.classList.remove("hidden"),t.addEventListener("click",(function(){t.classList.add("hidden"),e.prompt(),e.userChoice.then((function(t){"accepted"===t.outcome?console.log("User accepted the install prompt"):console.log("User dismissed the install prompt"),e=null}))}))})),window.addEventListener("appinstalled",(function(e){console.log("PWA was installed")}))})();