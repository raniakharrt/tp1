import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin, redirectPath }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState(''); // initialiser la variable state username
    const [password, setPassword] = useState(''); // initialiser la variable state password
    const [remember, setRemember] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin') {
            Swal.fire({
                title: "Drag me!",
                icon: "success",
                draggable: true
            });
            onLogin(); // Appel de la fonction de connexion
            navigate(redirectPath || "/services"); // Redirection vers la route souhaitée
        } else {
            Swal.fire({
                icon: "error",
                title: "Connection Error",
                text: "Wrong credentials!"
            });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="login">Login</label>
                </div>

                <h4 className="text-center mb-3">Connexion</h4>

                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Entrez votre nom d'utilisateur"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Entrez votre mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100">Valider</button>
            </form>
        </>
    );
}

export default Login;
