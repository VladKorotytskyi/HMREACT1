import "./App.css";

const name = "Vlad";
const text = "Ласкаво просимо до нашого сайту!";
const url =
  "https://i.guim.co.uk/img/media/327aa3f0c3b8e40ab03b4ae80319064e401c6fbc/377_133_3542_2834/master/3542.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=34d32522f47e4a67286f9894fc81c863";

const youtube = {
  name: "Youtube",
  url: "https://www.youtube.com/",
};

const arrays = ["Червоний", "Синій", "Зелений"];

function calculate(a, b) {
  return a + b;
}

function App() {
  return (
    <>
      <h1>{name}</h1>
      <p>{text}</p>

      <button><a href={youtube.url}>Click</a></button>

      <p>{calculate(12, 5)}</p>

      <ul>
        {arrays.map((color) => (
          <li>{color}</li>
        ))}
      </ul>

      <img src={url} alt="cat" />
    </>
  );
}

export default App;
