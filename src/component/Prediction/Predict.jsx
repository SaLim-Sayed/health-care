
import { BrowserRouter, Link, Route, Routes, useParams } from "react-router-dom";
// import Item from "./Item";

function Predict({ prediction, predictionHandle }) {
    const param = useParams();
    // console.log(keys[param.key]);
    // function generateId() {
    //   return (
    //     Math.random().toString(36).substring(2) +
    //     new Date().getTime().toString(36)
    //   );
    // }
    return (
        <div className="bg-dark w-100">

        <div className="contents2  text-capitalize">
            <Link to="/">
                <div className="">
                    {/*  <input style={{ height: "40px", width: "100px" }} type="submit" value="Predict" onClick={predictionHandle} /> */}
                    {/* <button className="btn btn-success btnn" >rePredict</button> */}
                    <button className="btnn" ><span>RePredict</span></button>
                </div>
            </Link>
            <div className="mainPredict">
                {/*  <input style={{ height: "40px", width: "100px" }} type="submit" value="Predict" onClick={predictionHandle} /> */}
                {/* <button className="btn btn-success" onClick={predictionHandle}><a href="/predict"></a>Predict</button> */}


            </div>
            <hr />



            <div className="predict text-capitalize text-center ">
                <p className="m-4 text-center "><u><i>{prediction.warning}</i></u></p>

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
                    <h3>Overview</h3>
                    <p style={{ backgroundColor: "#7386D5" }}>{prediction.Overview}</p>
                    <p style={{ backgroundColor: "#7386D5" }}>{prediction.Overview_in_arabic}</p>
            </div>
            <div className="notes">
                    <h3>Causes</h3>
                    <p>{prediction.Causes}</p>
                    <p>{prediction.Causes_in_arabic}</p>
            </div>
            <div className="notes">
                    <h3>Risk_Factors</h3>
                    <p>{prediction.Risk_Factors}</p>
                    <p>{prediction.Risk_Factors_in_arabic}</p>
            </div>
            {/* ------------------------------------------------- */}

        </div>
    </div>
    );
}

export default Predict;
