import { styled } from "../theme/Theme";
import React from "react";

const IconStyle = styled('div', {

})

export const Icon: React.FC<{children?: React.ReactNode}> = (props) => {
  return <IconStyle {...props}/>
}
