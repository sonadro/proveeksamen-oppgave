const loginForm = document.querySelector('.loginForm');

const login = async function(user) {
    const res = await fetch('http://localhost/user-login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user
        })
    });
    
    const result = await(res.json());
    
    console.log(result);

    if (!result.err) {
        location = '/';
    }
}

loginForm.addEventListener('submit', e => {
    e.preventDefault();

    const user = {
        email: loginForm.email.value,
        password: loginForm.password.value
    };

    login(user);
});