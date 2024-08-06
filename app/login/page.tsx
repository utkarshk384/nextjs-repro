
import React from "react"

type Props = {
    children?: React.ReactNode
}

const TestComponent: React.FC<Props> = (props) => {
    const {} = props
    
    return (
        <div>
            USer is logged in
        </div>
    )
}

export default TestComponent