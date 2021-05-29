import React, {useContext} from 'react'
import styled from "styled-components"

import {GithubContext} from "../../Context/UserContext"
import {ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D} from "../Charts"

const Repos = () => {
    const {repos} = useContext(GithubContext);

    // STEP 2 - Chart Data
    const chartData = [
      {
        label: "Venezuela",
        value: "290"
      },
      {
        label: "Saudi",
        value: "260"
      },  
      {
        label: "Tom",
        value: "70"
      },  
    ];

    return (
        <section className="section">
            <Wrapper className="section-center">
                {/* <ExampleChart data={chartData}></ExampleChart> */}
                <Pie3D data={chartData}></Pie3D>
            </Wrapper>
        </section>
    )
}

// Styled Components
const Wrapper = styled.div`

`

export default Repos
