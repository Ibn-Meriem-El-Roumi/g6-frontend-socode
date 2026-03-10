(function(){
      emailjs.init({
        publicKey: "ROluEdT_ONQdjIAMs",
      });
   })();


//    window.addEventListener("DOMContentLoaded", async () => {
//        await emailjs.send("service_z2d252p", "template_v1a69ai", {name: "Louai", email: "chouchane@mail.com", message: "Hello World", title: "Saying Hi", time: new Date()}, {})

//    })

const title = document.querySelector("#title")
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const message = document.querySelector("#message")

const sendBtn = document.querySelector("#submit")

const serviceId = "service_z2d252p"
const templateId = "template_v1a69ai"
 

sendBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    
    const templateParams = {
        title: title.value,
        name: name.value,
        email: email.value,
        message: message.value
    }

    await sendMail(serviceId, templateId, templateParams)
})

async function sendMail(serviceId, templateId, templateParams){
    await emailjs.send(
        serviceId,
        templateId,
        templateParams
    )

    alert(`Email has been sent by ${templateParams.name}`)
}