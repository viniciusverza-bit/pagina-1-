
/* Configurações Gerais */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f4f7f6;
    color: #333;
    line-height: 1.6;
}

.container {
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px;
}

/* Header */
header {
    background: linear-gradient(135deg, #007bff, #00bfa5);
    color: white;
    text-align: center;
    padding: 60px 0;
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

header p {
    font-size: 1.2rem;
    font-weight: 300;
}

/* Seções */
section {
    margin: 40px 0;
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

h2 {
    color: #007bff;
    margin-bottom: 20px;
    border-bottom: 2px solid #f4f7f6;
    padding-bottom: 10px;
}

/* Grid de Cards */
.grid-areas {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.card {
    background: #f8faf9;
    padding: 20px;
    border-left: 5px solid #00bfa5;
    border-radius: 4px;
    transition: transform 0.2s;
}

.card:hover {
    transform: translateY(-5px);
}

.card h3 {
    margin-bottom: 10px;
    color: #333;
}

/* Formulário */
form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 600px;
    margin-top: 20px;
}

input, textarea {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
}

input:focus, textarea:focus {
    outline: none;
    border-color: #007bff;
}

button {
    background: #007bff;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s;
}

button:hover {
    background: #0056b3;
}

/* Mensagem de Feedback */
.hidden {
    display: none;
}

#mensagem-sucesso {
    margin-top: 20px;
    padding: 15px;
    background-color: #d4edda;
    color: #155724;
    border-radius: 4px;
    border: 1px solid #c3e6cb;
    font-weight: bold;
}

/* Footer */
footer {
    text-align: center;
    padding: 20px;
    background: #333;
    color: white;
    margin-top: 40px;
    font-size: 0.9rem;
}
