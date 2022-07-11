
import { Link, useParams } from "react-router-dom";
// import Item from "./Item";

function Content({ keys, onHandleSubmit, onHandleCheckbox, predictionHandle, prediction }) {
  const param = useParams();
  // console.log(keys[param.key]);
  // function generateId() {
  //   return (
  //     Math.random().toString(36).substring(2) +
  //     new Date().getTime().toString(36)
  //   );
  // }
  return (
    <div className="contents text-capitalize">
      <hr />

      <Link to="/predict">
        <div className="mainPredict">
         
          {/*  <input style={{ height: "40px", width: "100px" }} type="submit" value="Predict" onClick={predictionHandle} /> */}
          <button className="btnd" onClick={predictionHandle}><span>Predict</span></button>
          {/* <button className="btn btn-success btnd" onClick={predictionHandle}>Predict</button> */}
        </div>
     </Link>{/* 
      <div className="predict text-capitalize text-center w-70">
        <p><u><i>{prediction.warning}</i></u></p>
        
      </div>
      <div className="predict">

        <h1 className="predict2">{prediction.prediction}</h1><hr />
        <h1 className="predict1">{prediction.prediction_in_arabic}</h1>

      </div>
      
      <div className="percaution">
        <div className="per-en">
          <p>{prediction.precaution_1}</p>
          <p>{prediction.precaution_2}</p>
          <p>{prediction.precaution_3}</p>
          <p>{prediction.precaution_4}</p>
        </div><hr />
        <div className="per-ar">
          <p>{prediction.precaution_1_in_arabic}</p>
          <p>{prediction.precaution_2_in_arabic}</p>
          <p>{prediction.precaution_3_in_arabic}</p>
          <p>{prediction.precaution_4_in_arabic}</p>
        </div>
      </div>
      <div className="notes">
        
        <p style={{ backgroundColor:"#7386D5"}}>{prediction.Overview}</p>
      </div>
      <div className="notes">

        <p>{prediction.Causes}</p>
      </div>
      <div className="notes">

        <p>{prediction.Risk_Factors}</p>
      </div> */}
      {/* ------------------------------------------------- */}
      <div className="container">
        <div className='row'>
          <div className="content col col-sm-12 sym form-group form-check col-6" >
            <legend style={{ color: "white", textAlign: "left", padding: "8px", textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue" }} > <h2 className="h2 text-capitalize id">{param.key}</h2></legend>
            <form onSubmit={onHandleSubmit}>
              <div className='form-row' style={{margin:"auto", width: "90%", padding: "5px"  }}>

                {keys[param.key].map((el, index) => (<div key={index}  style={{ display: "inline-block" }} className="form-group form-check  col-4">
                 
                   <div className="chh col " style={{ margin: "5px" ,textAlign: "left", width: "90%", padding: "5px" }}>

                    
                      <input
                        className="  mx-2 chh"
                        type="checkbox"
                        id={el}
                        name={el}
                        value={el}
                        
                        onChange={(e) => onHandleCheckbox(e.target)}
                      />
                    <label className=" " htmlFor={el}> {el}</label>
                   
                  </div>
                </div>
                ))}
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
      );
}

      export default Content;
