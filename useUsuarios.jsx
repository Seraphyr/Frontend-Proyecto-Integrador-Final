

export default function useUsuarios(){


    const login = async (username, password) => {
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                username,
                password
            }),
        });

        const data = await response.json()
        console.log(data);
        alert(data.usuario.nombre_de_usuario)
    }

    return{
        login
    }
    
}