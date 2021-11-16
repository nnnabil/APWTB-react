import React from "react";
import Foot from "./Foot";
import Head from './Head';
import Product from './Product';


function Hello(){
    return(
        <div>
            <Head/>
            <div>
                <Product name="Nokia" price ="12000"/>
                <Product name="Samsung" price ="15000"/>
                <Product name="iPhone" price ="20000"/>
            </div>
            <Foot/>
        </div>
    )
}

export default Hello;