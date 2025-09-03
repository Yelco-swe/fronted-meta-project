
import './App.css';

function App() {
  return (
   <>
    <header>
        <div class="container">
            <div class="logo">LITTLE LEMON</div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#reservations">Reservations</a></li>
                    <li><a href="#order">Order Online</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <section class="hero">
        <div class="hero-content">
            <div class="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button class="btn-primary">Reserve a Table</button>
            </div>
            <div class="hero-image">
                <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Mediterranean appetizers on slate board" />
            </div>
        </div>
    </section>
    
    
    
    <footer>
        <div class="container">
            <p>&copy; 2024 Little Lemon Restaurant. All rights reserved.</p>
        </div>
    </footer>
    
    </> 
    
  );
}

export default App;
