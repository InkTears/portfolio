import'../css/booki.css';
import'../css/normalize.css';
import React from'react';

function Booki() {
    const ref = React.useRef();
    const [height, setHeight] = React.useState("0px");
    const onLoad = () => {
        setHeight(ref.current.contentWindow.document.body.scrollHeight + "px");
    };
    return(
        <div className="Booki">
            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <iframe ref={ref}
                    onLoad={onLoad}
                    src="/booki/index.html"
                    width="100%"
                    height={height}
                    style={{
                        width: "100%",
                        overflow: "auto",
                    }}></iframe>
        </div>
    );
}

export default Booki;