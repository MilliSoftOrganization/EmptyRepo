import React from "react";
import ReactDom from "react-dom/client";
import "./stil.css";

class App extends React.Component {


    


  state = {
    cat: "a",
    items: [
      {
        img: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?cs=srgb&dl=pexels-yurii-hlei-1545743.jpg&fm=jpg",
        title: "car1",
        cat: "a",
      },

      {
        img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        title: "car2",
        cat: "a",
      },

      {
        img: "https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg",
        title: "car3",
        cat: "a",
      },

      {
        img: "https://www.cnet.com/a/img/resize/872011f2661df2916f3efa1008cdb75c49a4a595/hub/2016/12/14/8ea41d9d-2a76-4f35-9d9d-1ef472f7d9dc/car-photography-how-to.jpg?auto=webp&fit=crop&height=675&width=1200",
        title: "car3",
        cat: "a",
      },

      {
        img: "https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg",
        title: "billie1",
        cat: "b",
      },
      {
        img: "https://hips.hearstapps.com/hmg-prod/images/girlontherise-template-color-1508350042.png?crop=0.501xw:1.00xh;0.363xw,0&resize=1200:*",
        title: "billie2",
        cat: "b",
      },
      {
        img: "https://media.glamourmagazine.co.uk/photos/63b6b2e9543f9ea0cca5f036/4:3/w_1920,h_1440,c_limit/BILLIE%20EILISH%20BODY%2005012023-sq.jpg",
        title: "billie3",
        cat: "b",
      },

      {
        img: "https://www.rollingstone.com/wp-content/uploads/2022/07/billie-eilish-2022-cr-Mason-Poole-1800.jpg",
        title: "billie4",
        cat: "b",
      },

      {
        img: "https://hips.hearstapps.com/hmg-prod/images/oprah-winfrey-arrives-at-the-premiere-of-owns-david-makes-news-photo-1678107564.jpg?crop=1xw:0.646xh;center,top&resize=1200:*",
        title: "oprah1",
        cat: "c",
      },

      {
        img: "https://www.rollingstone.com/wp-content/uploads/2019/09/oprah.jpg?w=1581&h=1054&crop=1",
        title: "oprah2",
        cat: "c",
      },

      {
        img: "https://sukcespisanyszminka.pl/wp-content/uploads/2021/11/Oprah-Winfrey.jpg",
        title: "oprah3",
        cat: "c",
      },

      {
        img: "https://media.self.com/photos/642f0039e36b28138c36198e/4:3/w_2560%2Cc_limit/GettyImages-1166543559.jpg",
        title: "oprah4",
        cat: "c",
      },

      {
        img: "https://i.scdn.co/image/ab6761610000e5eba14b47e177e2414ebefa3dc2",
        title: "yuriy1",
        cat: "d",
      },

      {
        img: "https://www.aquarelle.md/uploads/news/80606/152_i.jpg",
        title: "yuriy2",
        cat: "d",
      },

      {
        img: "https://bodysize.org/wp-content/uploads/2020/02/Yuri-Shatunov-300x400.jpg",
        title: "yuriy3",
        cat: "d",
      },
      {
        img: "https://ss.sport-express.ru/userfiles/materials/179/1794231/large.jpg",
        title: "yuriy4",
        cat: "d",
      },
    ]
  };

  btn=(x)=>{
   this.setState({cat:x})
  }
  render() {
    let filteredList = this.state.items.filter((i) => i.cat === this.state.cat);
    return (
      <div className="container">
        <ul>
          <li onClick={()=>this.btn("a")} >Cars</li>
          <li onClick={()=>this.btn("b")} >Billie</li>
          <li onClick={()=>this.btn("c")} >Oprah</li>
          <li onClick={()=>this.btn("d")} >Yuriy</li>
        </ul>
        <div className="sekiller">
          {filteredList.map((item, index) => {
            return (
              <div className="sekil  ">
                <div className="item">
                  <img src={item.img} alt="IMG" />
                </div>
                <div className="sekil-text">
                  <h4>{item.title}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<App />);
