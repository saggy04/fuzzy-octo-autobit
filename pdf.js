window.onload = function () {


    let date;
    let objF;



    document.getElementById("submit")
        .addEventListener("click", () => {
                const name = document.querySelector('.Name').value;
                const address = document.querySelector('.Address').value;
                const email = document.querySelector('.Email').value;
                const phone = document.querySelector('.Phone').value;
                const stream = document.querySelector('.Stream').value;
                const roll = document.querySelector('.Roll').value;

                objF = {
                    Name: name,
                    Address: address,
                    Email: email,
                    Phone: phone,
                    Stream: stream,
                    Roll: roll
                }

                if(name != "" && address != "" && email != "" && phone != "" && stream != "" && roll != ""){

                    document.querySelector('.nameF').innerHTML = objF.Name;
                    document.querySelector('.addressF').innerHTML = objF.Address;
                    document.querySelector('.mobileF').innerHTML = objF.Phone;
                    document.querySelector('.emailF').innerHTML = objF.Email;
                    document.querySelector('.StreamF').innerHTML = objF.Stream;
                    document.querySelector('.RollF').innerHTML = objF.Roll;

                    date = new Date().toDateString();
                    let localTime = new Date().toLocaleTimeString();
                    document.querySelector('.customDate').innerHTML = date;
                    document.querySelector('.customTime').innerHTML = localTime;
                    document.querySelector('.Input').style.display = "none";
                    document.querySelector('.Vanish').style.display = "block";
                }
                else{
                    alert("Please fill the form with correct values.");
                }

        })

    document.getElementById("back")
        .addEventListener("click", () =>{
            document.querySelector('.Input').style.display = "block";
            document.querySelector('.Vanish').style.display = "none"; 
        })



    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("invoice");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'registration_form.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })


}