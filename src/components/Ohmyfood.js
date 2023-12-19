import'../css/ohmyfood.css';
import React from'react';

function Ohmyfood() {
    const ref = React.useRef();
    const [height, setHeight] = React.useState("0px");
    const onLoad = () => {
        setHeight(ref.current.contentWindow.document.body.scrollHeight + "px");
    };
    return(
        <div className="Ohmyfood">
            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <iframe ref={ref}
                    onLoad={onLoad}
                    src="/ohmyfood/index.html"
                    width="100%"
                    height={height}
                    style={{
                        width: "100%",
                        overflow: "auto",
                    }}></iframe>
        </div>
    );
}

export default Ohmyfood;