const loginUser = async (e) => {
    e.preventDefault();
    const username = document.getElementById('signInUser').value.trim();
    const password = document.getElementById('signInPw').value.trim();
    
    if(username && password) {
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