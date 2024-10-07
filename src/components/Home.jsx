import { Header } from "./Header";
import { CardPizza } from "./CardPizza";
import { pizzas } from "../assets/js/pizzas.js";

export function Home() {
  const mapPizzas = pizzas.map((pizza) => {
    return <CardPizza key={pizza.id} pizzaInfo={pizza} cartButton={false} />;
  });

  return (
    <>
      <Header />
      <div className="row m-3 section-card">{mapPizzas}</div>
    </>
  );
}
