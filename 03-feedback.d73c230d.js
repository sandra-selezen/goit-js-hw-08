const e=document.querySelector(".feedback-form");!function(){let t=localStorage.getItem("feedback-form-state");t&&(t=JSON.parse(t),Object.entries(t).forEach((([t,a])=>{e.elements[t].value=a})))}(),e.addEventListener("input",(function(e){e.preventDefault();let t=localStorage.getItem("feedback-form-state");t=t?JSON.parse(t):{},t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))})),e.addEventListener("submit",(function(e){e.preventDefault();let t=localStorage.getItem("feedback-form-state");console.log(t=JSON.parse(t)),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.d73c230d.js.map
