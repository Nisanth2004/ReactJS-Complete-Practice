import React from "react";

class Apple extends React.Component
{
    render()
    {
        const{appleInfo}=this.props;
        const{type,color}=appleInfo;
        return(
            <h2>Im {color} {type}  Apple</h2>
        )
    }

}

export default Apple;