import {useState} from "react";
function LoginPage() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");

    const handleSubmit =async (e)=>{
        e.preventDefault();
        setError("");

        try{
            const response = await fetch("http://localhost:5000/api/auth/login",{
                method : "POST",
                headers : { "Content-Type": "application/json"},
                body : JSON.stringify({email,password}),
            });

            const data = await response.json();
            if(!response.ok){
                throw new Error(data.error || "Login failed");
            }
            localStorage.setItem("token",data.token);
            alert('Login Successful!');
            window.location.href = "/dashboard";
        }catch(err){
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>Login Page</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email: </label>
                    <input 
                        type = "email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;