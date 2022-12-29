import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav id="btn">
          <div className="menubtn">
            <div className="menu"></div>
            <div className="menu"></div>
            <div className="menu"></div>
          </div>
        </nav>
        <img className="logo" src={require("./images/effinity..png")} />
        <div id="eff">
          <div className="eff"></div>
          <h2>
            <span className="text">The digital nucleus for</span>
            <span className="text">
              {" "}
              buisnesses that believe <div id="dot"></div>
            </span>
            <span id="line">
              <img src={require("./images/Line-1.png")} width={"37%"} />
            </span>
          </h2>
        </div>
      </header>

      <div className="imgs">
        <img src={require("./images/image 2.png")} width={"190px"} />
        <img src={require("./images/image 3.png")} width={"190px"} />
        <img src={require("./images/image 4.png")} width={"120px"} />
        <img src={require("./images/image 2.png")} width={"190px"} />
        <img src={require("./images/image 3.png")} width={"190px"} />
        <img src={require("./images/image 4.png")} width={"120px"} />
      </div>
      <div className="allsections">
        <div className="main">
          <div className="arrow">
            <img src={require("./images/Frame.png")} width={"50px"} />
          </div>
          <div className="first">
            <div className="side">
              <h2>
                Built to give you a competitive edge<div id="dot"></div>
              </h2>
              <p id="bracket">
                <span className="sq">[</span> Primed for your people
                <span className="sq">]</span>
              </p>
              <p className="central">
                Centralized database management system to track employees,
                processes and results in one place.
              </p>
              <div className="arrow2">
                <img src={require("./images/Frame.png")} width={"50px"} />
              </div>
            </div>
            <div>
              <img
                className="rect"
                src={require("./images/Rectangle 41.png")}
                width={"65px"}
              />
              <img
                className="image"
                src={require("./images/industryimg.png")}
                width={"690px"}
              />
            </div>
          </div>
        </div>
        <section>
          <div className="sec1">
            <p className="section2">
              Built to give you a competitive edge
              {/* <span className="blue">.</span> */}
              <div id="dot"></div>
            </p>
            <p className="line-1">
              <span className="line">[</span>Primed for your people
              <span className="line">]</span>
            </p>
            <div className="group">
              <img src={require("./images/Ellipse 4.png")} className="img-1" />
              <img src={require("./images/Ellipse 6.png")} className="img-2" />
              <img src={require("./images/Line-7.png")} className="img-3" />
              <img src={require("./images/iPad.png")} className="img-4" />
              <img src={require("./images/Group 14.png")} className="img-5" />
            </div>

            <p className="line-2">
              Centralised database management system, to track employees,
              processes and results in one place.
            </p>
          </div>
        </section>
        <div className="sec2">
        <div className="main2" >
          <div className="top"> <p className ="rank">000%</p>
          <p className="sub">more revenue growth for data-driven organizations compared to the competition</p>
          </div>
          <div className="top1"> <p className ="rank1">000%</p>
          <p className="sub1">more revenue growth for data-driven organizations compared to the competition</p>
          </div>
         
          <img className="blue1" src={require("./images/Rectangle 43.png")} alt="" />
          <img className="rectangle"src={require("./images/Rectangle 44.png")} alt="" />
        <img className ="firstpic"src={require("./images/DSC00287 5.png")}   alt="" />
        
       
        <img className="blue2" src={require("./images/Rectangle 43.png")} alt="" />
        <img className="rectangle2"src={require("./images/Rectangle 44.png")} alt="" />
       
       

          <img className="secondpic" src={require("./images/DSC00287 5.png")} alt="" />
        </div>
      <div className="backs">
          <img className="first2" src={require("./images/first pic.png")} alt="" />
          <h4 className="heading1">Leading smart</h4>
          
           <h4 className="heading2">meter</h4> 
           
           <h4 className="heading3">  manufacturer</h4>
           
            <h4 className="heading4"> modernizes</h4>
            <h4 className="heading5">India</h4>

            <span className="next">Genus Power gets electrifying</span>
            <span className="next1">boost from IBM Storage</span>
            <div className="newone">
                   <p className="one">See how technology</p>
                   <p className="two">is driving real-world</p>
                   <p className="three">solutions
                   <a href=""><img className="arrow5"src={require("./images/Frame1.png")} alt="" /></a></p>
                 
 
 
           
            </div>

          <img className="second" src={require("./images/Rectangle 31.png")} alt="" />
          <h4 className="heading11">Leading smart</h4>
          
          <h4 className="heading21">meter</h4> 
          
          <h4 className="heading31">  manufacturer</h4>
          
           <h4 className="heading41"> modernizes</h4>
           <h4 className="heading51">India</h4>

           <span className="next2">Genus Power gets electrifying</span>
            <span className="next21">boost from IBM Storage</span>
            <div className="newone2">
                   <p className="one">See how technology</p>
                   <p className="two">is driving real-world</p>
                   <p className="three">solutions <a href="#"><img className="arrow5"src={require("./images/Frame1.png")} alt="" /></a> </p>
                 
            
 
  
           
            </div>

      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
