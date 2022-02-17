import { Base } from "../parts/Base/base";

const Error: React.FC<{statusCode: number}> = ({statusCode}) => {
    return (
        <Base>
            <p>{"error code : " + statusCode}</p>
        </Base>
    )
}

export default Error