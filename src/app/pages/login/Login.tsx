import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const handleEntrar = () => {
        navigate('/entrar');
    };

    return (
        <div>
            <form>
                <label>
                    <span>Email</span>
                    <input 
                        type='email'
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </label>
                <label>
                    <span>Senha</span>
                    <input 
                        type='password'
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                </label>
                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>
            </form>
        </div>
    );
};
