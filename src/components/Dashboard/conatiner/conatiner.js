import React from "react";
import "./container.css";
import src1 from "../imgs/pic1.webp"


export default class Conatiner extends React.Component {
    render() {
        return <>

            <div className="conatiner_main_div">
                <div className="div_1">

                    <div className="context_div_1">



                        <div>
                            <div className="circle_div">
                                <div className="inner_circle">
                                    1
                       </div>
                            </div>
                            <div className="line_div">

                            </div>
                        </div>
                        <div className="img_text_div">
                            <div className="img_div">
                                <img className="img" src={src1} alt="" />
                            </div>
                            <div className="text_div">
                                <div className="text1">
                                    Choose What To Learn
                            </div>
                                <div className="text_2">
                                    From building websites to analyzing data,
                                    the choice is yours. Not sure where to start?
                                    We'll point you in the right direction.
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="div_2">



                        <div className="context_div_2">



                            <div>
                                <div className="circle_div">
                                    <div className="inner_circle">
                                        2
   </div>
                                </div>
                                <div className="line_div">

                                </div>
                            </div>
                            <div className="img_text_div">
                                <div className="img_div">
                                    <img className="img" src={src1} alt="" />
                                </div>
                                <div className="text_div">
                                    <div className="text1">
                                        Choose What To Learn
        </div>
                                    <div className="text_2">
                                        From building websites to analyzing data,
                                        the choice is yours. Not sure where to start?
                                        We'll point you in the right direction.
        </div>
                                </div>
                            </div>
                        </div>







                        <div  className="context_div_1">

                    

                    <div>                    
                    <div className="circle_div">
                        <div className="inner_circle">
                            3
                       </div>
                    </div>
                       
                       </div>
                    <div className="img_text_div">
                        <div className="img_div">
                            <img className="img" src={src1} alt=""/>
                        </div>
                        <div className="text_div">
                            <div className="text1">
                            Choose What To Learn
                            </div>
                            <div className="text_2">
                            From building websites to analyzing data,
                             the choice is yours. Not sure where to start? 
                             We'll point you in the right direction.
                            </div>
                        </div>
                    </div>
                    </div>

                    </div>
                </div>
            </div>

        </>
    }
}