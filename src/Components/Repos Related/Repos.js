import React, {useContext} from 'react'
import styled from "styled-components"

import {GithubContext} from "../../Context/UserContext"
import {ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D} from "../Charts"

const Repos = () => {
    const {repos} = useContext(GithubContext);

// Reduce to get Languages Only
    let languages = repos.reduce((total, item)=>{
      // Destructure language for every item iterated:
      const {language} = item;
      // If Language == null: Return my object
      if (!language) return total;

      // *** Creating Key-Value Object for each language ***
      // {Label: languageName, Value: quantity}

      // Language DOES NOT EXIST: Create it, Value 1       
      if(!total[language]) {
        total[language] = {label: language, value: 1};
      } 
      // Language EXISTS: Keep Label, Add + 1 to the previous value
      else {
        total[language] = {...total[language], value: total[language].value + 1};
      }
      return total
    },{})

// Transform LANGUAGES to an Array of Objects: Using languages values {label, value}
// SORT it, to keep the most used to the Top
// SLICE to get top 5.
    languages = Object.values(languages).sort((a,b)=>{
      return b.value - a.value;
    }).slice(0,5);

    return (
        <section className="section">
            <Wrapper className="section-center">
                {/* <ExampleChart data={chartData}></ExampleChart> */}
                <Pie3D data={languages}></Pie3D>
            </Wrapper>
        </section>
    )
}

// Styled Components
const Wrapper = styled.div`
display: grid;
justify-items: center;
gap: 1rem;

/* Chart */
div{
  width: 100% !important;  
  box-shadow: 0px 0px 10px var(--ShadowSmooth);  
}
.fusioncharts-container{
  width: 100% !important;
}
svg{
  width: 100% !important;
}
`

export default Repos
