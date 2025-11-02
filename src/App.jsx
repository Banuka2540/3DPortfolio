import Header from "./components/Header";

export default function App() {
  return (
    
    <main>
      {/*Main background*/}
      
      <img className = "absolute top-0 right-0 opacity-60 z-[-1]" src="src\assets\gradient.png" alt="Gradient-img" />
      
      {/*blur effect*/}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"></div>

    <Header/>
    </main>
  )
}