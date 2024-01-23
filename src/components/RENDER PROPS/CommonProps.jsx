import { useState } from "react"

const CommonProps = ({children}) => {
    const [like, setlike] = useState(0);

    const handleLike = () => {
        setlike(prevLike => prevLike + 1)  
    };

    return children ({like, handleLike})
};

export default CommonProps