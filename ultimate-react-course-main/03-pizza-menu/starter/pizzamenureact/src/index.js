import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "images/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "images/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "images/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "images/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "images/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "images/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Company</h1>
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cusine. 6 creaative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      {!pizzas.soldOut ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : <p>We are still working on our menu. Please come back later :)</p>}

    </main>
  );
};

const Pizza = ({ pizzaObj }) => {

  return (
    <li className= {`pizza ${pizzaObj.soldOut ? "sold-out" : ""} `}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHours = 12;
  const closedHours = 22;
  const isOpen = hour >= openHours && hour <= closedHours;


  return (
    <footer className="footer">
      {isOpen ? (
        <Order closedHours="{closedHours}" openHours="{openHours}" />
      ) : (
        `we are happy to welcome you between ${openHours}:00 & ${closedHours}:00, however we are currently closed.`
      )}
    </footer>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const Order = ({ closedHours, openHours }) => {
  <div className="order">
    <p>
      we are open from {openHours}:00 until {closedHours}:00. Come visit us or
      order Online!
    </p>
    <button className="btn">Order</button>
  </div>;
};
