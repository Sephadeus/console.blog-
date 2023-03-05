const signUp = async (e) => {
    e.preventDefault();
    const username = document.getElementById('signUsername').value.trim();
    const password1 = document.getElementById('signPW1').value.trim();
    const password2 = document.getElementById('signPW2').value.trim();
    
    if(username && password1 && password2) {

        // try {
        // const exists = await fetch('/api/users/existingUser', {
        //     method: 'GET',
        //     body: JSON.stringify({
        //         username
        //     }),
        //     headers: {'Content-Type': 'application/json'}
        // });
        // if (exists.ok) {
        //     console.log(exists);
        // } else {
        //     alert(exists.statusText);
        // }

        if(password1 == password2) {
        const password = password1;
        const res = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({
                username, password
            }),
            headers: {'Content-Type': 'application/json'}
        });
        if(res.ok){
            console.log(res);
            document.location.replace('/thankyou');
        } else {
            alert(res.statusText)
        }
    }
 } 
}


document.getElementById('signUp').addEventListener("click", signUp);