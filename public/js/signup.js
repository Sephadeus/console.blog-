const signUp = async (e) => {
    e.preventDefault();
    const username = document.getElementById('signUsername').value.trim();
    const password1 = document.getElementById('signPW1').value.trim();
    const password2 = document.getElementById('signPW2').value.trim();
    
    if(username && password1 && password2) {
        if(password1 == password2) {
        const res = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                username, password
            }),
            headers: {'Content-Type': 'application/json'}
        });
        if(res.ok){
            document.location.replace('/profile')
        } else {
            alert(res.statusText)
        }
    }
 }
}