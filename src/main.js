import React from 'react';

function Main() {
    return (
        <main>
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <button className="btn-primary">Reserve a Table</button>
                    </div>
                    <div className="hero-image">
                        <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Mediterranean appetizers on slate board" />
                    </div>
                </div>
            </section>

            <section className="specials">
                <div className="specials-header">
                    <h2>This week's specials!</h2>
                    <button className="btn-secondary">Online Menu</button>
                </div>

                <div className="specials-grid">
                    <article className="special-card">
                        <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Greek salad with feta cheese and olives" />
                        <div className="card-content">
                            <div className="card-header">
                                <h3>Greek salad</h3>
                                <span className="price">$12.99</span>
                            </div>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            <button className="delivery-btn">Order a delivery</button>
                        </div>
                    </article>

                    <article className="special-card">
                        <img src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Bruchetta topped with tomatoes and herbs" />
                        <div className="card-content">
                            <div className="card-header">
                                <h3>Bruchetta</h3>
                                <span className="price">$ 5.99</span>
                            </div>
                            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                            <button className="delivery-btn">Order a delivery</button>
                        </div>
                    </article>

                    <article className="special-card">
                        <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Lemon dessert slice on a plate" />
                        <div className="card-content">
                            <div className="card-header">
                                <h3>Lemon Dessert</h3>
                                <span className="price">$ 5.00</span>
                            </div>
                            <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            <button className="delivery-btn">Order a delivery</button>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
}

export default Main;