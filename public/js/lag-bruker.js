const createForm = document.querySelector('.lagBrukerForm');

const createUser = async function(user) {
    const res = await fetch('http://localhost/lag-bruker', {
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
};

createForm.addEventListener('submit', e => {
    e.preventDefault();

    console.log(createForm.email.value, createForm.username.value, createForm.password.value);
    const user = {
        username: createForm.username.value,
        email: createForm.email.value,
        password: createForm.password.value
    };

    createUser(user);
});